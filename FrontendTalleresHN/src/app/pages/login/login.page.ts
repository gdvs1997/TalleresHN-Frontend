import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoadingController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(
    private navCtrl: NavController,
    public loadingCtrl: LoadingController,
  ) { }

  ngOnInit() {
  }

  async login() {

    const loading = await this.loadingCtrl.create({});
    await loading.present();

   
    this.navCtrl.navigateRoot( '/tabs/home', { animated: true } );
    
    loading.dismiss();
    
  }

  async selectTipoUsuario() {
   
    this.navCtrl.navigateRoot( '/seleccionar-tipo-usuario', { animated: true } );
    
    
  }

}
