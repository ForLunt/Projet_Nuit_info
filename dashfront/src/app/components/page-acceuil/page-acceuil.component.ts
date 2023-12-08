import { Component } from '@angular/core';

@Component({
  selector: 'app-page-acceuil',
  templateUrl: './page-acceuil.component.html',
  styleUrls: ['./page-acceuil.component.css']
})
export class PageAcceuilComponent {
  generatedColors: string[] = [];
  

  ngOnInit() {
    let r = Math.floor(Math.random()*255);
    let g = Math.floor(Math.random()*255);
    let b = Math.floor(Math.random()*255);
    let randomColor;
    const textColor = `rgb(${r},${g},${b})`;
    this.generatedColors.push(textColor);
  }
}
