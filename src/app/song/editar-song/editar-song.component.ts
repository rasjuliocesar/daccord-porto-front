import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Song } from 'src/app/models/song.model';
import { SongService } from 'src/app/services/song.service';

@Component({
  selector: 'app-editar-song',
  templateUrl: './editar-song.component.html',
  styleUrls: ['./editar-song.component.css']
})
export class EditarSongComponent implements OnInit {

  song: Song = {
    artist: '',
    artist_id: '',
    bpm:0,
    genre:0,
    link_audio:'',
    title:'',
    time_signature: [],
    chord_sequence: [],
    chord_sheet: '',
    chords: [],
    onset_map: null,
    source_url: '',
    version: '',
    difficulty: null,
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

  editar(): void {
    this.songService.editar(this.song).subscribe(() => {
      this.songService.mensagem('Música Atualizada com sucesso!')
      this.router.navigate(['/song'])
    })
  }
  cancelar(): void {
    this.router.navigate(['/song'])
  }

}
