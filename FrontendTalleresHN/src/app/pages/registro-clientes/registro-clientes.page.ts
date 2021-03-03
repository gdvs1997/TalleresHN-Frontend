import { Component, OnInit } from '@angular/core';
import { AlertController, LoadingController, NavController, ToastController } from '@ionic/angular';
import { Cliente } from '../../models/Cliente';
import { ClientesService } from '../../services/clientes/clientes.service';

@Component({
  selector: 'app-registro-clientes',
  templateUrl: './registro-clientes.page.html',
  styleUrls: ['./registro-clientes.page.scss'],
})
export class RegistroClientesPage implements OnInit {

  newCliente: Cliente;

  constructor(
    private navCtrl: NavController,
    public alertCtrl: AlertController,
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController,
    public servicioClientes: ClientesService
  ) { }

  ngOnInit() {
    this.limpiar();
  }

  async saveNewCliente( formularioCliente: any ) {

    const loading = await this.loadingCtrl.create({});
    await loading.present();

    console.log( this.newCliente );

    if( !formularioCliente.valid ){

      const alert = await this.alertCtrl.create({
        cssClass: 'my-custom-class',
        header: 'Alerta',
        message: 'Favor, complete el formulario.',
        buttons: ['OK']
      });
  
      await alert.present();

    } else{ 

      const crear = await this.servicioClientes.createCliente( this.newCliente );

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
    this.newCliente = {
      Nombre: '',
      Apellidos: '',
      UserName: '',
      Email: '',
      Password: '',
      PhoneNumber: '',
      FechaCreacion: new Date(),
      Estado: true
    }
  }

}
