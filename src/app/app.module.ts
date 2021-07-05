import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveEmployeeComponent } from './employee/reactive form/reactive-employee.component';
import { ListEmployeeComponent } from './employee/List/list-employee.component';
import { TemplateFormComponent } from './employee/template form/template-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ReactiveEmployeeComponent,
    ListEmployeeComponent,
    TemplateFormComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    NgxPaginationModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
