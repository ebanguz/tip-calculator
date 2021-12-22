import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-display-results',
  templateUrl: './display-results.component.html',
  styleUrls: ['./display-results.component.scss'],
})
export class DisplayResultsComponent implements OnInit {
  @Input() tipAmount: number = 0;
  @Input() totalPeople: number = 0;

  @Output() onReset = new EventEmitter<number>();

  constructor() {}

  ngOnInit(): void {}

  reset() {
    this.onReset.emit(14);
  }
}
