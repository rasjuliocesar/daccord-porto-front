import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-editar-user',
  templateUrl: './editar-user.component.html',
  styleUrls: ['./editar-user.component.css']
})
export class EditarUserComponent implements OnInit {

  user: User = {
    active: null,
    email: '',
    name: '',
    password: '',
    admin: null
  }

  constructor(private userService: UserService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('_id')
    this.userService.lerPorId(id).subscribe(user => {
      this.user = user
    })
  }

  editar(): void {
    this.userService.editar(this.user).subscribe(() => {
      this.userService.mensagem('Usuário Atualizado com sucesso!')
      this.router.navigate(['/user'])
    })
  }
  cancelar(): void {
    this.router.navigate(['/user'])
  }

}
