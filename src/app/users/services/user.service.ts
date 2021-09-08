import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private REST_API_URL = "https://jsonplaceholder.typicode.com/users/"

  constructor(private Http:HttpClient) { }

  createUser(userData:any): any {
    //send User data to API , catch res and return res to ts file

    return this.Http.post(this.REST_API_URL,userData)
      .pipe(map( (res:any) => {
        console.log(`From API inside service:${res}`);
        return res;
      } ))
  }

  getUsers():any {

    return this.Http.get(this.REST_API_URL)
      .pipe(map( (res:any) => {
        console.log(`From API inside getUsers method:${res}`);
        return res;
      } ));
  }
  
  getUserById(userId:any):any {
    let restAPIUrl = this.REST_API_URL + userId;
    return this.Http.get(restAPIUrl)
      .pipe( map ( (res:any) => {
        console.log(`Response inside getuser method:${res}`);
        return res;
      }))
  }

  updateUser(updatedUserData:any):any {
    return this.Http.put(this.REST_API_URL+updatedUserData.id, updatedUserData)
    .toPromise()
      .then( (res:any) => {
        console.log(`Res inside promise: ${res}`);
        return res;
      })
      .catch( (err:any)=> {
        console.log(`Promise error:${err}`);
        return err;
      } )
      .finally( ()=> {
        console.log(`Promise is over`);
      })
  }
}
