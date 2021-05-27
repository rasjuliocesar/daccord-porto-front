import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Song } from '../../models/song.model';
import { SongService } from '../../services/song.service';

@Component({
  selector: 'app-song',
  templateUrl: './song.component.html',
  styleUrls: ['./song.component.css']
})
export class SongComponent implements OnInit {
  songs: Song[];

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  criarSong(): void {
    this.router.navigate(['/song/add'])
  }

}
