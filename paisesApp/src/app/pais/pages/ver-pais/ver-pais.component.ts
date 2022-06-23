import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaisService } from '../../services/pais.service';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {

  constructor(
    private activatedRoute:ActivatedRoute,
    private paisService: PaisService) { }

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe()
      .subscribe( resp=> {
        console.log(resp)
      })



    //------ otra forma de hacerlo
    //this.activatedRoute.params
    //.subscribe(({id}) => {
     // console.log(id);

      //this.paisService.getPaisPorAlpha(id)
      //.subscribe(pais => {
       // console.log(pais)
      //})
    //})
  }

}
