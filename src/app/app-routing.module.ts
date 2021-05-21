import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { LoginComponent } from './views/login/login.component';
import { UserComponent } from './views/user/user.component';
import { ArtistsComponent } from './views/artists/artists.component';
import { CountersComponent } from './views/counters/counters.component';
import { CriarArtistsComponent } from './artists/criar-artists/criar-artists.component';
import { EditarArtistsComponent } from './artists/editar-artists/editar-artists.component';
import { DeletarArtistsComponent } from './artists/deletar-artists/deletar-artists.component';
import { CriarUserComponent } from './user/criar-user/criar-user.component';
import { EditarUserComponent } from './user/editar-user/editar-user.component';
import { DeletarUserComponent } from './user/deletar-user/deletar-user.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'artists',
    component: ArtistsComponent,
  },
  {
    path: "artists/add",
    component: CriarArtistsComponent
  },
  {
    path: "artists/update/:_id",
    component: EditarArtistsComponent
  },
  {
    path: "artists/delete/:_id",
    component: DeletarArtistsComponent
  },
  {
    path: 'user',
    component: UserComponent,
  },
  {
    path: "user/add",
    component: CriarUserComponent
  },
  {
    path: "user/update/:_id",
    component: EditarUserComponent
  },
  {
    path: "user/delete/:_id",
    component: DeletarUserComponent
  },
  {
    path: 'counters',
    component: CountersComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
