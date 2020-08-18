import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {
  // tslint:disable-next-line: max-line-length
  lilyAndDogs = 'https://scontent-ort2-2.xx.fbcdn.net/v/t31.0-8/20157643_10209753898619336_1730223676365427248_o.jpg?_nc_cat=102&_nc_sid=cdbe9c&_nc_ohc=YkwQnInUogkAX-nvewY&_nc_ht=scontent-ort2-2.xx&oh=71121e8e2c0902874f75b1abe6b74e91&oe=5F4D4412';
  // tslint:disable-next-line: max-line-length
  meAndMrButt = 'https://scontent-ort2-2.xx.fbcdn.net/v/t1.0-9/72852166_10214943383153206_7220321494704848896_n.jpg?_nc_cat=106&_nc_sid=8bfeb9&_nc_ohc=AMQ2cuNpgyYAX-nSUX0&_nc_ht=scontent-ort2-2.xx&oh=126c1632fda18ae7c8f92c3b20e6055d&oe=5F4EA92E';
  // tslint:disable-next-line: max-line-length
  mrButt = 'https://scontent-ort2-2.xx.fbcdn.net/v/t1.0-9/c191.0.540.540a/s851x315/13342977_10206562324271972_3192026328771628481_n.jpg?_nc_cat=105&_nc_sid=da31f3&_nc_ohc=LOH-608Xz5QAX9dIYdW&_nc_ht=scontent-ort2-2.xx&oh=dc4bf161d1f73dd0d3874b2a6f0fe243&oe=5F4E3850';
  // tslint:disable-next-line: max-line-length
  lilyAndMe = 'https://scontent-ort2-2.xx.fbcdn.net/v/t1.0-9/53769990_10213585064556090_1822287325850238976_n.jpg?_nc_cat=102&_nc_sid=8bfeb9&_nc_ohc=CtotarEb05IAX8_yvY8&_nc_ht=scontent-ort2-2.xx&oh=daa7ffd9b474a05eb6d9553f46831267&oe=5F4CF952';
  // tslint:disable-next-line: max-line-length
  natashaAndFam = 'https://scontent-ort2-2.xx.fbcdn.net/v/t1.0-9/36928154_10212074513193250_3318915718623264768_o.jpg?_nc_cat=107&_nc_sid=8bfeb9&_nc_ohc=Xh7nGibbbw0AX_mhc1n&_nc_ht=scontent-ort2-2.xx&oh=5156cc38987bbf45e14edec7783c1800&oe=5F4D5BA1';
  // tslint:disable-next-line: max-line-length
  natasha = 'https://scontent-ort2-2.xx.fbcdn.net/v/t1.0-9/29572634_10211467212011100_7264540269612622064_n.jpg?_nc_cat=101&_nc_sid=8bfeb9&_nc_ohc=28vvJMkPnzYAX-K8uVR&_nc_ht=scontent-ort2-2.xx&oh=32fc000250e7a3e56a3a51ce70541933&oe=5F4B1378';
  // tslint:disable-next-line: max-line-length
  bixby = 'https://scontent-ort2-2.xx.fbcdn.net/v/t1.0-9/56408524_10213734268566097_9132891266500001792_n.jpg?_nc_cat=108&_nc_sid=8bfeb9&_nc_ohc=6qD1g-Q0DIcAX9YTk_e&_nc_ht=scontent-ort2-2.xx&oh=e277a50fa2102f5b54d0f69ef2b69970&oe=5F4CD609';
  // tslint:disable-next-line: max-line-length
  ramona = 'https://scontent-ort2-2.xx.fbcdn.net/v/t1.0-9/70968263_10214806539252194_3256933288933064704_n.jpg?_nc_cat=100&_nc_sid=8bfeb9&_nc_ohc=uIrxT-WCBIgAX9AmI-7&_nc_ht=scontent-ort2-2.xx&oh=931c936432adef742f55eac134c22f34&oe=5F4BA522';
  // tslint:disable-next-line: max-line-length
  squittens = 'https://scontent-ort2-2.xx.fbcdn.net/v/t31.0-8/24068384_10210586144384960_4661597163249025715_o.jpg?_nc_cat=104&_nc_sid=8bfeb9&_nc_ohc=C8wqNIt5GLYAX_c6vyr&_nc_ht=scontent-ort2-2.xx&oh=adcb9a27f470d8e4809e2312fc7e3423&oe=5F4BB451';


  cardTallClass = 'card-tall';
  modalRef: BsModalRef;
  source: string;
  content: string;

  constructor(private modalService: BsModalService) { }

  ngOnInit() {
  }

  openModal(template: TemplateRef<any>, source: string, content: string) {
    console.log(template);
    this.source = source;
    this.content = content;
    this.modalRef = this.modalService.show(template);
  }

}
