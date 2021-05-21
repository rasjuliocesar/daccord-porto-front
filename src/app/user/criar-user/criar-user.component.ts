import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-criar-user',
  templateUrl: './criar-user.component.html',
  styleUrls: ['./criar-user.component.css']
})
export class CriarUserComponent implements OnInit {

user: User = {
  active: false,
  email: '',
  name: '',
  password: '',
  userLogin: 1,
}

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  criar(): void {
    this.userService.criar(this.user).subscribe(() => {
      this.userService.mensagem("Usuário criado!")
      this.router.navigate(['/user'])
    })
  }

  cancelar(): void {
    this.router.navigate(['/user'])
  }

}
