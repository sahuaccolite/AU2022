import { Component, OnInit } from '@angular/core';
import { debounce, debounceTime, from, interval, of, Subject, switchMap } from 'rxjs';
import { UserService } from '../services/users/user.service';

@Component({
  selector: 'app-auto-complete',
  templateUrl: './auto-complete.component.html',
  styleUrls: ['./auto-complete.component.scss']
})
export class AutoCompleteComponent implements OnInit {
  searchWord_list!:any 
  searchWord$ = new Subject<string>();
  result :any = []
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.searchWord_list = 
    this.searchWord$
     .pipe(
       debounceTime(100),
       switchMap((text:any)=>{
         return this.userService.getWords(text)
       })
     )
     
    
  }

  search(e:any){
    this.searchWord$.next(e.target.value);
  }

}
