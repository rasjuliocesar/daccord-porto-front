import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Artists } from 'src/app/models/artists.model';
import { ArtistsService } from 'src/app/services/artists.service';

@Component({
  selector: 'app-deletar-artists',
  templateUrl: './deletar-artists.component.html',
  styleUrls: ['./deletar-artists.component.css']
})
export class DeletarArtistsComponent implements OnInit {

  artists: Artists;

  constructor(private artistsService: ArtistsService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.artistsService.lerPorId(id).subscribe(artists => {
      this.artists = artists
    })
  }

  deletar(): void {
    this.artistsService.deletar(this.artists._id).subscribe(() => {
      this.artistsService.mensagem('Artista Deletado com sucesso!')
      this.router.navigate(['/artists'])
    })
  }

  cancelar(): void {
    this.router.navigate(['/categorias'])
  }
}
