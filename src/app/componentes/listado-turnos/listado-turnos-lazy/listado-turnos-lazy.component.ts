import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { diccionario } from 'src/app/models/diccionario';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listado-turnos-lazy',
  templateUrl: './listado-turnos-lazy.component.html',
  styleUrls: ['./listado-turnos-lazy.component.css']
})
export class ListadoTurnosLazyComponent implements OnInit {
  @Input() public turnos: Array<any>;
  @Input() public esRecepcionista: boolean;
  @Output() public enviarUID = new EventEmitter<string>();

  public mostrarModal = false;
  public modalKey: string;
  public diccionario;

  constructor(private _router: Router) { }

  ngOnInit() {
    this.diccionario = diccionario;
  }
  public cancelarTurno(turnoKey) {
    this.enviarUID.emit(turnoKey);
    // console.log('Se presenta la modal para cancelar el turno');
  }

  public resenia(turnoKey) {
    this._router.navigate(['encuesta', turnoKey]);
     console.log('se carga la encuesta del usuario para el turno', turnoKey);
  }

  public diagnostico(turnoKey) {
    this._router.navigate(['diagnostico', turnoKey]);
    console.log('se muestra', turnoKey);
  }

}
