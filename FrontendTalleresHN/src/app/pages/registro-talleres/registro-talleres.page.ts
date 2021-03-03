import { Component, OnInit } from '@angular/core';
import { AlertController, LoadingController, NavController, ToastController } from '@ionic/angular';
import { Taller } from '../../models/Taller';
import { TalleresService } from '../../services/talleres/talleres.service';

@Component({
  selector: 'app-registro-talleres',
  templateUrl: './registro-talleres.page.html',
  styleUrls: ['./registro-talleres.page.scss'],
})
export class RegistroTalleresPage implements OnInit {

  newTaller: Taller;

  constructor(
    private navCtrl: NavController,
    public alertCtrl: AlertController,
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController,
    public servicioTalleres: TalleresService
  ) { }

  ngOnInit() {
    this.limpiar();
  }

  async saveNewTaller( formularioTaller: any ) {
    const loading = await this.loadingCtrl.create({});
    await loading.present();

    console.log( this.newTaller );

    if( !formularioTaller.valid ){

      const alert = await this.alertCtrl.create({
        cssClass: 'my-custom-class',
        header: 'Alerta',
        message: 'Favor, complete el formulario.',
        buttons: ['OK']
      });
  
      await alert.present();

    } else{ 

      const crear = await this.servicioTalleres.createTaller( this.newTaller );

      if ( crear ){

        const alert = await this.alertCtrl.create({
          cssClass: 'my-custom-class',
          header: 'Success',
          message: 'Datos guardados correctamente.',
          buttons: ['OK']
        });
    
        await alert.present();

        this.navCtrl.navigateRoot( '/tabs/home', { animated: true } );

      } else {
        const alert = await this.alertCtrl.create({
          cssClass: 'my-custom-class',
          header: 'Error',
          message: 'Ocurrio un problema en el servicio.',
          buttons: ['OK']
        });
    
        await alert.present();

        this.navCtrl.navigateRoot( '/login', { animated: true } );
      }

      /*const toast = await this.toastCtrl.create({
        message: 'Datos guardados correctamente.',
        duration: 2000
      });
      toast.present();*/
    }

    this.limpiar();
    loading.dismiss();
  }

  limpiar() {
    this.newTaller = {
      NombreTaller: '',
      NombrePropietario: '',
      UserName: '',
      Email: '',
      Password: '',
      PhoneNumber: '',
      Direccion: '',
      Longitud: 0,
      Latitud: 0,
      FechaInscripcion: new Date(),
      Estado: true
    }
  }

}
