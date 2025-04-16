import { RouterModule, Routes } from '@angular/router';
import { ClientListComponent } from './client-list/client-list.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    {path: '', redirectTo: 'clients', pathMatch: 'full'},
    {path: 'clients', component: ClientListComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
