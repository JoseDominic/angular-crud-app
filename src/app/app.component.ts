import { Component } from '@angular/core';

@Component({
  selector: 'app-root', //displays component using selector(element selector used here)
  templateUrl: './app.component.html', //html part of the component
  styleUrls: ['./app.component.scss'] //styles used in the component
})
export class AppComponent {
  title = 'angular-usr-mgmnt-app';
}
