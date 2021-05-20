import { Component, OnInit } from '@angular/core';
import { Artists } from 'src/app/models/artists.model';
import { ArtistsService } from 'src/app/services/artists.service';

@Component({
  selector: 'app-ler-artists',
  templateUrl: './ler-artists.component.html',
  styleUrls: ['./ler-artists.component.css']
})
export class LerArtistsComponent implements OnInit {

  artists: Artists[]
  displayedColumns = ['nome', 'genero', 'acoes'];

  constructor(private artistsService: ArtistsService) { }

  ngOnInit(): void {
    this.artistsService.ler().subscribe(artists => {
      this.artists = artists
    })
  }

}
