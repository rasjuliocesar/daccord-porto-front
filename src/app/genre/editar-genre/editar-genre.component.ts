import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Genre } from 'src/app/models/genre.model';
import { GenreService } from 'src/app/services/genre.service';

@Component({
  selector: 'app-editar-genre',
  templateUrl: './editar-genre.component.html',
  styleUrls: ['./editar-genre.component.css']
})
export class EditarGenreComponent implements OnInit {

  genre: Genre = {
    id3: 0,
    name: ''
  }

  constructor(private genreService: GenreService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('_id')
    this.genreService.lerPorId(id).subscribe(genre => {
      this.genre = genre
    })
  }

  editar(): void {
    this.genreService.editar(this.genre).subscribe(() => {
      this.genreService.mensagem('Gênero Atualizado com sucesso!')
      this.router.navigate(['/genre'])
    })
  }
  cancelar(): void {
    this.router.navigate(['/genre'])
  }

}
