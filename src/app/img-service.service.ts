import { Injectable ,EventEmitter} from '@angular/core';
import { Observable } from 'rxjs';
import {
  HttpClient,
  HttpHeaders,
  HttpParamsOptions,
} from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class ImgServiceService {
  private imgAPI =
    'https://s3-ap-southeast-1.amazonaws.com/he-public-data/instaf913f18.json';
  constructor(private http: HttpClient) {}

  getImagesData(): Observable<any[]> {
    return this.http.get<any[]>(this.imgAPI);
  }

  // event emitter for the image service
  imgLoad: EventEmitter<any> = new EventEmitter<any>();
  likeStatus: EventEmitter<any> = new EventEmitter<any>();
}
