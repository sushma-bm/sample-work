 import { Component, OnInit } from '@angular/core';
  import { Routes, RouterModule } from '@angular/router';

  @Component({
    selector: 'app-my-app',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
  })
  export class DashboardComponent implements OnInit {
    vehiclesDetails: Array <any> = [
      {
      'CustomerName': 'car1', 'VehicleNo': 'KA12EQ5467', 'ModelName': 'Maruthi1',
      'RegistrationState': 'Karnataka', 'Type': 'Petrol', 'url': './app/Images/c1.jpg'
    }, {
      'CustomerName': 'car2', 'VehicleNo': 'KA12EQ5468', 'ModelName': 'Maruthi1',
      'RegistrationState': 'Karnataka', 'Type': 'Petrol', 'url': './app/Images/c2.jpg'
    }, {
      'CustomerName': 'car3', 'VehicleNo': 'KA12EQ5469', 'ModelName': 'Maruthi2',
      'RegistrationState': 'Karnataka', 'Type': 'Petrol', 'url': './app/Images/c3.jpg'
    }, {
      'CustomerName': 'car4', 'VehicleNo': 'KA12EQ5462', 'ModelName': 'Maruthi3',
      'RegistrationState': 'Karnataka', 'Type': 'Petrol', 'url': './app/Images/c4.jpg'
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
