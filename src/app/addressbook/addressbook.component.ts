import { Component, OnInit } from '@angular/core';
//import { NgForm } from '@angular/forms';

import { Employee } from '../employee';

@Component({
  selector: 'app-addressbook',
  templateUrl: './addressbook.component.html',
  styleUrls: ['./addressbook.component.scss']
})
export class AddressbookComponent implements OnInit {

  listOfCity:string[]=["Ghaziabad","Noida"];
  empData: Employee ={empAddress:"",empCity:"Noida", empname:""};
   

  constructor() { 
    this.empData={
      empAddress:"",
      empname:"manuj",
      empCity:"Noida"
    };

  }

  ngOnInit(): void {

   

  }

  onSubmit():void{
    console.log(this.empData);
  }

}

 

