import { Component, ElementRef, QueryList, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '3-angular-view-children';
  fullName:string = '';
  @ViewChildren('inputEl', {})
  inputElements!: QueryList<ElementRef>;
  show(){
    let name = '';
    this.inputElements.forEach((e)=>{
      name+=e.nativeElement.value+''
    })
      this.fullName = name.trim();
  }
}
