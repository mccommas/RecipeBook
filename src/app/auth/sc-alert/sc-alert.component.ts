import { Component, OnInit } from '@angular/core';
import {Subject} from 'rxjs/Subject';
import 'rxjs/add/operator/debounceTime';
@Component({
  selector: 'app-sc-alert',
  templateUrl: './sc-alert.component.html',
  styleUrls: ['./sc-alert.component.css']
})
export class ScAlertComponent implements OnInit {
    private _success = new Subject<string>();
    staticAlertClosed = false;
    successMessage: string;

  constructor() { }

    ngOnInit(): void {
        setTimeout(() => this.staticAlertClosed = true, 20000);

        this._success.subscribe((message) => this.successMessage = message);
        this._success.debounceTime(5000).subscribe(() => this.successMessage = null);
    }

    public changeSuccessMessage() {
        this._success.next(`${new Date()} - Message successfully changed.`);
    }


}
