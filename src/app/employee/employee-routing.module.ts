import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListEmployeeComponent } from './List/list-employee.component';
import { ReactiveEmployeeComponent } from './reactive form/reactive-employee.component';
import { TemplateFormComponent } from './template form/template-form.component';

const routes: Routes = [
  { path: 'list', component: ListEmployeeComponent },
  { path: 'reactive', component: ReactiveEmployeeComponent },
  { path: 'template', component: TemplateFormComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
