import { Injectable } from "@angular/core";
import {HttpClient} from "@angular/common/http"
import { map } from "rxjs";
@Injectable({
    providedIn:'root'
})

export class UserService{
    url_user_photo = 'https://jsonplaceholder.typicode.com/photos';  // 
    url_user_proflie = ""; 
    constructor(public httpClient: HttpClient){

    }

    getUsers(){
       return this.httpClient.get(this.url_user_photo);
    }
    getWords(text:any){
        const url = `https://en.wikipedia.org/w/api.php?action=opensearch&search=${text}&limit=100&namespace=0&format=json&origin=*`;
        return this.httpClient.get(url)
        .pipe(
            map((data:any)=>data[1])
            )
    }

}