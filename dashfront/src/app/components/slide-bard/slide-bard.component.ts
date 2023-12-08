import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-SlidBard',
  templateUrl: './slide-bard.component.html',
  styleUrls: ['./slide-bard.component.css']
})
export class SlideBardComponent implements OnInit {
  lien: string=" ";
  public ngOnInit(): void {
    this.lien="https://fr.wikipedia.org/wiki/Wikip%C3%A9dia:Accueil_principal";
  }
  reload(){
    location.reload();
  }
}
