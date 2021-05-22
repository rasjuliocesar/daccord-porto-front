import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Genre } from 'src/app/models/genre.model';
import { GenreService } from 'src/app/services/genre.service';

@Component({
  selector: 'app-criar-genre',
  templateUrl: './criar-genre.component.html',
  styleUrls: ['./criar-genre.component.css']
})
export class CriarGenreComponent implements OnInit {

  genre: Genre = {
    id3: 0,
    name: ''
  }

  constructor(private genreService: GenreService, private router: Router) { }

  ngOnInit(): void {
  }

  criar(): void {
    this.genreService.criar(this.genre).subscribe(() => {
      this.genreService.mensagem("Gênero criado!")
      this.router.navigate(['/genre'])
    })
  }

  cancelar(): void {
    this.router.navigate(['/genre'])
  }

}
