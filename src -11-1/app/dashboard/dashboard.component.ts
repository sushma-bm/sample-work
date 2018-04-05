import { Component, OnInit } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-my-app',
  template: `<h2>Dashboard</h2><br>
  <a class="button" (click)="goBack()" >Back to Home</a>
  `
})
export class DashboardComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit() {
  }
  goBack(): void  {
    this._router.navigate(['/Products']);
  }
}
