import { Component } from '@angular/core';
import { PoMenuItem } from '@po-ui/ng-components';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  readonly menus: Array<PoMenuItem> = [
      { label: 'Cadastro de Veículos', action: this.onClick.bind(this), icon: 'po-icon-clipboard', shortLabel: 'Cadastro' },
      { label: 'Ajuda (Help)',         action: this.onClick.bind(this), icon: 'po-icon-help', shortLabel: 'Ajuda' },
      { label: 'Sair',                 action: this.onClick.bind(this), icon: 'po-icon-exit', shortLabel: 'Sair' },
    ];

    private onClick() {
      alert('Clicked in menu item')
    }

}
