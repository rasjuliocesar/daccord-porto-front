import { Component, OnInit } from '@angular/core';
import { Genre } from 'src/app/models/genre.model';
import { GenreService } from 'src/app/services/genre.service';

@Component({
  selector: 'app-ler-genre',
  templateUrl: './ler-genre.component.html',
  styleUrls: ['./ler-genre.component.css']
})
export class LerGenreComponent implements OnInit {

  genre: Genre[]
  displayedColumns = ['id3', 'nome', 'acoes'];

  constructor(private genreService: GenreService) { }

  ngOnInit(): void {
    this.genreService.ler().subscribe(genre => {
      this.genre = genre
    })
  }

}
