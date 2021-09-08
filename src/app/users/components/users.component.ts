import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styles: [
  ]
})
export class UsersComponent implements OnInit, OnDestroy {

  userList: any[] = [];
  userSubscription:Subscription | undefined = undefined;

  constructor(private userService:UserService) { }

  //Life cycle hook/ life cycle method
  //called when component comes into view
  ngOnInit(): void {

    this.userSubscription = this.userService.getUsers().subscribe( (res:any) => {
      console.log(`Res inside ts file:${res[0].name}`);
      this.userList = res;
    });
    console.log(`userList = ${this.userList}`);

  }

  ngOnDestroy():void {//lifecycle hook
    //will be called when the component goes out of view
    //ideal place to unsubscribe, clear data, remove timeouts,intervals etc
    console.log(`Inside onDestroy`)
    if(this.userSubscription)
      {this.userSubscription.unsubscribe();}
    if (this.userList && this.userList.length>0){
      this.userList.length = 0;
    }

  }


}
