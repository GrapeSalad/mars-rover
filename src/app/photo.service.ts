import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Photo } from './photo.model';


@Injectable()
export class PhotoService {
  photos: FirebaseListObservable<any[]>;
  // photos: Photo;

  constructor(private af: AngularFireDatabase) {
    this.photos = af.list('photos');
    console.log(this.photos);
  }
  addPhoto(newPhoto: Photo) {
    this.photos.push(newPhoto);
  }
  getPhotos() {

    return this.photos;
  }
  deletePhoto(selectedPhoto) {
    let foundPhoto = this.getPhotoById(selectedPhoto.$key);
    foundPhoto.remove();
  }
  getPhotoById(photoId: string){
    return this.af.object('photos/' + photoId);
  }
}
