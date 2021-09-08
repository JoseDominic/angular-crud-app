import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styles: [
  ]
})
export class UserDetailsComponent implements OnInit{

  userData: any;
  duplicateUserData: any;
  isUpdated:boolean = false;

 

  constructor(private userService:UserService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    let userId = this.route.snapshot.paramMap.get('id');
    this.userService.getUserById(userId)
      .subscribe( (res:any) => {
        console.log(`Data received in TS: ${res}`);
        this.userData = res;
      })
  }

  handleEditModalOpen():void {
    this.duplicateUserData = { ...this.userData };
  }

  async handleUpdate() {
    console.log(this.duplicateUserData);
    let status = await this.userService.updateUser(this.duplicateUserData);
    console.log(`Status:${status}`);
    if(status && status.id) {
      this.isUpdated = true;
    }
  }

}
