import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from './../user';
import { AuthService } from './../auth.service';

@Component({
  selector: 'app-logout',
  template: `Logged In: {{loggedInUser.username}} | {{loggedInUser.role}} |
  <button input='input' (click)="logout()">Logout</button>
`,
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit{
    loggedInUser: User;
    constructor(private authService: AuthService, private router: Router) {
    }
    ngOnInit() {
       this.loggedInUser = this.authService.getLoggedInUser();
    }
    logout() {
       this.authService.logoutUser();
       this.router.navigate([ this.authService.getLoginUrl() ]);
    }
}
