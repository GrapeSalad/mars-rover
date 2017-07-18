import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { NasaAPODService } from '../nasa-apod.service';
import { PhotoService } from '../photo.service';

@Component({
  selector: 'app-apod',
  templateUrl: './apod.component.html',
  styleUrls: ['./apod.component.css'],
  providers: [ NasaAPODService, PhotoService ]
})
export class APODComponent implements OnInit {
  photos;

  constructor(private router: Router, private apodPhotos: NasaAPODService) { }

  getAPODImages(date: string, hd: string){
    console.log(date);
    this.apodPhotos.getByDateAndQuality(date, hd).subscribe(response => {
      console.log(response.json());
      // if(response.json().photos.length > 0){
        this.photos = response.json();
      // }
      // else{
      //   alert("No Photos on this day whoa");
      // }
    })
  }

  ngOnInit() {
  }

}
