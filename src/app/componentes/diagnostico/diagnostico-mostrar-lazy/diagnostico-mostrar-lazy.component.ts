import { Component, OnInit, Input } from '@angular/core';
import { Diagnostico } from 'src/app/models/diagnostico/diagnostico';

@Component({
  selector: 'app-diagnostico-mostrar-lazy',
  templateUrl: './diagnostico-mostrar-lazy.component.html',
  styleUrls: ['./diagnostico-mostrar-lazy.component.css']
})
export class DiagnosticoMostrarLazyComponent implements OnInit {

  @Input() public diagnostico: Diagnostico;
  constructor() { }

  ngOnInit() {
  }

}
