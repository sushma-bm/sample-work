import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  Datalist = [{'id':1,'status':'completed'},{'id':2,'status':'Not completed'}, {'id':3,'status':'Not completed'}]
   ngOnInit() {
   }
// Method in component class
trackByFn(index, item) {
  return item.id;
}

}
