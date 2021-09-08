import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styles: [
  ]
})
export class AddUserComponent implements OnInit {

  //Step 1 : Create form equivalent in TS
   addUserForm = new FormGroup({
     //Step 2 : Create form element equivalents in TS
     fullName: new FormControl('',Validators.required), //Step3,4:Refer HTML file
     phone: new FormControl('',Validators.required),//Step 5: Validation using Validator class
     email: new FormControl('',[Validators.required,Validators.email])//Step 6: Refer HTML file
   });

   isSaved = false;

  constructor(private userService:UserService) { }

  ngOnInit(): void {
  }

  handleAddUserForm(){
    console.log(this.addUserForm); //entire form state
    console.log(this.addUserForm.value);//submitable data

    //send data to service and subscribe for response
    return this.userService.createUser(this.addUserForm.value)
      .subscribe( (res:any) => {
        console.log(`Data received from service inside ts: ${res}, id:${res.id}`);
        
        if (res && res.id) { //successful req contains sent user data with a new id assigned
          this.isSaved = true;
        }
      } )
  }

}
