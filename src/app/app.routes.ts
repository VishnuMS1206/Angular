import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { TodoComponent } from './pages/todo/todo.component';
import { ContactComponent } from './pages/contact/contact.component';

export const routes: Routes = [

    {path:"",component:HomeComponent},
    {path:'todo',component:TodoComponent},
    {path:'contact',component:ContactComponent}
];
