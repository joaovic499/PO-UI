import { Component, OnInit, ViewChild } from '@angular/core';

import { PoBreadcrumb, PoModalComponent } from '@po-ui/ng-components';

import {PoPageDynamicTableActions, PoPageDynamicTableCustomAction, PoPageDynamicTableOptions} from '@po-ui/ng-templates';
import { LoginServiceService } from '../../service/login-service.service';
import { CookieService } from 'ngx-cookie-service';
import { jwtDecode } from 'jwt-decode';

export interface Veiculos {
  chassiInt:    string,
  chassi:       string,
  modelo:       string,
  marca:        string,
  estado:       string,
  armazem:      string,
  procedencia:  string
}
@Component({
  selector: 'app-veiculos-views',
  templateUrl: './veiculos-views.component.html',
  styleUrl: './veiculos-views.component.css'
})
export class VeiculosViewsComponent implements OnInit{

  actionsRight = false;
  detailedUser: any;
  dependents: any;
  quickSearchWidth: number = 3;
  fixedFilter = false;

  readonly actions: PoPageDynamicTableActions = {
    new: '/novo/veiculo',
    remove: true,
    removeAll: true
  };

  readonly breadcrumb: PoBreadcrumb = {
    items: [{ label: 'Home', link: '/home' }, { label: 'Veiculos' }]
  };

  items: Array<any> = [
    { label: "Chassi Int",  property: 'chassiInt',   filter: true, visible: true, key: true },
    { label: 'Chassi',      property: 'chassi',      filter: true, gridColumns: 6 },
    { label: 'Modelo',      property: 'modelo',      filter: true, gridColumns: 6 },
    { label: 'Marca',       property: 'marca',       filter: true, gridColumns: 6 },
    { label: 'Cor',         property: 'cor',         filter: true, gridColumns: 6 },
    { label: 'Estado',      property: 'estado',      filter: true, gridColumns: 6 },
    { label: 'Armazem',     property: 'armazem',     filter: true, gridColumns: 6 },
    { label: 'Procedencia', property: 'procedencia', filter: true, gridColumns: 6 },
  ];

   idUser =  () => {
    const token = this.cookie.get('token')
        if (!token) {
          return null;
        }
        const decoded: any = jwtDecode(token)
        return decoded.id
      }
  serviceApi!: string;

  constructor(private authLogin: LoginServiceService, private cookie: CookieService)

  {
  }

  ngOnInit(): void {
    const idUser = this.authLogin.idDecodificado();
    if (idUser) {
      this.serviceApi = `http://localhost:3000/auth/get/veiculos/${idUser}`;
    } else {
      console.log("Id do usuario nao encontrado");
    }

  }

  onLoad(): PoPageDynamicTableOptions {
    return {
      fields: [
        { property: 'chassiInt',    label: 'Chassi INT',  key:     true,  visible: true,  filter: true },
        { property: 'chassi',       label: 'Chassi',      filter:  true,  gridColumns: 6 },
        { property: 'modelo',       label: 'Modelo',      filter:  true,  gridColumns: 6 },
        { property: 'marca',        label: 'Modelo',      filter:  true,  gridColumns: 6 },
        { property: 'cor',          label: 'Cor',         gridColumns: 6},
        { property: 'estado',       label: 'Estado',      gridColumns: 6},
        { property: 'armazem',      label: 'Armazem',     gridColumns: 6},
        { property: 'procedencia',  label: 'Procedencia', gridColumns: 6 }
      ]
    };
  }

  pageCustomActions: Array<PoPageDynamicTableCustomAction> = [
    {
      label: 'Fixed Filter',
      action: this.onClickFixedFilter.bind(this),
      visible: this.isVisibleFixedFilter.bind(this),
      icon: 'ph ph-lock'
    },
    {
      label: 'Not Fixed Filter',
      action: this.onClickFixedFilter.bind(this),
      visible: this.isVisibleNotFixedFilter.bind(this),
      icon: 'ph ph-lock-open'
    },
    { label: 'Print', action: this.printPage.bind(this), icon: 'ph ph-printer' }
  ];

  private onClickFixedFilter() {
    this.fixedFilter = !this.fixedFilter;
    const fieldsDefault = [...this.items];

    if (this.fixedFilter) {
      fieldsDefault
        .filter(items => items.property === 'search')
        .map(items => {
          items.filter = true;
          items.fixed = true;
        });

      this.items = fieldsDefault;
    } else {
      fieldsDefault
        .filter(items => items.property === 'search')
        .map(items => {
          items.fixed = false;
        });

      this.items = fieldsDefault;
    }
  }

  private isVisibleFixedFilter() {
    return !this.fixedFilter;
  }

  private isVisibleNotFixedFilter() {
    return this.fixedFilter;
  }

  printPage() {
    window.print();
  }

}

