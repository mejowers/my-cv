import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-info',
  templateUrl: './contact-info.component.html',
  styleUrls: ['./contact-info.component.css']
})
export class ContactInfoComponent implements OnInit {

 title: string = "Resume";
 name: string = "Michelle Jowers";
 phone: string = "513-313-6012";
 email: string = "michelle.jowers@icloud.com";

  constructor() { }

  ngOnInit(): void {
   console.log(this.title+ " was called");
  }

}
