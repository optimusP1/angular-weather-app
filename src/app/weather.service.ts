import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
url = 'https://openweathermap.org/current';
apiKey = '194333f5b09188fbda8c4a3bbfea30b2';

  constructor(private http:HttpClient) { }
}

getWeatherDataByCoords(lat,lon){
  let params = new HttpParams()
  .set('lat', lat)
  .set('lon','lon')
  .set('units', 'metric')
  .set('appid', this.apiKey)

  return this.http.get(this.url,{params});
}
