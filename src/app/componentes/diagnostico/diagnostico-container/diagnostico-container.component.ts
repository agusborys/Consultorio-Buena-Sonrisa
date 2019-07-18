import { Component, OnInit } from '@angular/core';
import { Turno } from 'src/app/models/turnos/turno';
import { Diagnostico } from 'src/app/models/diagnostico/diagnostico';
import { FirebaseService } from 'src/app/servicios/firebase/firebase.service';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/servicios/auth/auth.service';
import { diccionario } from 'src/app/models/diccionario';

@Component({
  selector: 'app-diagnostico-container',
  templateUrl: './diagnostico-container.component.html',
  styleUrls: ['./diagnostico-container.component.css']
})
export class DiagnosticoContainerComponent implements OnInit {

  public turno: Turno | boolean = true;
  public diagnostico: Diagnostico | boolean = true;

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
      returnAux = await this._firebaseServ.obtenerDocumento(diccionario.db.resenia_especialisata, 'turno', key);
      // console.log(returnAux);

      if (returnAux !== false) {
        this.diagnostico = returnAux;
        // console.log('El diagnostico existe');
      } else {
        // console.log('El diagnostico no existe');
        this.diagnostico = false;
      }
    } else {
      this.turno = false;
    }
  }

  public async crearDiagnostico(event: { diagnostico: string }) {
    const auxDiag: any = { key: null, turno: (this.turno as Turno).key, diagnostico: event.diagnostico } as Diagnostico;

    this._firebaseServ.agregar(diccionario.db.resenia_especialisata, auxDiag)
      .then((data) => {
       // console.log('Data', data);
        this.manageEntry((this.turno as Turno).key);
      })
      .catch(err => {
        console.log('Error en crearDiagnostico', err);
      });

  }

}
