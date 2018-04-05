import { Component, OnInit, Input } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { NavigationComponent } from '../navigation/navigation.component';
import { LoginComponent } from './../login/login.component';
import { NavigationService } from './../navigation.service';
import { Injectable } from '@angular/core';

@Component({
  selector: 'app-my-app',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  name = 'Parking Lot';
  public categoryNew = false;
  public categoryC = true;
  public show = false;
  public prevClicked = -1;
  public edited = false;
   visible = true;
//   categories: Array <any> = [{
//     'ID': '1',
//     'Name': 'Two Wheeler',
//     'url': '.src/app/Images/4.png'
//  },
//  {
//     'ID': '2',
//     'Name': 'Four Wheeler',
//     'url': 'app/Images/4.png'
//  } ];
// categories: Array <any> = [{
//        'ID': '1',
//        'Name': 'Two Wheeler'
//     },
//     {
//       'ID': '2',
//       'Name': 'Four Wheeler'
//    }
// ];
  constructor(private _router: Router, private nav: NavigationService) {
    this.edited = false;
  }
    ngOnInit() {
      this.edited = false;

    }
    goBack(): void  {
      this._router.navigate(['app/product']);
    }
    // addCategory(): void  {
    //   // this._router.navigate(['/dashboard']);
    //   this.categoryNew= true;
    //   this.categoryC =  false;
    // }
    // createCategory(cat,index){
    //   this.categories.push({Name: cat.value});
    //   if(this.categories[this.prevClicked] && this.prevClicked != index) {
    //     this.categories[this.prevClicked].show = false;
    //   }
    //   this.categories[index].show = !this.categories[index].show;
    //   this.prevClicked = index;
    //   this.categoryNew =  false;
    // }
}
