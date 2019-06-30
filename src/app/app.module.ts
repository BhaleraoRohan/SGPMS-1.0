import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule,Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { HttpClientModule,HTTP_INTERCEPTORS} from '@angular/common/http';



import { AppComponent } from './app.component';
import { FooterComponent } from './layout/components/footer/footer.component';
import { HeaderComponent } from './layout/components/header/header.component';
import { SidenavComponent } from './layout/components/sidenav/sidenav.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AttendanceComponent } from './pages/attendance/attendance.component';
import { DefaultComponent } from './pages/default/default.component';

const appRoutes : Routes =[  
  
  {
    path : 'gp/dashboard',component : DashboardComponent
  },
  {
    path : 'gp/attendance',component : AttendanceComponent
  },
  {
    path : '',component : DefaultComponent
  }, 
];



@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    SidenavComponent,
    DashboardComponent,
    AttendanceComponent,
    DefaultComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing : true}
    ),
    BrowserModule,
    HttpClientModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
