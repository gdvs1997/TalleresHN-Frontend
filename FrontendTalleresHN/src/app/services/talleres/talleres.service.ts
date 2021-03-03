import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Taller } from '../../models/Taller';

const URL = environment.URL;

@Injectable({
  providedIn: 'root'
})
export class TalleresService {

  constructor( private http: HttpClient ) { }

  createTaller( taller: Taller ) {
    return new Promise( resolve => {
      this.http.post( `${ URL }/taller/crear`, taller )
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
