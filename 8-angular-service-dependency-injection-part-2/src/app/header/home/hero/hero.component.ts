import { Component, inject } from '@angular/core';
import { SubscribeService } from 'src/app/Services/subscribe.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
 subService = inject(SubscribeService);

  OnSubscribe(){
    this.subService.OnSubscribeClicked('yearly');
  }
}
