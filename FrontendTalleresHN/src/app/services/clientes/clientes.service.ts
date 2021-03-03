import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Cliente } from '../../models/Cliente';

const URL = environment.URL;

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor( private http: HttpClient ) { }

  createCliente( cliente: Cliente ) {
    return new Promise( resolve => {
      this.http.post( `${ URL }/usuario/crear`, cliente )
        .subscribe( resp => {
          console.log( resp );
          resolve( true );
        }, err => {
          console.log( err );
          resolve( false );
        });
    });
  }
}
