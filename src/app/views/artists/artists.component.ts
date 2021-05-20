import { Component, OnInit } from '@angular/core';

import { Artists } from '../../models/artists.model';
import { ArtistsService } from '../../services/artists.service';

@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.css']
})
export class ArtistsComponent implements OnInit {
  artists: Artists[];

  constructor(
    private artistsService: ArtistsService
  ) {}

  ngOnInit() {
    this.getArtists();
  }

  getArtists(): void {
    this.artistsService
    .getArtists()
    .subscribe((artist) => (this.artists = artist));
  }

}
