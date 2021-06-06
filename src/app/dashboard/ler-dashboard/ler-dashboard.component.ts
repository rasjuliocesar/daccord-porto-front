import { Component, OnInit } from '@angular/core';

import { Song } from 'src/app/models/song.model';
import { SongService } from 'src/app/services/song.service';
import { Artists } from 'src/app/models/artists.model'
import { ArtistsService } from 'src/app/services/artists.service';
import { Genre } from 'src/app/models/genre.model'
import { GenreService } from 'src/app/services/genre.service';
import { DistinctSubscriber } from 'rxjs/internal/operators/distinct';

@Component({
  selector: 'app-ler-dashboard',
  templateUrl: './ler-dashboard.component.html',
  styleUrls: ['./ler-dashboard.component.css']
})
export class LerDashboardComponent implements OnInit {

  artist: number
  genre: number
  song: number
  difficulty: []
  chords: []

  constructor(private artistsService: ArtistsService, private songService: SongService, private genreService: GenreService) { }

  ngOnInit(): void {
    this.artistsService.contarArtistas().subscribe(artist => {
      this.artist = artist})
      
    this.genreService.contarGeneros().subscribe(genre => {
      this.genre = genre})

    this.songService.contarMusicas().subscribe(song => {
      this.song = song})
    
    this.songService.chartDificuldade().subscribe(difficulty => {
      this.difficulty = difficulty})

    this.songService.chartAcordes().subscribe(chords => {
      this.chords = chords})
  }
}
