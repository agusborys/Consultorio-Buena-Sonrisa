import { Component, OnInit } from '@angular/core';
import { Turno } from 'src/app/models/turnos/turno';
import { Encuesta } from 'src/app/models/encuesta/encuesta';
import { ActivatedRoute } from '@angular/router';
import { FirebaseService } from 'src/app/servicios/firebase/firebase.service';
import { AuthService } from 'src/app/servicios/auth/auth.service';
import { diccionario } from 'src/app/models/diccionario';

@Component({
  selector: 'app-encuesta-container',
  templateUrl: './encuesta-container.component.html',
  styleUrls: ['./encuesta-container.component.css']
})
export class EncuestaContainerComponent implements OnInit {

  public turno: Turno | boolean = true;
  public encuesta: Encuesta | boolean = true;
  
  constructor(private _route: ActivatedRoute, private _firebaseServ: FirebaseService, private _authServ: AuthService) { }

  ngOnInit() {
    const turnoKey: string = this._route.snapshot.paramMap.get('id');
    // console.log('+' + turnoKey + '+');
    this.manageEntry(turnoKey);
  }
  private async manageEntry(key: string) {
    let returnAux: any = await this._firebaseServ.obtenerDocumentoUID(diccionario.db.turnos, key);

    if (returnAux.exists) {
      this.turno = returnAux.data() as Turno;
      this.turno.key = returnAux.id;
      returnAux = await this._firebaseServ.obtenerDocumento(diccionario.db.encuestas_cliente, 'turno', key);
      // console.log(returnAux);

      if (returnAux !== false) {
        this.encuesta = returnAux;
        // console.log('La encuesta existe');
      } else {
        // console.log('La encuesta no existe');
        this.encuesta = false;
      }
    } else {
      this.turno = false;
    }
  }
  public async crearDiagnostico(event: Encuesta) {
    event.turno = (this.turno as Turno).key;
    this._firebaseServ.agregar(diccionario.db.encuestas_cliente, event)
      .then((data) => {
        // console.log('Data', data);
        this.manageEntry((this.turno as Turno).key);
      })
      .catch(err => {
        console.log('Error en crearDiagnostico', err);
      });
  }

}
