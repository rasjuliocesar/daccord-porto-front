import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Genre } from 'src/app/models/genre.model';
import { GenreService } from 'src/app/services/genre.service';

@Component({
  selector: 'app-deletar-genre',
  templateUrl: './deletar-genre.component.html',
  styleUrls: ['./deletar-genre.component.css']
})
export class DeletarGenreComponent implements OnInit {

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

  deletar(): void {
    this.genreService.deletar(this.genre._id).subscribe(() => {
      this.genreService.mensagem('Gênero Deletado com sucesso!')
      this.router.navigate(['/genre'])
    })
  }

  cancelar(): void {
    this.router.navigate(['/genre'])
  }
}
