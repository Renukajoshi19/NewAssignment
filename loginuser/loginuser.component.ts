import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RestserviceService } from '../restservice.service';

@Component({
  selector: 'app-loginuser',
  templateUrl: './loginuser.component.html',
  styleUrls: ['./loginuser.component.css']
})
export class LoginuserComponent implements OnInit {

  submitted: boolean = false;
  invalidLogin: boolean = false;
  ngOnInit() {
    
  }
 
  email=new FormControl('',[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]);

  password=new FormControl('',[Validators.required,Validators.minLength(5)]);
  
  loginfrom:FormGroup=this.builder.group({
    email:this.email,
    password:this.password
  });

  constructor(private _createService: RestserviceService,private builder: FormBuilder,private router: Router) { }
  
res:any;
  
    login() {

      /* this._createService.login().subscribe((e:any)=>{

        this.res=e;
        console.log(this.res.value);
        if(this.res.email==this.loginfrom.value.email && this.res.password==this.loginfrom.value.password)
        {
          this.router.navigate(['/Menu']);
        }else {
          this.invalidLogin = true;
            
        }
       });
      
 */

      if(this.loginfrom.value.email=="renuka@gmail.com" && this.loginfrom.value.password =="renuka")
      {
        this.router.navigate(['/Menu',this.loginfrom.value.email]);
      }else {
        this.invalidLogin = true;
          
      }
      
    }
    data():any
    { 
{              this.invalidLogin = false;;

  this.router.navigate(['/Login']);
  
}
}
       
      
  
}
