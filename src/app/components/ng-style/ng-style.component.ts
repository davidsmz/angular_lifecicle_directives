import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  template: `
    <p [style.fontSize.px]="fontSize">
      ng-style works!
    </p>

    <button class="btn btn-primary m-2" (click)="fontSize = fontSize + 5">
      <i class="fa fa-plus"></i>
    </button>
    <button class="btn btn-primary m-2" (click)="fontSize = fontSize - 5">
      <i class="fa fa-minus"></i>
    </button>
  `,
  styles: []
})
export class NgStyleComponent implements OnInit {
  fontSize = 40;

  constructor() {}

  ngOnInit() {}
}
