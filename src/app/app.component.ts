import { Component, OnInit } from '@angular/core';
import { from, map, take } from 'rxjs';
import { UserService } from './services/users/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'project';
  userPhoto:any = [];
  userDetails:any = [];
 //publisher --
  constructor(private userService: UserService){

  }
 //Subscriber--- 
 
  ngOnInit(): void {
    // this.userService.getUsers().subscribe((userData)=>{
    //   this.userPhoto = userData;
    // })

    //Obserablers: 
    //  let userDetails_obs:any =  from([{name:'X1'},
    //  {name:'X2'},
    //  {name:'X3'},
    //  {name:'X4'},
    //  {name:'X5'}])
    //      //Promise
    //  let userDetails_promise = new Promise((resolve)=>{
    //   //   
    //   setTimeout(()=>{
    //        resolve([
    //          {name:'X1'},
    //          {name:'X2'},
    //          {name:'X3'},
    //          {name:'X4'},
    //          {name:'X5'}
    //        ])
    //      },5000)
    //  }) 
    //  userDetails_promise.then((data)=>{
    //    console.log(data);
    //  })

    //  userDetails_obs
    //  .pipe(
    //    take(2)
    //    )
    //  .subscribe((data:any)=>{
    //   data.name = data.name + "**";
    //        this.userDetails.push(data);
    //  });

  }

}
