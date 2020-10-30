import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '', redirectTo: 'inputForm', pathMatch: 'full'
  },
  {
    path: 'inputForm', loadChildren: () => import('./components/input-form/input-form.module').then(x => x.InputFormModule)
  },
  {
    path: 'branchDetails', loadChildren: () => import('./components/branch-details/branch-details.module').then(x => x.BranchDetailsModule)
  },
  {
    path: 'directive', loadChildren: () => import('./components/test-diretive/test-ditective.module').then(x => x.TestDitectiveModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
