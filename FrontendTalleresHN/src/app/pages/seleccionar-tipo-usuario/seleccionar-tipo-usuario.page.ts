import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-seleccionar-tipo-usuario',
  templateUrl: './seleccionar-tipo-usuario.page.html',
  styleUrls: ['./seleccionar-tipo-usuario.page.scss'],
})
export class SeleccionarTipoUsuarioPage implements OnInit {

  constructor(
    private navCtrl: NavController
  ) { }

  ngOnInit() {
  }

  async registroClientes() {
   
    this.navCtrl.navigateRoot( '/registro-clientes', { animated: true } );
    
    
  }

  async registroTalleres() {
   
    this.navCtrl.navigateRoot( '/registro-talleres', { animated: true } );
    
    
  }

}
