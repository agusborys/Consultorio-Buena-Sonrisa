import { Injectable } from '@angular/core';
import { initializeApp } from 'firebase';
import { environment } from 'src/environments/environment';
import { Usuario } from 'src/app/models/usuario/usuario';
import { AngularFireAuth } from '@angular/fire/auth';
import { FirebaseService } from '../firebase/firebase.service';
import { diccionario } from 'src/app/models/diccionario';
import { Logueo } from 'src/app/models/logueo/logueo';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _secondaryApp = initializeApp(environment.firebaseConfig, 'SecondaryApp');
  public user: Usuario = null;

  constructor(private _auth: AngularFireAuth, private _firebaseServ: FirebaseService) {
    if (localStorage.getItem('usuarioBuenaSonrisa')) {
      this.user = JSON.parse(localStorage.getItem('usuarioBuenaSonrisa')) as Usuario;
    } else {
      this.user = null;
      this.logOff();
    }
   }

   public logIn(credenciales: { correo: string, clave: string }) {
    return this._auth.auth.signInWithEmailAndPassword(credenciales.correo, credenciales.clave)
      .then(async (user) => {
        // console.log('Usuario logueado', user);
        this.user = await this._firebaseServ.obtenerDocumento(diccionario.db.usuarios, 'correo', user.user.email) as Usuario;
        localStorage.setItem('usuarioBuenaSonrisa', JSON.stringify(this.user));

        if (this.user.tipo !== 'cliente') {
          this._firebaseServ.agregar(diccionario.db.logueos,
            {
              usuario: this.user.key,
              fechaLogueo: (new Date().toLocaleString()),
            } as Logueo).catch(err => {
              console.log('Error al agregar logueo');
            });
        }
      });
  }

  public logOff() {
    return this._auth.auth.signOut()
      .then(() => {
        // console.log('Usuario deslogueado', user);
        this.user = null;
        localStorage.removeItem('usuarioBuenaSonrisa');
      })
      .catch((err) => {
        console.log('Error en el deslogueo dentro del servicio', err);
      });
  }

  public crear(correo: string, clave: string) {
    // return this._auth.auth.createUserWithEmailAndPassword(correo, clave)
    return this._secondaryApp.auth().createUserWithEmailAndPassword(correo, clave)
      .then((user) => {
        // console.log('Usuario creado', user);
        this._secondaryApp.auth().signOut();
        return user;
      })
      .catch((err) => {
        console.log('Error en la creación dentro del servicio', err);
      });
  }
}
