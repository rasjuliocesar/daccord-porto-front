import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Artists } from '../../models/artists.model';
import { ArtistsService } from '../../services/artists.service';

@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.css']
})
export class ArtistsComponent implements OnInit {
  artists: Artists[];

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  criarArtists(): void {
    this.router.navigate(['/artists/add'])
  }

}
