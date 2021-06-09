import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Artists } from 'src/app/models/artists.model';
import { Genre } from 'src/app/models/genre.model';
import { ArtistsService } from 'src/app/services/artists.service';
import { GenreService } from 'src/app/services/genre.service';

@Component({
  selector: 'app-criar-artists',
  templateUrl: './criar-artists.component.html',
  styleUrls: ['./criar-artists.component.css']
})
export class CriarArtistsComponent implements OnInit {

  artists: Artists = {
    artist_name: '',
    artist_genre: ''
  }

  genres: Genre[]

  constructor(private artistsService: ArtistsService, private router: Router, private genreService: GenreService) { }

  ngOnInit(): void {
    this.genreService.ler().subscribe(genre => {
      this.genres = genre
    })
  }

  criar(): void {
    this.artistsService.criar(this.artists).subscribe(() => {
      this.artistsService.mensagem("Artista criado!")
      this.router.navigate(['/artists'])
    })
  }

  cancelar(): void {
    this.router.navigate(['/artists'])
  }
}
