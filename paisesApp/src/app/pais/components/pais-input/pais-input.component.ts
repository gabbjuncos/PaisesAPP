import { Component, EventEmitter, Output, OnInit,Input } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styleUrls: ['./pais-input.component.css']
})
export class PaisInputComponent implements OnInit{

  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  //emite string para el debouce time, se va a emitir cuando la persona deja de escribir
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();

  @Input() placeholder: string = '';

  debouncer: Subject<string> = new Subject();

  termino: string='';

  ngOnInit(){
    this.debouncer
    .pipe(debounceTime(300)
    )
    .subscribe( valor => {
      console.log('debouncer:', valor);
      //se emite
      this.onDebounce.emit(valor);
      
    });
   
  }


  buscar(){
    this.onEnter.emit(this.termino);

  }

  teclaPresionada( event: any){
    //const valor = event.target.value;
    //console.log(valor);
    //console.log(this.termino);
    this.debouncer.next(this.termino);
  }
  

}
