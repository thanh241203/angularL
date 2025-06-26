import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-unsubscribe',
  templateUrl: './unsubscribe.component.html',
  styleUrls: ['./unsubscribe.component.css']
})
export class UnsubscribeComponent {
  counter = interval(1000)
data1: number[] = [];
  data2: number[] = [];
  data3: number[] = [];

  subscriber1: any;
  subscriber2: any;
  subscriber3: any;

  OnSubscribe1(){
    this.subscriber1 = this.counter.subscribe((val) => {
      this.data1.push(val);
    })
  }

    OnUnsubscribe1(){
    this.subscriber1.unsubscribe();
  }
}
