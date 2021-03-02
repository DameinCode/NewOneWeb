import { Component, OnInit, Input, Inject } from '@angular/core';
import { Item } from '../app.component';
import {DOCUMENT} from '@angular/common';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  currentIndex = 0;
  @Input() item: Item = {link: '',  bonus: [], name: '' , description: '' , rating : 0, numLike: 0, exist: true};
  constructor(@Inject(DOCUMENT) private document: Document) { }
  ngOnInit(): void {
    /* Display initial */
  }

  goTelegram(): void {
    document.location.href = 'https://t.me/share?url=' + this.item.link;
    // document.location.href = this.item.link;
  }
  goWhatsapp(): void{
    document.location.href = 'https://web.whatsapp.com/share?url=' + this.item.link + 'text=%20you%20need%20this';
  }
  changePhotoL(): void{
    if (this.currentIndex !== this.item.bonus.length - 1) {
      this.currentIndex++;
    } else {
      this.currentIndex = 0;
    }
  }
  changePhotoR(): void {
    if (this.currentIndex !== 0) {
      this.currentIndex--;
    } else {
      this.currentIndex = this.item.bonus.length - 1;
    }
  }
  goAmazon(): void{
    document.location.href = this.item.link;
  }
  LikeOn(): void {
    this.item.numLike++;
  }
  DropIt(): void {
    this.item.exist = false;
  }
}
