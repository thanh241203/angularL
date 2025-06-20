import { Component } from '@angular/core';
import { SubscribeService } from 'src/app/Services/subscribe.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
 //1. HOW TO PROVIDE DEPENDENCY
  constructor(private subService: SubscribeService){

  }

  OnSubscribe(){
    this.subService.OnSubscribeClicked('quaterly');
  }
}
