import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FileSystemFileEntry, NgxFileDropEntry } from 'ngx-file-drop';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { Usuario } from 'src/app/models/usuario/usuario';

@Component({
  selector: 'app-registro-lazy',
  templateUrl: './registro-lazy.component.html',
  styleUrls: ['./registro-lazy.component.css']
})
export class RegistroLazyComponent implements OnInit {

  @Output() public aceptarFormulario = new EventEmitter<Usuario>();

  public form: FormGroup;
  public imagePreview: string | ArrayBuffer = null;

  constructor() { }

  ngOnInit() {
    this.form = new FormGroup({
      correo: new FormControl('', [Validators.required, Validators.email]),
      clave: new FormControl('', [Validators.required, Validators.minLength(6)]),
      nombre: new FormControl('', Validators.required),
      apellido: new FormControl('', Validators.required),
      tipo: new FormControl('cliente', Validators.required),
      foto: new FormControl('', Validators.required),
      especialidad: new FormControl('none', Validators.required),
    });
  }
  public dropped(files: NgxFileDropEntry[]) {
    const droppedFile = files[0];

    // Es un archivo
    if (droppedFile.fileEntry.isFile) {
      const fileEntry = droppedFile.fileEntry as FileSystemFileEntry;
      const reader = new FileReader();

      fileEntry.file((file: File) => {
        // Aquí puedo acceder al archivo real
        // console.log(droppedFile.relativePath, file);

        // Esto es para la preview
        reader.readAsDataURL(file);
        reader.onload = () => {
          this.imagePreview = reader.result;
        };

        this.form.patchValue({ foto: file });
      });
    } else {
      // Si fue un directorio (directorios vacios, en caso contrario solo archivos)
      console.log('No se acepta el archivo!');
    }
  }

  public enviarFormulario() {
    // console.log('Envio el event', this.form.value);
    this.aceptarFormulario.emit(this.form.value);
  }

}
