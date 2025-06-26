import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UnsubscribeComponent } from './unsubscribe/unsubscribe.component';

@NgModule({
  declarations: [
    AppComponent,
    UnsubscribeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
