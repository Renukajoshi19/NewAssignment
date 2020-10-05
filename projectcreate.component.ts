import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { RestserviceService } from '../restservice.service';

@Component({
  selector: 'app-projectcreate',
  templateUrl: './projectcreate.component.html',
  styleUrls: ['./projectcreate.component.css'],
  providers:[RestserviceService]
})
export class ProjectcreateComponent implements OnInit {

  theme = new FormControl('', [Validators.required]);
  roots = new FormControl('', [Validators.required]);
  type = new FormControl('', [Validators.required]);
  division = new FormControl('', [Validators.required]);
  category = new FormControl('', [Validators.required]);
  M = new FormControl('', [Validators.required]);

  department = new FormControl('', [Validators.required]);
  location = new FormControl('', [Validators.required]);
  projectneed = new FormControl('', [Validators.required]);
  date = new FormControl('', [Validators.required]);

  form: FormGroup = this.builder.group({
    theme: this.theme,
    roots: this.roots,
    type: this.type,
    division: this.division,
    category: this.category,
    department: this.department,
    location: this.location,
    projectneed: this.projectneed,
    date: this.date,
M:this.M,
  });
  constructor(private builder: FormBuilder, private restserviceService:RestserviceService) { }

  ngOnInit() {
  }
  submit() {
    
alert("Data is Inserted");
 this.restserviceService.adddata(this.form.value).subscribe();
 
console.log("Data is Inserted"+ this.form.value);
  }


}
