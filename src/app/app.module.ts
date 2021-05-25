import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import {MatFormFieldModule} from '@angular/material/form-field';
import {HttpClientModule} from '@angular/common/http';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {FormsModule} from '@angular/forms';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatTableModule} from '@angular/material/table';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { HeaderComponent } from './template/header/header.component';
import { FooterComponent } from './template/footer/footer.component';
import { NavComponent } from './template/nav/nav.component';
import { LoginComponent } from './views/login/login.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { UserComponent } from './views/user/user.component';
import { ArtistsComponent } from './views/artists/artists.component';
import { CountersComponent } from './views/counters/counters.component';
import { CriarArtistsComponent } from './artists/criar-artists/criar-artists.component';
import { DeletarArtistsComponent } from './artists/deletar-artists/deletar-artists.component';
import { EditarArtistsComponent } from './artists/editar-artists/editar-artists.component';
import { LerArtistsComponent } from './artists/ler-artists/ler-artists.component';
import { CriarUserComponent } from './user/criar-user/criar-user.component';
import { LerUserComponent } from './user/ler-user/ler-user.component';
import { DeletarUserComponent } from './user/deletar-user/deletar-user.component';
import { EditarUserComponent } from './user/editar-user/editar-user.component';
import { GenreComponent } from './views/genre/genre.component';
import { CriarGenreComponent } from './genre/criar-genre/criar-genre.component';
import { EditarGenreComponent } from './genre/editar-genre/editar-genre.component'
import { DeletarGenreComponent } from './genre/deletar-genre/deletar-genre.component';
import { LerGenreComponent } from './genre/ler-genre/ler-genre.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    LoginComponent,
    DashboardComponent,
    UserComponent,
    ArtistsComponent,
    CountersComponent,
    GenreComponent,
    CriarArtistsComponent,
    DeletarArtistsComponent,
    EditarArtistsComponent,
    LerArtistsComponent,
    CriarUserComponent,
    LerUserComponent,
    DeletarUserComponent,
    EditarUserComponent,
    CriarGenreComponent,
    DeletarGenreComponent,
    EditarGenreComponent,
    LerGenreComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    AppRoutingModule,
    MatButtonModule,
    MatSnackBarModule,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatSelectModule,
    MatGridListModule,
    MatTableModule,
    MatDatepickerModule,
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
