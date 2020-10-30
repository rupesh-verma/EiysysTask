import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputFormComponent } from './input-form.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '', component: InputFormComponent
  }
];

@NgModule({
  declarations: [InputFormComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class InputFormModule { }
