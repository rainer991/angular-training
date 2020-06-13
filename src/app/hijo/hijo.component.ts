import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';



@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent implements OnInit {

  @Output()
  enviar: EventEmitter<any> = new EventEmitter<any>();
  textoHijo: any;
  textoHijo2: any;
  
  @Output()
  enviarMayusuculas: EventEmitter<any> = new EventEmitter<any>();
  
  constructor() { }

  ngOnInit() {
  }
  
  botonClick() {
    this.enviar.emit(this.textoHijo + " " + this.textoHijo2);
    
  }
  botonClickMayusculas() {
    this.enviarMayusuculas.emit(this.textoHijo.toUpperCase() + " " + this.textoHijo2.toUpperCase());
    
   

  }
}
