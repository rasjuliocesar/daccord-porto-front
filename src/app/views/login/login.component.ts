import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AutenticacaoService } from '../../services/autenticacao.service';
import { Autenticacao } from '../../models/autenticacao.model';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  autenticacao: Autenticacao = {
    email: '',
    password: '',
  };

  constructor(
    private router: Router,
    private autenticacaoService: AutenticacaoService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {}

  login() {
    this.autenticacaoService.autenticar(this.autenticacao).subscribe(
      () => {
        this.router.navigate(['/dashboard']);
      },
      () => {
        this.snackBar.open('E-mail ou Senha inválido!', 'X', {
          horizontalPosition: 'center',
          verticalPosition: 'top',
          duration: 3000,
        });
      }
    );
  }
}
