import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BranchDetailstComponent } from './branch-detailst.component';
import { RouterModule, Routes } from '@angular/router';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatInputModule } from '@angular/material/input';

import { CustomPaginationComponent } from 'src/app/shared/custom-pagination/custom-pagination.component';
import { FilterPipe } from 'src/app/shared/pipe/filter.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '', component: BranchDetailstComponent
  }
];

@NgModule({
  declarations: [
    BranchDetailstComponent,
    CustomPaginationComponent,
    FilterPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    MatFormFieldModule,
    MatSelectModule,
    MatDialogModule,
    MatTooltipModule,
    MatInputModule
  ]
})
export class BranchDetailsModule { }
