import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Artists } from 'src/app/models/artists.model';
import { ArtistsService } from 'src/app/services/artists.service';

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

  constructor(private artistsService: ArtistsService, private router: Router) { }

  ngOnInit(): void {
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
