import { Component, OnInit } from '@angular/core';
import { NavigationService } from './../navigation.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
})

export class NavigationComponent {
    constructor( public nav: NavigationService ) {}
  }
