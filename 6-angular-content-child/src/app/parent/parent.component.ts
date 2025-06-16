import { AfterContentInit, Component, ContentChild, ElementRef } from '@angular/core';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements AfterContentInit{
@ContentChild(ChildComponent) childComp! : ChildComponent;
@ContentChild('parad') paragraphEl!: ElementRef;


ngAfterContentInit() {
    console.log('Child component:', this.childComp);
  }

  
}
