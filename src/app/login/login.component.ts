import { Component } from '@angular/core';
import { PoPageLogin } from '@po-ui/ng-templates';
import { PoDialogService } from '@po-ui/ng-components';
import { LoginServiceService, TipoUsuario } from '../service/login-service.service';
import { Router } from '@angular/router';
import { debug } from 'console';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  private role: TipoUsuario | undefined;
  constructor(private loginService: LoginServiceService, private router: Router, private poDialog: PoDialogService) {}

  ngOnInit(): void {}

  async onSubmit(formData: PoPageLogin) {
    const user = formData.login;
    const password = formData.password;

    this.loginService.login(user, password).subscribe({

      next: (tudoOk) => {
        console.log(tudoOk)
        const roleStr = this.loginService.getRole();
          if(roleStr === 'ADMIN') {
            this.role = TipoUsuario.ADMIN
          } else {
            this.role = TipoUsuario.USER
        }
        const token = this.loginService.getToken();
        const userRole = this.loginService.getUserRole(token);
        console.log(userRole)
        alert('Login Feito com sucesso!')
        this.router.navigate(['home'])
      },
      error: (erro) => {this.poDialog.alert({title: 'Erro de Login', message: 'Dados Inválidos!'})},
    });
  }

}
