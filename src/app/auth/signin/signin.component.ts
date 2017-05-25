import { Component, OnInit } from '@angular/core';
import {Subject} from 'rxjs/Subject';
import 'rxjs/add/operator/debounceTime';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit   {


  constructor(private authService: AuthService) { }
    private _success = new Subject<string>();

    staticAlertClosed = false;
    successMessage: string;
    ngOnInit(): void {
        setTimeout(() => this.staticAlertClosed = true, 20000);

        this._success.subscribe((message) => this.successMessage = message);
        this._success.debounceTime(5000).subscribe(() => this.successMessage = null);
    }
    public changeSuccessMessage() {
        this._success.next(`${new Date()} - Message successfully changed.`);
    }

  onSignin(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;
    this.authService.signinUser(email, password);
      this.changeSuccessMessage()
  }

}
