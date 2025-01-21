import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

import { PoMenuItem } from '@po-ui/ng-components';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private router: Router, private cookie: CookieService) {}

  readonly menus: Array<PoMenuItem> = [
      { label: 'Veículos',             action: this.onClick.bind(this), icon: 'po-icon-clipboard', shortLabel: 'Cadastro' },
      { label: 'Ajuda (Help)',         action: this.onHome.bind(this), icon: 'po-icon-help', shortLabel: 'Ajuda' },
      { label: 'Sair',                 action: this.logout.bind(this), icon: 'po-icon-exit', shortLabel: 'Sair' },
    ];

    private onClick() {
      this.router.navigate(['cadastro/chassi'])
    }

    private onHome() {
      this.router.navigate(['clientes'])
    }

    logout() {
      this.cookie.delete('token');
      this.cookie.delete('role');
      alert('Deslogado com sucesso');
      this.router.navigate(['login']);
    }

    isLogged(): boolean {
      return !!(this.cookie.get('token') && this.cookie.get('role'));
    }
}
