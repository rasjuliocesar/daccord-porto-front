import { Component, OnInit, AfterViewInit,ViewChild } from '@angular/core';
import { Genre } from 'src/app/models/genre.model';
import { GenreService } from 'src/app/services/genre.service';
import {MatTableDataSource} from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';


@Component({
  selector: 'app-ler-genre',
  templateUrl: './ler-genre.component.html',
  styleUrls: ['./ler-genre.component.css']
})
export class LerGenreComponent implements OnInit, AfterViewInit {

  genre: Genre[]
  displayedColumns = ['nome', 'id3', 'acoes'];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  //ver se é nescessario
  dataSource: LerGenreComponent;

  constructor(private genreService: GenreService) { }

  ngOnInit(): void {
    this.genreService.ler().subscribe(genre => {
      this.genre = genre
    })
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

}
