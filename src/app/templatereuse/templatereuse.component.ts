import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-templatereuse',
  templateUrl: './templatereuse.component.html',
  styleUrls: ['./templatereuse.component.scss']
})
export class TemplatereuseComponent implements OnInit {
  bool = false;
  str = "swathi";
  strArray = ["divya","swathi","sandhya"];
 
  constructor() { }

  ngOnInit() {
  }

}
