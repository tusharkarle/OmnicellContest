import { Component, OnInit } from '@angular/core';
import { ImgServiceService } from '../img-service.service';

@Component({
  selector: 'app-left-side',
  templateUrl: './left-side.component.html',
  styleUrls: ['./left-side.component.css'],
})
export class LeftSideComponent implements OnInit {
  imgDataArray: any[] = [];
  constructor(private imgservice: ImgServiceService) {
    imgservice.likeStatus.subscribe((element: any) => {
      this.imgDataArray[
        this.imgDataArray.findIndex((el: any) => el.Image === element.Image)
      ] = element;
      console.log(element);
      console.log(this.imgDataArray);
    });
  }

  ngOnInit(): void {
    this.imgservice.getImagesData().subscribe((data: any) => {
      this.imgDataArray = data;
      for (const element of this.imgDataArray) {
        element.isLiked = 'false';
      }
      // console.log(this.imgDataArray);
    });
  }

  loadImg(givenElement: any) {
    this.imgservice.imgLoad.emit(givenElement);
  }
}
