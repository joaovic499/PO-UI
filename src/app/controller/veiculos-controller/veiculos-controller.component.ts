import { state } from '@angular/animations';
import { Component, OnInit  } from '@angular/core';

import {
  PoDynamicFormField,
  PoDynamicFormFieldChanged,
  PoDynamicFormValidation,
  PoNotificationService,
  ForceBooleanComponentEnum
} from '@po-ui/ng-components';

@Component({
  selector: 'app-veiculos-controller',
  templateUrl: './veiculos-controller.component.html',
  styleUrl: './veiculos-controller.component.css'
})
export class VeiculosControllerComponent implements OnInit {
  validateFields: Array<string> = [];

  items: Array<PoDynamicFormField> = [
    {
      property: 'chassi',
      label: 'Chassi',
      divider: 'PERSONAL DATA',
      required: true,
      minLength: 4,
      maxLength: 50,
      gridColumns: 6,
      gridSmColumns: 12,
      order: 1,
      placeholder: 'Digite o chassi'
    },
    {
      property: 'modelo',
      label: 'Modelo',
      options: [
        { state: 'COLHEITADERA 1175 JOHN DEERE', code: state },
        { state: 'COLHEITADEIRA 1185 JOHN DEERE', code: state },
        { state: 'COLHEITADEIRA 1450 GRAOS JOHN', code: state },
        { state: 'COLHEITADEIRA 1470 GRAOS JOHN ', code: state }
      ],
      fieldLabel: 'state',
      fieldValue: 'code'
    },
    {
      property: 'marca',
      label: 'MARCA',
      options: [
        { state: 'JOHN DEERE', code: state },
        { state: 'Chevrolet', code: state },
        { state: 'Volkswagen', code: state },
      ],
      fieldLabel: 'state',
      fieldValue: 'code'
    },

    {
      property: 'cor',
      label: 'Cor',
      options: [
        { state: 'Preto', code: state },
        { state: 'Vermelho', code: state },
        { state: 'Verde', code: state },
      ],
      fieldLabel: 'state',
      fieldValue: 'code'
    },

    {
      property: 'estado',
      label: 'Estado',
      options: [
        { state: 'Novo', code: state },
        { state: 'Usado', code: state },
        { state: 'Semi-usado', code: state },
      ],
      fieldLabel: 'state',
      fieldValue: 'code'
    },

    {
      property: 'armazem',
      label: 'Armazem',
      options: [
        { state: 'Veiculos Novos (VN)', code: state },
        { state: 'Veiculos Usados (VU)', code: state },
        { state: 'Oficina (51)', code: state },
      ],
      fieldLabel: 'state',
      fieldValue: 'code'
    },

    {
      property: 'procedencia',
      label: 'Procedencia',
      options: [
        { state: 'Nacional', code: state },
        { state: 'Importado', code: state },
      ],
      fieldLabel: 'state',
      fieldValue: 'code'
    },
    {
      property: 'agree',
      gridColumns: 12,
      label: 'Do you agree?',
      type: 'boolean',
      forceBooleanComponentType: ForceBooleanComponentEnum.checkbox
    },
  ];

  constructor(
    public poNotification: PoNotificationService,
  ) {}

  ngOnInit() {
  }

}
