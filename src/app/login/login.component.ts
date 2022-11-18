import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { debounce, interval } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user!:FormGroup;

  name_not_valid:any;
  constructor() { }

  ngOnInit(): void {
    this.user = new FormGroup({
      name: new FormControl("",[Validators.required]), 
      password: new FormControl('',[Validators.required]),
      email: new FormControl("",[Validators.required, Validators.min(2)])
    });

    this.user.valueChanges
    .pipe(
      debounce(()=> interval(500))
    )
    .subscribe((data)=>{
      console.log(this.user.valid);
    })
  
  }

  keyUpOp(event:any){
    if(event.target.value==""){
       this.name_not_valid = true;
    }else{
      this.name_not_valid = false;
    }
  }
  exploreNgModal(userModal:any){
    console.log(userModal);
  }
  fromSubmit(){
    console.log(this.user.value);
  }
}
