import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '5-angular-ng-container';

   toggle: Boolean = true;

  onToggle(){
    this.toggle = !this.toggle
  }
}
