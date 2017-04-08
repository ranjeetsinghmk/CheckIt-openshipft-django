import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

import { RegisterComponent } from './accounts/register.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from "./products/products.component";
import { NotFoundCompontent } from "./_utils/components/app.notfound";

const appRoutes: Routes = [
    // { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: '', component: HomeComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'products', component: ProductsComponent },

    // otherwise redirect to home
    // { path: '**', redirectTo: '' }
    { path: '**', component: NotFoundCompontent }
];

export const routing = RouterModule.forRoot(appRoutes);