import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-concepts',
  templateUrl: './concepts.component.html',
  styles: [
  ]
})
export class ConceptsComponent implements OnInit {

  //public variables
  //string interpolation related
  appName = "User management app";
  totalTeamMembers = 10;

  //property binding related
  companyName = 'SOTI';

  //two way binding related
  courseName = 'Angular;'

  //custom property binding related
  personAge = 45;

  //custom event binding demo related(data to be received from child component ceb)
  profileName = "Null";

  //for directives
  isLoggedIn = true;

  skillList = ['HTML','CSS','JS','Angular'];

  constructor() { }

  ngOnInit(): void {
  }

  //custom methods should come here

  //method for event binding demo
  handleClick(event:any):void {
    alert('clicked through event binding');
    event.target.innerHTML = 'clicked';
    event.target.disabled = true;
  }

  //Step 6:Define Handler for custom event emitted by child component ceb
  handleProfileLoaded(event:any) {
    console.log(`Inside handle profile loaded`);
    console.log(`Data received from child component is:${event.firstName}`);
    this.profileName = event.firstName;
  }


}
