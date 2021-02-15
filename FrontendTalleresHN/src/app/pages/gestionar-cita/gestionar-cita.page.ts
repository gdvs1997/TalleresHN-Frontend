import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-gestionar-cita',
  templateUrl: './gestionar-cita.page.html',
  styleUrls: ['./gestionar-cita.page.scss'],
})
export class GestionarCitaPage implements OnInit {

  constructor( private navCtrl: NavController ) { }

  ngOnInit() {
  }

  async formReservarCita() {
    
    this.navCtrl.navigateRoot( '/tabs/reservar-cita', { animated: true } );
  }

}
