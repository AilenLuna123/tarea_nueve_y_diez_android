import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { MapaPage } from '../mapa/mapa.page';

@Component({
  selector: 'app-input-form',
  templateUrl: 'input-form.page.html',
  styleUrls: ['input-form.page.scss'],
})
export class InputFormPage {
  nombre: string = '';
  apellido: string = '';
  latitud: number = 0;
  longitud: number = 0;

  constructor(private navCtrl: NavController) {}

  mostrarMapa() {
    this.navCtrl.navigateForward(`/mapa/${this.nombre}/${this.apellido}/${this.latitud}/${this.longitud}`);
  }
}

