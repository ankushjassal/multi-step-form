import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PersonalComponent } from './personal/personal.component';
import { WorkComponent } from './work/work.component';
import { AddressComponent } from './address/address.component';
import { ResultComponent } from './result/result.component';

const routes: Routes = [
	{path: 'personal', component: PersonalComponent},
	{path: 'work', component: WorkComponent},
	{path: 'address', component: AddressComponent},
	{path: 'result', component: ResultComponent},
	{path: '', redirectTo: '/personal', pathMatch: 'full'},
	{path: '**', component: PersonalComponent}				
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
