import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  constructor(public route: Router) {

  }

  ngOnInit() { }

  logout() {
    this.route.navigateByUrl('login');
  }
}
