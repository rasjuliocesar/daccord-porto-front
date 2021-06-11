import { Component, OnInit } from '@angular/core';

import { SongService } from 'src/app/services/song.service';
import { ArtistsService } from 'src/app/services/artists.service';
import { GenreService } from 'src/app/services/genre.service';
import { Chart } from 'src/app/models/chart.model';

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
  genres: []
  artists: []

  chartChords: Chart = {
    title: 'Músicas por Acordess',
    type: 'ColumnChart',
    data: [],
    columnNames: ['', ''],
    options: {
      is3D: true,
      width: 600,
      height: 400,
    }
  }

  chartDifficulty: Chart = {
    title: 'Músicas por Dificuldades',
    type: 'BarChart',
    data: [],
    columnNames: ['', ''],
    options: {
      is3D: true,
      width: 600,
      height: 400,
    }
  }

  chartDifficulty2: Chart = {
    title: 'Músicas por Dificuldades',
    type: 'PieChart',
    data: [],
    columnNames: ['', ''],
    options: {
      is3D: true,
      width: 600,
      height: 400,
    }
  }

  chartGenres: Chart = {
    title: 'Músicas por Gêneros',
    type: 'PieChart',
    data: [],
    columnNames: ['', ''],
    options: {
      is3D: true,
      width: 600,
      height: 400,
    }
  }

  chartArtists: Chart = {
    title: 'Músicas por Artistas',
    type: 'PieChart',
    data: [],
    columnNames: ['', ''],
    options: {
      is3D: true,
      width: 600,
      height: 400,
    }
  }

  constructor(private artistsService: ArtistsService, private songService: SongService, private genreService: GenreService) { }

  ngOnInit(): void {
    this.artistsService.contarArtistas().subscribe(artist => {
      this.artist = artist
    })

    this.genreService.contarGeneros().subscribe(genre => {
      this.genre = genre
    })

    this.songService.contarMusicas().subscribe(song => {
      this.song = song
    })

    this.songService.chartDificuldade().subscribe(difficulty => {
      this.difficulty = difficulty
      difficulty.map(difficulty => {
        this.chartDifficulty.data.push(Object.entries(difficulty)[0])
      })
      difficulty.map(difficulty => {
        this.chartDifficulty2.data.push(Object.entries(difficulty)[0])
      })
    })

    this.songService.chartAcordes().subscribe(chords => {
      this.chords = chords
      chords.map(chord => {
        this.chartChords.data.push(Object.entries(chord)[0])
      })
    })

    this.songService.chartGeneros().subscribe(genres => {
      this.genres = genres
      genres.map(genres => {
        this.chartGenres.data.push(Object.entries(genres)[0])
      })
    })

    this.songService.chartArtistas().subscribe(artists => {
      this.artists = artists
      artists.map(artists => {
        this.chartArtists.data.push(Object.entries(artists)[0])
      })
    })

  }
}
