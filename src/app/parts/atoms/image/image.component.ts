import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {
  @ViewChild('img') imgEl: ElementRef;
  @Input() source: string;
  @Input() alternative: string;
  @Input() classes: string;
  data = ImageData;
  output: string;

  constructor() { }

  ngOnInit() {
  }

}
