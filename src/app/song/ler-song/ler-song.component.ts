import { Component, OnInit } from '@angular/core';
import { Song } from 'src/app/models/song.model';
import { SongService } from 'src/app/services/song.service';

@Component({
  selector: 'app-ler-song',
  templateUrl: './ler-song.component.html',
  styleUrls: ['./ler-song.component.css']
})
export class LerSongComponent implements OnInit {

  song: Song[]
  displayedColumns = ['titulo', 'artista', 'artista_id', 'bpm', 'genre', 'link_audio', 'acoes'];

  constructor(private songService: SongService) { }

  ngOnInit(): void {
    this.songService.ler().subscribe(song => {
      this.song = song
    })
  }

}
