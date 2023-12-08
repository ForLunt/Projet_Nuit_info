import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-page-acceuil',
  templateUrl: './page-acceuil.component.html',
  styleUrls: ['./page-acceuil.component.css']
})
export class PageAcceuilComponent implements OnInit{
  titleColor: string ='';
  title: string = ''; 
  color1 : string = '';
  color2: string = '';
  color3: string = '';
  border1: string = ''; 
  border2: string = ''; 
  border3: string = ''; 

  constructor(private app: AppComponent) {
  }

  ngOnInit() {
    this.titleColor = this.getRandomColor();
    this.title = this.getRandomInt(2) == 0 ? 'title_small' : 'title_big';
    this.color1 = this.getRandomColor();
    this.color2= this.getRandomColor() ;
    this.color3 = this.getRandomColor();
    this.border1 = this.getRandomBorder();
    this.border2 = this.getRandomBorder();
    this.border3 = this.getRandomBorder();
  }

  getRandomInt(max : number) {
    return Math.floor(Math.random() * max);
  }

  getRandomColor(){
    let nbColor = 26;
    let rand = this.getRandomInt(nbColor);
    let color = '';
    let i = 0;
    while (i < nbColor) {
      if (rand === 0) color = 'aqua';
      if (rand === 1) color = 'fuchsia';
      if (rand === 2) color = 'lime';
      if (rand === 3) color = 'black';
      if (rand === 4) color = 'teal';
      if (rand === 5) color = 'red';
      if (rand === 6) color = 'silver';
      if (rand === 7) color = 'purple';
      if (rand === 8) color = 'yellow';
      if (rand === 9) color = 'maroon';
      if (rand === 10) color = 'blue';
      if (rand === 11) color = 'green';
      if (rand === 12) color = 'navy';
      if (rand === 13) color = 'olive';
      if (rand === 14) color = 'gray';
      if (rand === 15) color = 'orange';
      if (rand === 16) color = 'cyan';
      if (rand === 17) color = 'pink';
      if (rand === 18) color = 'brown';
      if (rand === 19) color = 'violet';
      if (rand === 20) color = 'indigo';
      if (rand === 21) color = 'darkgreen';
      if (rand === 22) color = 'lightblue';
      if (rand === 23) color = 'magenta';
      if (rand === 24) color = 'darkred';
      if (rand === 25) color = 'lightgreen';
      i = i + 1;
  }
    return color;
  }

  getRandomBorder(){
    let nbBorder = 9;
    let rand = this.getRandomInt(nbBorder);
    let border = '';
    let i = 0;
    while (i < nbBorder) {
    if (rand === 0) border = 'dotted';
    if (rand === 1) border = 'dashed';
    if (rand === 2) border = 'solid';
    if (rand === 3) border = 'double';
    if (rand === 4) border = 'groove';
    if (rand === 5) border = 'ridge';
    if (rand === 6) border = 'inset';
    if (rand === 7) border = 'outset';
    if (rand === 8) border = 'none';
    i = i + 1;
  }
  return border;
  }

}
