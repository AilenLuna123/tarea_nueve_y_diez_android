import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';

declare var google: any;

@Component({
  selector: 'app-mapa',
  templateUrl: 'mapa.page.html',
  styleUrls: ['mapa.page.scss'],
})
export class MapaPage implements OnInit {
  nombre: string = '';
  apellido: string = '';
  latitud: number = 0;
  longitud: number = 0;

  constructor(private route: ActivatedRoute, private navCtrl: NavController) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.nombre = params['nombre'];
      this.apellido = params['apellido'];
      this.latitud = parseFloat(params['latitud']);
      this.longitud = parseFloat(params['longitud']);
    });
  }

  async ionViewDidEnter() {
    // Cargar la API de Google Maps
    const googleMapsScript = document.createElement('script');
    googleMapsScript.src = `https://maps.googleapis.com/maps/api/js?key=AIzeSyCqL2tpxeU5adyQFWjepHcQ9g2Vf5P8LvE&callback=initializeMap`;
    googleMapsScript.async = true;
    googleMapsScript.defer = true;
    document.body.appendChild(googleMapsScript);

    // Inicializar el mapa después de que se haya cargado la API
    window['initializeMap'] = () => {
      this.initMap();
    };
  }

  private initMap() {
    // Crear un nuevo mapa con las coordenadas proporcionadas
    const map = new google.maps.Map(document.getElementById('map'), {
      center: { lat: this.latitud, lng: this.longitud },
      zoom: 13,
    });

    // Crear un marcador en las coordenadas proporcionadas
    const marker = new google.maps.Marker({
      position: { lat: this.latitud, lng: this.longitud },
      map: map,
    });

    // Agregar información al hacer clic en el marcador
    const infoWindow = new google.maps.InfoWindow({
      content: `<b>${this.nombre} ${this.apellido}</b><br>Latitud: ${this.latitud}<br>Longitud: ${this.longitud}`,
    });

    marker.addListener('click', () => {
      infoWindow.open(map, marker);
    });
  }
}
