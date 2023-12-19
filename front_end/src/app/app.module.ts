import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';

@NgModule({
  declarations: [ ],
  imports: [BrowserModule,EmployeeListComponent,AppComponent],
  providers: [],
  bootstrap: []
})
export class AppModule { }