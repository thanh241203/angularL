import { Component, ContentChild, ContentChildren, ElementRef, QueryList } from '@angular/core';
import { TestComponent } from '../test/test.component';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
 @ContentChild('para') paragraphEl!: ElementRef;

  @ContentChild(TestComponent) testEl!: TestComponent;

  @ContentChildren('para') paraElements!: QueryList<ElementRef>;

  @ContentChildren(TestComponent) testElements!: QueryList<TestComponent>;

  StyleParagraph(){
    // var tessst = this.paragraphEl.nativeElement 
    // console.log(tessst );
    console.log(this.testEl.name);
    console.log(this.testEl.age);
    this.paraElements.forEach((el) => {console.log(el.nativeElement)});

    this.testElements.forEach((el) => {console.log(el)});
    
  }
}
