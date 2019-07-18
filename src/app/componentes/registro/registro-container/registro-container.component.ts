import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/servicios/auth/auth.service';
import { FirebaseService } from 'src/app/servicios/firebase/firebase.service';
import { Router } from '@angular/router';
import { UploadTaskSnapshot } from '@angular/fire/storage/interfaces';
import { Usuario } from 'src/app/models/usuario/usuario';
import { diccionario } from 'src/app/models/diccionario';

@Component({
  selector: 'app-registro-container',
  templateUrl: './registro-container.component.html',
  styleUrls: ['./registro-container.component.css']
})
export class RegistroContainerComponent implements OnInit {

  constructor(private _authServ: AuthService, private _firebaseServ: FirebaseService, private _router: Router) { }

  ngOnInit() {
  }
  public crearUsuario(event: any) {
    // console.log('Recibo el event', event);
    const auxFotoNombre: string = this.crearNombre(event);
    // Subo el archivo
    this._firebaseServ.agregarArchivo(auxFotoNombre, (event.foto as File))
      .then(async (snapshot: UploadTaskSnapshot) => {
        // Coloco el path correcto y elimino la clave para subir el registro
        const auxFoto = await snapshot.ref.getDownloadURL();
        //const auxUser: Usuario = event as Usuario;
        const auxUser : any = {
        "correo" : event.correo,
        "apellido" : event.apellido,
        "nombre" : event.nombre,
        "tipo" : event.tipo,
        "especialidad" : event.especialidad,
        "foto" : auxFoto};
        //console.log('User', auxUser);

        this._firebaseServ.agregar(diccionario.db.usuarios, auxUser)
          .then((result) => {
            // Agrego el usuario
            this._authServ.crear(event.correo, event.clave)
              .then((user) => {
                console.log('Registro completo');
                alert('Registro completo');
                this._router.navigate(['login']);
              })
              .catch((err) => {
                console.log('Error al registrar el usuario para login', err);
              });
          })
          .catch((err) => {
            console.log('Error al agregar en la base de datos', err);
          });
      }).catch((err) => {
        console.log('Error al crear archivo', err);
      });
  }
  private crearNombre(event: any) {
    const auxFotoNombre: string = diccionario.db.usuarios + '/'
      + event.correo + '.' + ((event.foto as File).type).split('/')[1];
    // console.log(auxFotoNombre);
    return auxFotoNombre;
  }

}
