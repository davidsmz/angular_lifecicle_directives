import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'miselaneos';
  color: string;
  setColor(color: string) {
    this.color = color;
  }
}
