import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  @Output() public recibirRespuesta = new EventEmitter<{ respuesta: boolean, key: string }>();
  @Input() public key: string;

  constructor() { }

  ngOnInit() {
  }
  public manejarConfirmacion(respuesta: boolean) {
    this.recibirRespuesta.emit({ respuesta, key: this.key });
  }

}
