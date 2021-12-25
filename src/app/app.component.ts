import { Component, OnInit } from '@angular/core';
import { fadeOutOnLeaveAnimation } from 'angular-animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [fadeOutOnLeaveAnimation()],
})
export class AppComponent implements OnInit {
  title = 'tip-calculator';

  isLoaderVisible: boolean = true;

  ngOnInit(): void {
    setTimeout(() => {
      this.isLoaderVisible = false;
    }, 2500);
  }
}
