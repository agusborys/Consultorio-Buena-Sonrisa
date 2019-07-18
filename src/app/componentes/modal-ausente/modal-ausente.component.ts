import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal-ausente',
  templateUrl: './modal-ausente.component.html',
  styleUrls: ['./modal-ausente.component.css']
})
export class ModalAusenteComponent implements OnInit {

  @Output() public recibirRespuesta = new EventEmitter<{ respuesta: boolean, key: string }>();
  @Input() public key: string;

  constructor() { }

  ngOnInit() {
  }
  public manejarConfirmacion(respuesta: boolean) {
    this.recibirRespuesta.emit({ respuesta, key: this.key });
  }
}
