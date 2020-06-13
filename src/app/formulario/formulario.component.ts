import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
  
export class FormularioComponent implements OnInit {

  @Output() formIsValid: EventEmitter<any> = new EventEmitter();
  form: FormGroup;
  validar: boolean;
  textoPadre: any;
  recibirMensaje(form: any) {
    this.textoPadre = form;
  }

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
   
    this.form = this.formBuilder.group({
      nombre: [null, Validators.required],
      apellido: [null, Validators.required],
      dni: [null, Validators.required],
      estado: [null, Validators.required],
      genero: [null, Validators.required],
      correo: [null, Validators.required],
      paises: [null, Validators.required],
      fecha: [null, Validators.required],
      ocupacion: [null],
      telefono:[null]
    });


   /*  this.form.valueChanges.subscribe((data) => {

      this.formIsValid.emit(this.form.valid);
      
      console.log(this.form.valid);
      
    }); */

  }

  /* sendForm() {
    this.formIsValid.emit(this.form.valid);
    console.log(this.form.value);
    console.log(this.form.valid);
  } */
}