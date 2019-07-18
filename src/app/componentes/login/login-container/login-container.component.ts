import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/servicios/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-container',
  templateUrl: './login-container.component.html',
  styleUrls: ['./login-container.component.css']
})
export class LoginContainerComponent implements OnInit {

  public mensajeError = false;
  public mensaje = '';

  constructor(private _authServ: AuthService, private _router: Router) { }

  ngOnInit() {
  }

  public realizarLogueo(event: { correo: string, clave: string }) {
    // console.log('Recibo el event', event);
    this.mensajeError = false;
    this._authServ.logIn(event)
      .then(() => {
        this._router.navigate(['home']);
      })
      .catch((err) => {
        // console.log('Error en el logueo dentro del componente', err);
        this.mostrarMensaje(err.code);
        console.error(err.code);
      });
  }
  private elegirMensaje(codigo: string) {
    let mensaje = '';
    switch (codigo) {
      case 'auth/user-disabled': {
        mensaje = 'Usuario inhabilitado.';
        break;
      }
      case 'auth/user-not-found': {
        mensaje = 'Usuario inexistente.';
        break;
      }
      case 'auth/wrong-password': {
        mensaje = 'Contraseña incorrecta.';
        break;
      }
      case 'auth/too-many-requests': {
        mensaje = 'Espere unos minutos y reintente.';
        break;
      }
      default: {
        mensaje = 'Hay problemas técnicos.';
        break;
      }
    }

    return mensaje;
  }

  private mostrarMensaje(codigo: string) {
    this.mensaje = this.elegirMensaje(codigo);
    //alert(this.mensaje);
    this.mensajeError = true;
    setTimeout(() => { this.mensajeError = false; }, 2000);
  }

}
