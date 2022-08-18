import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListsComponent } from './lists/lists.component';
import { MemderDetailComponent } from './members/memder-detail/memder-detail.component';
import { MemderListComponent } from './members/memder-list/memder-list.component';
import { MessagesComponent } from './messages/messages.component';

const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'members', component: MemderListComponent},
    {path: 'members/:id', component: MemderDetailComponent},
    {path: 'lists', component: ListsComponent},
    {path: 'messages', component: MessagesComponent},
    {path: '**', component: HomeComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
