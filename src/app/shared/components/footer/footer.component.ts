import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
  <div class="text-center">
    <hr>
    <app-menu>
      <!-- Content projection-->
      <li class="nav-item" backtotop>
          <a class="nav-link" aria-current="page" href="#">Back to top</a>
      </li>
    </app-menu>
    <p class="grey">Developed in Septemper 2021</p>
    <p class="red"> <!-- from global style -->
      &copy; 2021 Jose Dominic
    </p>
  </div>
  `,
  styles: [
    `
    .grey {
      color:grey;
    }
    `
  ]
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
