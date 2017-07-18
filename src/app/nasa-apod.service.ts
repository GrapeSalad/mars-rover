import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { nasaApiKey, masterFirebaseConfig } from './api-keys';
import { Photo } from './photo.model';
import { PhotoService } from './photo.service';

@Injectable()
export class NasaAPODService {

  constructor(private http: Http, private photoService: PhotoService) { }

  getByDateAndQuality(date: string, hd: string){
    return this.http.get("https://api.nasa.gov/planetary/apod?date="+date+"&hd="+hd+"&api_key="+nasaApiKey);
  }

}
