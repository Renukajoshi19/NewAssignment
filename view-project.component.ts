import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { RestserviceService } from '../restservice.service';

export interface DialogData {
  theme: any;
  roots: any;
  type: any;
  division: any;
  category: any;
  M: any;
 }

@Component({
  selector: 'app-view-project',
  templateUrl: './view-project.component.html',
  styleUrls: ['./view-project.component.css']
})

export class ViewProjectComponent implements OnInit {

  Details:String;
  viewdrive: FormGroup;
  constructor(private _createService: RestserviceService,private http : HttpClient) {

  }
  selectedValue:any='all';
  selected:any="";
  data: any[];
  temp: any;
 
    
    
      ngOnInit() {
 this._createService.showData().subscribe((e: any) => {
          return this.data = e
        });
        console.log(this.data);
      }    }
  

