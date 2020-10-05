import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RestserviceService {

  constructor(private http:HttpClient) { }
 adddata(temp)
 {
   return this.http.put("https://run.mocky.io/v3/1b14a431-698e-436c-b7e9-fd2a68311669",temp);

 }
 showData()
{
  return this.http.get("https://run.mocky.io/v3/1b14a431-698e-436c-b7e9-fd2a68311669");

}
login()
  {
    return this.http.get("https://run.mocky.io/v3/c7da7125-06d1-429c-bd49-c2d2fe0f842b");
   
  }
}
