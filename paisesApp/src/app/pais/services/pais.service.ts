import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable,of } from 'rxjs';
import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  // url base 
  private apiUrl: string = 'https://restcountries.com/v2';
  
  constructor( private http: HttpClient) { }

  buscarPais( termino:string): Observable<Country[]>{
    const url = `${ this.apiUrl}/name/${termino}`;
    //const url = `${ this.apiUrl}`;

    return this.http.get<Country[]>(url);
      
  }

}
