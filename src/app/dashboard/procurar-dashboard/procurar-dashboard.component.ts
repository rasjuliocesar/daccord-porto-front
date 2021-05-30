import {Component} from '@angular/core';

@Component({
  selector: 'app-procurar-dashboard',
  templateUrl: './procurar-dashboard.component.html',
  styleUrls: ['./procurar-dashboard.component.css'],
})
export class ProcurarDashboardComponent {
  value = '';
  artista = false;
  genero = false;
  musica = false;
}