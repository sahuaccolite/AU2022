import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/users/user.service';

export interface userPhoto{
  albumId:number,
  id: number,
  title: string,
  url:string
  thumbnailUrl:string
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {
  userPhotos:userPhoto[]  = [];

  constructor(private userService: UserService){
  }

  ngOnInit(): void {
    this.userService.getUsers().subscribe((userData:any)=>{
      this.userPhotos = userData;
    })
  }

}
