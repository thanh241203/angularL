import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '9-angular-rxjs-and-observables';

  myObservable = new  Observable((observer)=>{
    setTimeout(()=>{
      observer.next(1)
    },1000);
  })
}
