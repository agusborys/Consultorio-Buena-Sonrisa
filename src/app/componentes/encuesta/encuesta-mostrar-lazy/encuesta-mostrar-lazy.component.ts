import { Component, OnInit, Input } from '@angular/core';
import { Encuesta } from 'src/app/models/encuesta/encuesta';

@Component({
  selector: 'app-encuesta-mostrar-lazy',
  templateUrl: './encuesta-mostrar-lazy.component.html',
  styleUrls: ['./encuesta-mostrar-lazy.component.css']
})
export class EncuestaMostrarLazyComponent implements OnInit {

  @Input() public encuesta: Encuesta;
  constructor() { }

  ngOnInit() {
  }

}
