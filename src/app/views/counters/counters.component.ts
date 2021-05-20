import { Component, OnInit } from '@angular/core';

import { Counters } from '../../models/counters.model';
import { CountersService } from '../../services/counters.service';

@Component({
  selector: 'app-counters',
  templateUrl: './counters.component.html',
  styleUrls: ['./counters.component.css']
})
export class CountersComponent implements OnInit {
  counters: Counters[]

  constructor(
    private countersService: CountersService
  ) {}

  ngOnInit() {
    this.getCounters();
  }

  getCounters(): void {
    this.countersService
    .getCounters()
    .subscribe((counter) => (this.counters = counter));
  }
}
