import { Routes, RouterModule } from '@angular/router';
 
import { AppComponent } from './app.component';

import { RegisterComponent } from './accounts/register.component';
import { HomeComponent } from './home/home.component';
 
const appRoutes: Routes = [
    // { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: '', component: HomeComponent },
    { path: 'register', component: RegisterComponent },
 
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];
 
export const routing = RouterModule.forRoot(appRoutes);