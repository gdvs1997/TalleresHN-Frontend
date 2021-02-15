import { Component, OnInit } from '@angular/core';
import { AlertController, LoadingController, NavController, ToastController } from '@ionic/angular';
import { GestionarCita } from '../../models/GestionarCita';

@Component({
  selector: 'app-formulario-cita',
  templateUrl: './formulario-cita.page.html',
  styleUrls: ['./formulario-cita.page.scss'],
})
export class FormularioCitaPage implements OnInit {

  infoCita: GestionarCita;

  constructor( private navCtrl: NavController,
               public alertCtrl: AlertController,
               public loadingCtrl: LoadingController,
               public toastCtrl: ToastController ) { }

  ngOnInit() {
    this.limpiar();
  }

  async gestionarCita( formularioCitas:any ) {
    
    const loading = await this.loadingCtrl.create({});
    await loading.present();

    if( !formularioCitas.valid ){

      const alert = await this.alertCtrl.create({
        cssClass: 'my-custom-class',
        header: 'Alerta',
        message: 'Favor, complete el formulario.',
        buttons: ['OK']
      });
  
      await alert.present();

    } else{ 

      console.log( this.infoCita );
      this.navCtrl.navigateRoot( '/tabs/citas', { animated: true } );
      this.limpiar();

      const toast = await this.toastCtrl.create({
        message: 'Datos guardados correctamente.',
        duration: 2000
      });
      toast.present();

    }

    loading.dismiss();
    
  }

  limpiar() {
    this.infoCita = {
      EmpresaId: 0,
      ServicioId: 0,
      VehiculoId: 0,
      Descripcion: '',
      Fecha: null,
      Hora: null
    }
  }

}
