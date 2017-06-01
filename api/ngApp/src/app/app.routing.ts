import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

import { RegisterComponent } from './accounts/register.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from "./products/products.component";
import { ProductDetailComponent } from "./products/detail.component";
import { NotFoundCompontent } from "./_utils/components/app.notfound";
import { PersonComponent } from "./personalities/component.person";

const appRoutes: Routes = [
    // { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: '', component: HomeComponent },
    { path: 'register', component: RegisterComponent },
    {
        path: 'products', component: ProductsComponent,
        children: [
            { path: 'core/:id', component: ProductDetailComponent, pathMatch: 'full' },
            // { path: '', redirectTo: 'overview', pathMatch: 'full' },
        ]
    },
    {
        path: 'person/rjsdtr', component: PersonComponent,
    },

    // otherwise redirect to home
    // { path: '**', redirectTo: '' }
    { path: '**', component: NotFoundCompontent }
];

export const routing = RouterModule.forRoot(appRoutes);