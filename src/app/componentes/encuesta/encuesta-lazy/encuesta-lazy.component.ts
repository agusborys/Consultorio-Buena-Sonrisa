import { Component, OnInit, Output, EventEmitter, OnChanges } from '@angular/core';
import { Encuesta } from 'src/app/models/encuesta/encuesta';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-encuesta-lazy',
  templateUrl: './encuesta-lazy.component.html',
  styleUrls: ['./encuesta-lazy.component.css']
})
export class EncuestaLazyComponent implements OnInit {

  @Output() public aceptarFormulario = new EventEmitter<Encuesta>();
  public form: FormGroup;
  public valorClinica : any;
  public valorEspecialista: any = 0;
  constructor() { }

  ngOnInit() {
    this.form = new FormGroup({
      resenia: new FormControl('', [Validators.required, Validators.maxLength(66)]),
      clinica: new FormControl(0, [Validators.required, Validators.min(1), Validators.max(10)]),
      especialista: new FormControl(0, [Validators.required, Validators.min(1), Validators.max(10)]),
    });
  }

  public enviarFormulario() {
    // console.log('Envio el event', this.form.value as Encuesta);
    this.aceptarFormulario.emit(this.form.value as Encuesta);
  }

}
