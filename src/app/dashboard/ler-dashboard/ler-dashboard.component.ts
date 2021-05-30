import { Component, OnInit } from '@angular/core';


//import { Song } from '../../models/song.model'
//import { SongService } from '../../services/song.service';

import { Song } from 'src/app/models/song.model';
import { SongService } from 'src/app/services/song.service';
import { Artists } from '../../models/artists.model'
import { ArtistsService } from '../../services/artists.service';
import { Genre } from '../../models/genre.model'
import { GenreService } from '../../services/genre.service';

@Component({
  selector: 'app-ler-dashboard',
  templateUrl: './ler-dashboard.component.html',
  styleUrls: ['./ler-dashboard.component.css']
})
export class LerDashboardComponent implements OnInit {

  artist: Artists[]
  genre: Genre[]
  song: Song[]

  constructor(private artistsService: ArtistsService, private songService: SongService, private genreService: GenreService) { }

  ngOnInit(): void {
    this.artistsService.contarArtistas().subscribe(artist => {
      this.artist = artist})
      
    this.genreService.contarGeneros().subscribe(genre => {
      this.genre = genre})

    this.songService.contarMusicas().subscribe(song => {
      this.song = song})
  }
}
