import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { diccionario } from 'src/app/models/diccionario';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listado-especialista-lazy',
  templateUrl: './listado-especialista-lazy.component.html',
  styleUrls: ['./listado-especialista-lazy.component.css']
})
export class ListadoEspecialistaLazyComponent implements OnInit {

  @Input() public turnos: Array<any>;
  @Output() public enviarUID = new EventEmitter<{ key: string, accion: string }>();
  public diccionario;

  constructor(private _router: Router) { }

  ngOnInit() {
    this.diccionario = diccionario;
  }
  public cancelarTurno(turnoKey) {
    this.enviarUID.emit({ key: turnoKey, accion: 'cancelar' });
    // console.log('Se presenta la modal para cancelar el turno');
  }

  public atenderTurno(turnoKey) {
    this.enviarUID.emit({ key: turnoKey, accion: 'atender' });
    // console.log('Se presenta la modal para cancelar el turno');
  }

  public terminarTurno(turnoKey) {
    this.enviarUID.emit({ key: turnoKey, accion: 'terminar' });
    // console.log('Se presenta la modal para cancelar el turno');
  }

  public resenia(turnoKey) {
    // this.enviarUID.emit({ key: turnoKey, accion: 'resenia' });
    this._router.navigate(['diagnostico', turnoKey]);
    // console.log('Se va a reseña del doctor para el turno', turnoKey);
  }

}
