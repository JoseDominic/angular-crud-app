import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styles: [
  ]
})
export class AboutComponent implements OnInit {

  sampleText = 'Johny had a little lamb!His name was Sonny.'
  today: Date = new Date();

  constructor() { }

  ngOnInit(): void {
  }

}
