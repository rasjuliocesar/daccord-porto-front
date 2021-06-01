import { Component, OnInit } from '@angular/core';
import { ArtistsService } from 'src/app/services/artists.service';
import { GenreService } from 'src/app/services/genre.service';
import { SongService } from 'src/app/services/song.service';

@Component({
  selector: 'app-procurar-dashboard',
  templateUrl: './procurar-dashboard.component.html',
  styleUrls: ['./procurar-dashboard.component.css'],
})
export class ProcurarDashboardComponent implements OnInit {

  valor: string = '';
  tipo: number = null;

  constructor(private artistsService: ArtistsService, private songService: SongService, private genreService: GenreService) { }

  ngOnInit(): void {
  }

  buscar(): void {
    if(this.tipo == null){
//msg de erro
    }else if (this.tipo == 1) {
this.songService.buscarMusicas(this.tipo, this.valor);
    }else if (this.tipo == 2) {
      this.artistsService.buscarArtistas(this.tipo, this.valor); 
    }else {
      this.genreService.buscarGeneros(this.tipo, this.valor);
    }
  }
}