import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Song } from 'src/app/models/song.model';
import { SongService } from 'src/app/services/song.service';

@Component({
  selector: 'app-deletar-song',
  templateUrl: './deletar-song.component.html',
  styleUrls: ['./deletar-song.component.css']
})
export class DeletarSongComponent implements OnInit {

  song: Song = {
    artist: '',
    artist_id: '',
    bpm:0,
    genre:0,
    link_audio:'',
    title:''
  }

  constructor(private songService: SongService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('_id')
    this.songService.lerPorId(id).subscribe(song => {
      this.song = song
    })
  }

  deletar(): void {
    this.songService.deletar(this.song._id).subscribe(() => {
      this.songService.mensagem('Música Deletada com sucesso!')
      this.router.navigate(['/song'])
    })
  }

  cancelar(): void {
    this.router.navigate(['/song'])
  }
}
