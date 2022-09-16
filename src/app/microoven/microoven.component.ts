import { Component, OnInit } from '@angular/core';
import * as allprod from "../data/allproducts.json";
@Component({
  selector: 'app-microoven',
  templateUrl: './microoven.component.html',
  styleUrls: ['./microoven.component.css']
})
export class MicroovenComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  all:any=(allprod as any).default;

}
