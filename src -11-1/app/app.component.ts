import { MyAngular2Page } from './../../e2e/app.po';
import { Component, OnInit, transition  } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './products.service';
import { Http , Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { AppService } from './app.services';
import {PaginatePipe, PaginationService} from 'ng2-pagination';

@Component ({
selector: 'app-my-app',
templateUrl: './app.component.html',
  providers: [ProductService, AppService],
  styleUrls: ['./app.component.css']
})

export   class   AppComponent implements OnInit {
  newdate = new Date(2016, 3, 15);
  newValue: number = 123;
  newValue1: number = 30;
  newValue2: number = 0.3;
  Status: boolean = true;
  tutorial: string = 'Angular2';
  tutorialList:string[]= ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  appTitle: string = 'Welcome';
  private businessCategory : any;
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
   iproducts: IProduct[];
   constructor(private _product: ProductService, private _AppService: AppService) {
  }
   ngOnInit(): void {
     this.value = this._AppService.getapp();
      this._product.getproducts()
      .subscribe(iproducts => this.iproducts = iproducts);
   }
   clicked(event){
    this.Status = false;
   }

}
