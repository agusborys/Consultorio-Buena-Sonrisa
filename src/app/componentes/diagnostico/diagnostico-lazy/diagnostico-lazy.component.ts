import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-diagnostico-lazy',
  templateUrl: './diagnostico-lazy.component.html',
  styleUrls: ['./diagnostico-lazy.component.css']
})
export class DiagnosticoLazyComponent implements OnInit {

  @Output() public aceptarFormulario = new EventEmitter<{ diagnostico: string }>();

  public form: FormGroup;

  constructor() { }

  ngOnInit() {
    this.form = new FormGroup({
      diagnostico: new FormControl('', Validators.required),
    });
  }

  public enviarFormulario() {
    // console.log('Envio el event', this.form.value);
    this.aceptarFormulario.emit(this.form.value);
  }
}
