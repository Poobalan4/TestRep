import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from './home.component';
import { AddComponent } from './add/add-app.component';
import { DetailComponent } from './details/detail.component';
import { DashboardComponent } from './details/dashboard.component';
import { BotComponent } from './add/bot.component';

const app_routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'add', component: AddComponent },
    { path: 'detail', component: DetailComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'bot', component: BotComponent }
];

export const routing = RouterModule.forRoot(app_routes);