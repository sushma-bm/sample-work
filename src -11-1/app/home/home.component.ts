import { Component, OnInit } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-my-app',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  name= 'My Wallet';
  categories: any[] = [{
    'ID': '1',
    'Name': 'One',
    'url': 'app/Images/4.png'
 },
 {
    'ID': '2',
    'Name': 'Two',
    'url': 'app/Images/4.png'
 } ];

  constructor(private _router: Router) { }

  ngOnInit() {
  }

  goBack(): void  {
    this._router.navigate(['app/product']);
  }
  addCategory(): void  {
    this._router.navigate(['/dashboard']);
  }
}
