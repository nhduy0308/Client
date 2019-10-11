import { Component, OnInit } from '@angular/core';
import { PictureService } from 'src/app/services/Client/Picture/picture.service';
import { Picture } from 'src/app/models/Client/Picture';

@Component({
  selector: 'app-latest-pictures',
  templateUrl: './latest-pictures.component.html',
  styleUrls: ['./latest-pictures.component.scss']
})
export class LatestPicturesComponent implements OnInit {
  pictures: Picture[];
  constructor(private service: PictureService) { }

  ngOnInit() {
    this.service.GetLatestPicture().subscribe(pic => this.pictures = pic);
  }

}
