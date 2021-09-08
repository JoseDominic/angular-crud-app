//Feature routing module for users feature
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './components/users.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { RouterModule } from '@angular/router';


//configure the routes
const usersRoutes = [
  {path:'', component:UsersComponent},
  {path:'add', component:AddUserComponent},
  {path:':id',component:UserDetailsComponent},
] 

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(usersRoutes)
  ],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
