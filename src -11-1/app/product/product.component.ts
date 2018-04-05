import { Component, OnInit } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IProduct } from './../product';

@Component({
  selector: 'app-my-app',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
vehiclesDetails: any = [
  {
  'CustomerName': 'aa', 'VehicleNo': 'KA12EQ5467', 'ModelName': 'Maruthi Suzuki',
  'RegistrationState': 'Karnataka', 'Type': 'Petrol'
}, {
  'CustomerName': 'bb', 'VehicleNo': 'KA12EQ5467', 'ModelName': 'Maruthi Suzuki',
  'RegistrationState': 'Karnataka', 'Type': 'Petrol'
}, {
  'CustomerName': 'cc', 'VehicleNo': 'KA12EQ5467', 'ModelName': 'Maruthi Suzuki',
  'RegistrationState': 'Karnataka', 'Type': 'Petrol'
}, {
  'CustomerName': 'dd', 'VehicleNo': 'KA12EQ5467', 'ModelName': 'Maruthi Suzuki',
  'RegistrationState': 'Karnataka', 'Type': 'Petrol'
}];
vehiclesDetailsArray = [];
private fieldArray: Array<any> = [];
// private newAttribute: any = {};
public newAttribute: any = [{
  'CustomerName': '', 'VehicleNo': '', 'ModelName': '',
  'RegistrationState': '', 'Type': ''
}];

searchValue: string = '';
clearSearch() {
  this.searchValue = null;
}

  constructor() { }

  ngOnInit() {
  }

  onAddItem(name, number, model, state, type) {
    this.vehiclesDetails.push({CustomerName: name.value, Type: type.value,
      VehicleNo: number.value, ModelName: model.value, RegistrationState: state.value});
 }

  addFieldValue() {
    console.log(this.newAttribute);
    this.vehiclesDetails.push({'CustomerName': this.newAttribute.CustomerName,
    'VehicleNo': this.newAttribute, 'ModelName': this.newAttribute,
    'RegistrationState': this.newAttribute, 'Type': this.newAttribute});
    this.newAttribute = [];
}


  deleteFieldValue(rowIndex) {
      this.vehiclesDetails.splice(rowIndex, 1);
  };




  // addFieldValue() {
  //     this.fieldArray.push(this.newAttribute)
  //     this.newAttribute = {};
  // }

  // deleteFieldValue(index) {
  //     this.fieldArray.splice(index, 1);
  // }



}
