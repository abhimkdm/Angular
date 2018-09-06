import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  title : string = 'Angular Learns';
  router : any;
  constructor(private _router: Router ) {
    this.router = _router;
  }

  ngOnInit() {
    console.log(this.router.url); //  /routename
  }

}
