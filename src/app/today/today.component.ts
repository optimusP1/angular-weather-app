import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-today',
  templateUrl: './today.component.html',
  styleUrls: ['./today.component.css']
})
export class TodayComponent implements OnInit {

  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
    this.getLocation();
  }

  getLocation()
  if('geolocation' in navigator){
    navigator.geolocation.watchPosition((success) => {
      this.lat = success.coords.latitude;
      this.lon = success.coords.longitude;

      this.weatherService.getWeatherDataByCoords(this.alert, this.lon).subscribe(data => {
        this.weather = data;

      })
    })
  }

}
