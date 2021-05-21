import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-deletar-user',
  templateUrl: './deletar-user.component.html',
  styleUrls: ['./deletar-user.component.css']
})
export class DeletarUserComponent implements OnInit {

  user: User;

  constructor(private userService: UserService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('_id')
    this.userService.lerPorId(id).subscribe(user => {
      this.user = user
    })
  }

  deletar(): void {
    this.userService.deletar(this.user._id).subscribe(() => {
      this.userService.mensagem('Usuário Deletado com sucesso!')
      this.router.navigate(['/user'])
    })
  }

  cancelar(): void {
    this.router.navigate(['/user'])
  }

}
