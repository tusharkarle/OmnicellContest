import {
  Component,
  DoCheck,
  OnChanges,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { ImgServiceService } from '../img-service.service';

@Component({
  selector: 'app-right-side',
  templateUrl: './right-side.component.html',
  styleUrls: ['./right-side.component.css'],
})
export class RightSideComponent implements OnInit, DoCheck {
  imgAvailable: boolean = false;
  likeStatus: boolean = false;
  LikeORNOT: string = 'Like';

  element: any = {};
  constructor(private imgservice: ImgServiceService) {
    this.imgservice.imgLoad.subscribe((imgdata: any) => {
      this.element = imgdata;
      this.imgAvailable = true;
      this.likeStatus = imgdata.isLiked;
      if (!this.likeStatus) {
        this.LikeORNOT = 'Unlike';
      } else {
        this.LikeORNOT = 'Like';
      }
    });
  }

  ngOnInit(): void {}

  clickImg() {
    console.log(this.element);
    if (!this.likeStatus) {
      this.LikeORNOT = 'Like';
      this.likeStatus = true;
      this.element.likes -= 1;
      this.element.isLiked = true;
      console.log('true');
    } else {
      this.likeStatus = false;
      this.element.likes += 1;
      this.element.isLiked = false;
      this.LikeORNOT = 'unLike';
      console.log('false');
    }
    this.imgservice.likeStatus.emit(this.element);
    console.log(this.element);
  }

  ngDoCheck() {}
}
