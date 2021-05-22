import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Genre } from '../../models/genre.model';
import { GenreService } from '../../services/genre.service';

@Component({
  selector: 'app-genre',
  templateUrl: './genre.component.html',
  styleUrls: ['./genre.component.css']
})
export class GenreComponent implements OnInit {
  genre: Genre[];

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  criarGenre(): void {
    this.router.navigate(['/genre/add'])
  }

}
