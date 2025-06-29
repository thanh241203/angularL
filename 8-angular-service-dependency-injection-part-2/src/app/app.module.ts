import { InjectionToken, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
 import { AdminComponent } from './header/admin/admin.component';
import { HomeComponent } from './header/home/home.component';
import { UserDetailComponent } from './header/admin/user-detail/user-detail.component';
import { UserListComponent } from './header/admin/user-list/user-list.component';
import { HeroComponent } from './header/home/hero/hero.component';
import { SidebarComponent } from './header/home/sidebar/sidebar.component';
import { UserService } from './Services/user.service';
export const USER_TOKEN = new InjectionToken<UserService>('USER_SERVICE');
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
     AdminComponent,
    HomeComponent,
    UserDetailComponent,
    UserListComponent,
    HeroComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
