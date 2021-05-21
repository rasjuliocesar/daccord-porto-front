import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-ler-user',
  templateUrl: './ler-user.component.html',
  styleUrls: ['./ler-user.component.css']
})
export class LerUserComponent implements OnInit {

  user: User[]
  displayedColumns = ['nome', 'email', 'senha', 'ativo', 'administrador', 'acoes'];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.ler().subscribe(user => {
      this.user = user
    })
  }

}
