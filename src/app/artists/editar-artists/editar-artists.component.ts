import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Artists } from 'src/app/models/artists.model';
import { ArtistsService } from 'src/app/services/artists.service';

@Component({
  selector: 'app-editar-artists',
  templateUrl: './editar-artists.component.html',
  styleUrls: ['./editar-artists.component.css']
})
export class EditarArtistsComponent implements OnInit {

  artists: Artists;

  constructor(private artistsService: ArtistsService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('_id')
    this.artistsService.lerPorId(id).subscribe(artists => {
      this.artists = artists
    })
  }

  editar(): void {
    this.artistsService.editar(this.artists).subscribe(() => {
      this.artistsService.mensagem('Artista Atualizado com sucesso!')
      this.router.navigate(['/artists'])
    })
  }
  cancelar(): void {
    this.router.navigate(['/artists'])
  }

}
