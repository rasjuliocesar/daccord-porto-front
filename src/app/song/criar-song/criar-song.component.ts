import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Song } from 'src/app/models/song.model';
import { SongService } from 'src/app/services/song.service';
import { Genre } from 'src/app/models/genre.model';
import { GenreService } from 'src/app/services/genre.service';

@Component({
  selector: 'app-criar-song',
  templateUrl: './criar-song.component.html',
  styleUrls: ['./criar-song.component.css']
})
export class CriarSongComponent implements OnInit {

  song: Song = {
    artist: '',
    artist_id: '',
    bpm:0,
    genre:0,
    link_audio:'',
    title:'',
    chord_sheet: '',
    source_url: '',
    version: '',
    difficulty: null,
  }

  genres: Genre[]

  constructor(private songService: SongService, private router: Router, private genreService: GenreService) { }

  ngOnInit(): void {
    this.genreService.ler().subscribe(genre => {
      this.genres = genre
    })
  }

  criar(): void {
    this.songService.criar(this.song).subscribe(() => {
      this.songService.mensagem("Música criada!")
      this.router.navigate(['/song'])
    })
  }

  cancelar(): void {
    this.router.navigate(['/song'])
  }

}
