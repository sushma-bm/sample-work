import { MyAngular2Page } from './../../e2e/app.po';
import { Component, OnInit, transition  } from '@angular/core';
// import { IProduct } from './product';
// import { ProductService } from './products.service';
import { Http , Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {PaginatePipe, PaginationService} from 'ng2-pagination';
import { Router } from '@angular/router';

@Component ({
selector: 'app-my-app',
templateUrl: './app.component.html',
  // providers: [ProductService, NavigationService],
  styleUrls: ['./app.component.css']
})

export   class   AppComponent implements OnInit {
  name = 'Parking Lot';
  newdate = new Date(2016, 3, 15);
  newValue = 123;
  newValue1 = 30;
  newValue2 = 0.3;
  Status = true;
  tutorial = 'Angular2';
  tutorialList = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  appTitle = 'Welcome';
  private businessCategory: any;
  visible: boolean;
  appList: any[] = [{
     'ID': '1',
     'Name': 'One',
     'url': 'app/Images/1.png'
  },
  {
     'ID': '2',
     'Name': 'Two',
     'url': 'app/Images/2.png'
  } ];
  value: string = '';
  //  iproducts: IProduct[];
  //  constructor(private _product: ProductService, private router: Router,public nav: NavigationService) {
    constructor(private router: Router) {
  }
   ngOnInit(): void {
      // this._product.getproducts()
      // .subscribe(iproducts => this.iproducts = iproducts);
      // this.visible = true;
   }
   clicked(event){
    this.Status = false;
   }

}
