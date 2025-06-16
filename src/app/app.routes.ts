import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { VagascandidaturasComponent } from './pages/vagascandidaturas/vagascandidaturas.component';
import { CandidatarvagaComponent } from './pages/candidatarvaga/candidatarvaga.component';
import { RegisterComponent } from './pages/register/register.component';


export const routes: Routes = [
    {path:"", component: HomeComponent},
    {path:"login", component:LoginComponent},
    {path:"vagascandidaturas",component:VagascandidaturasComponent},
    {path:"candidatarvaga",component:CandidatarvagaComponent},
    {path:"register",component:RegisterComponent}
];
