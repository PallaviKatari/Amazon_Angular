import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor() { }
  //STRING INTERPOLATION
  title = 'amazon';
  //PROPERTY BINDING
  public logo="https://pngimg.com/uploads/amazon/amazon_PNG5.png";
  //EVENT BINDING
  onSearch()
  {
    alert("Will contact shortly");
  }
  ngOnInit(): void {
  }

}
