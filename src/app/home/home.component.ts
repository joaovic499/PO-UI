import { Component } from '@angular/core';
import { PoMenuItem } from '@po-ui/ng-components';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  readonly menus: Array<PoMenuItem> = [
      { label: 'Home', action: this.onClick.bind(this) }
    ];

    private onClick() {
      alert('Clicked in menu item')
    }

}
