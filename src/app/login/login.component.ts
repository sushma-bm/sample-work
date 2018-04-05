import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavigationService } from './../navigation.service';
import { importType } from '@angular/compiler/src/output/output_ast';
import {ToastyService, ToastyConfig, ToastOptions, ToastData} from 'ng2-toasty';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public edited = true;
  public signUpWrapper = false;
  hideElement: true;
  visible = true;
  constructor(private router: Router, private nav: NavigationService,
    private toastyService: ToastyService, private toastyConfig: ToastyConfig) {
    this.toastyConfig.theme = 'material';
  }
  ngOnInit() {
  }
  addToast() {
    // this.toastyService.default('Hi there');
    const toastOptions: ToastOptions = {
        title: '',
        msg: 'Successfully Logged In',
        showClose: true,
        timeout: 5000,
        theme: 'default',
    };
    this.toastyService.success(toastOptions);
    setTimeout((router: Router) => {
      this.router.navigate(['/home']);
      this.nav.show();
  }, 2000);
}
}
