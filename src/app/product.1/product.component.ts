import { Component, OnInit } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

@Component({
  selector: 'app-my-app',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
  export class ProductComponent implements OnInit {
    vehiclesDetails: Array <any> = [
      {
      'CustomerName': 'bike1', 'VehicleNo': 'KA12EQ5467', 'ModelName': 'Maruthi Suzuki',
      'RegistrationState': 'Karnataka', 'Type': 'Petrol', 'url': './app/Images/b1.jpg'
    }, {
      'CustomerName': 'bike2', 'VehicleNo': 'KA12EQ5467', 'ModelName': 'Maruthi Suzuki',
      'RegistrationState': 'Karnataka', 'Type': 'Petrol', 'url': './app/Images/b2.jpg'
    }, {
      'CustomerName': 'bike3', 'VehicleNo': 'KA12EQ5467', 'ModelName': 'Maruthi Suzuki',
      'RegistrationState': 'Karnataka', 'Type': 'Petrol', 'url': './app/Images/b3.jpg'
    }, {
      'CustomerName': 'bike4', 'VehicleNo': 'KA12EQ5467', 'ModelName': 'Maruthi Suzuki',
      'RegistrationState': 'Karnataka', 'Type': 'Petrol', 'url': './app/Images/b4.jpg'
    }];
    public newAttribute: any = [{
      'CustomerName': '', 'VehicleNo': '', 'ModelName': '',
      'RegistrationState': '', 'Type': ''
    }];
     public edited:boolean = false;
     public show:boolean = false;
     public prevClicked:number = -1;
     vehiclesDetailsArray = [];
     private fieldArray: Array<any> = [];
     dd: any =' ';
     detailsList(index) {// only show clicked img info
      if(this.vehiclesDetails[this.prevClicked] && this.prevClicked != index) {
        this.vehiclesDetails[this.prevClicked].show = false;
      }
      this.vehiclesDetails[index].show = !this.vehiclesDetails[index].show;
      this.prevClicked = index;
  };

    constructor() { }

    ngOnInit() {
    }
    onAddItem(name, number, model, state, type) {
      this.vehiclesDetails.push({CustomerName: name.value, Type: type.value,
        VehicleNo: number.value, ModelName: model.value, RegistrationState: state.value});

      }
    deleteFieldValue(i) {
        this.vehiclesDetails.splice(i, 1);
    };
  }
