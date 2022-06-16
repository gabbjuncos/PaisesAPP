import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styleUrls: ['./pais-input.component.css']
})
export class PaisInputComponent implements OnInit{

  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  //emite string para el debouce time, se va a emitir cuando la persona deja de escribir
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();

  debouncer: Subject<string> = new Subject();

  termino: string='';

  ngOnInit(){
    this.debouncer.subscribe( valor => {
      console.log('debouncer:', valor);
    });
   
  }


  buscar(){
    this.onEnter.emit(this.termino);

  }

  teclaPresionada( event: any){
    const valor = event.target.value;
    console.log(valor);
    console.log(this.termino);
  }
  

}
