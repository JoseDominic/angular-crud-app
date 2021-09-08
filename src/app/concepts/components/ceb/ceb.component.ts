import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-ceb',
  template: `
    <div>
      <p>CEB</p>
      <button type="button" (click)="handleSend($event)">Click to send data to parent(concepts)</button>
    </div>
  `,
  styles: [
  ]
})
export class CebComponent implements OnInit {

  //Child to parent comm demo(using custom event binding)
  //Step 1: Have data to be sent to parent in a variable
  profileData:any = {
    firstName: 'Jose',
    city: 'Toronto',
    zip: 53444
  }

  //Step 2: Creating custom event (Event Emitter class should be imported from @angular/core)
  @Output() profileLoaded: EventEmitter<any> = new EventEmitter(); //Step 3: making new event a custom event using @Output

  constructor() { }

  ngOnInit(): void {
  }

  //method to demo child to parent comm 
  handleSend(event:any):void {
    console.log(`Sending data to parent component`);

    //Step 4: Sending data through event emit
    this.profileLoaded.emit(this.profileData);
  }


}
