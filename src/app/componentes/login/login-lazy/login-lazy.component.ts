import { Component, OnInit, Output, EventEmitter, Input, OnChanges } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login-lazy',
  templateUrl: './login-lazy.component.html',
  styleUrls: ['./login-lazy.component.css']
})
export class LoginLazyComponent implements OnInit, OnChanges {

  

  @Output() public aceptarFormulario = new EventEmitter<{ correo: string, clave: string }>();
  @Input() mensajeError;
  @Input() mostrarError;
  public form: FormGroup;

  constructor() { }

  ngOnInit() {
    this.form = new FormGroup({
      correo: new FormControl('', [Validators.required, Validators.email]),
      clave: new FormControl('', [Validators.required, Validators.minLength(6)])
    });
  }
  public enviarFormulario() {
    // console.log('Envio el event', this.form.value);
    this.aceptarFormulario.emit(this.form.value);
  }
  ngOnChanges()
  {
    //console.log(this.mostrarError);
    setTimeout(()=>{ this.mostrarError = false; }, 2000)
  }
}
