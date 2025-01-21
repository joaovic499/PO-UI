import { CookieService } from 'ngx-cookie-service';
import { Component } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { PoMenuItem, PoNotificationService  } from '@po-ui/ng-components';
import { LoginServiceService } from '../service/login-service.service';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
@Component({
  selector: 'app-veiculos',
  templateUrl: './veiculos.component.html',
  styleUrl: './veiculos.component.css'
})
export class VeiculosComponent {

  reactiveForm!: UntypedFormGroup;


  constructor(private fb: UntypedFormBuilder, private loginService: LoginServiceService,
              private router: Router, private cookie: CookieService, public poNotification: PoNotificationService,)
             {
                this.createReactiveForm()
              }

  readonly menus: Array<PoMenuItem> = [
        { label: 'Cadastro de Veículos', action: this.onClick.bind(this), icon: 'po-icon-clipboard', shortLabel: 'Cadastro' },
        { label: 'Ajuda (Help)',         action: this.onClick.bind(this), icon: 'po-icon-help', shortLabel: 'Ajuda' },
        { label: 'Sair',                 action: this.onClick.bind(this), icon: 'po-icon-exit', shortLabel: 'Sair' },
      ];

      private onClick() {
        this.router.navigate(['cadastro/chassi'])
      }

  createReactiveForm() {
    this.reactiveForm = this.fb.group({
      chassi: ['', Validators.required],
      modelo: ['', Validators.required],
      marca: ['', Validators.required],
      cor: ['', Validators.required],
      estado: ['', Validators.required],
      armazem: ['', Validators.required],
      procedencia: ['', Validators.required],
    });
  }

  idDecodificado() {
    const token = this.cookie.get('token')
    if (!token) {
      return null;
    }

    const decoded: any = jwtDecode(token)
    return decoded.id

  }

  criarChassi() {

    if (this.reactiveForm.invalid) {
      console.error('Formulário inválido');
    } else {
      console.log(this.reactiveForm)
    }

    const { chassi, modelo, marca, cor, estado, armazem, procedencia } = this.reactiveForm.value;
    const idUser = this.idDecodificado();

    this.loginService.criarVeiculo(chassi, modelo, marca, cor, estado, armazem, procedencia, idUser).subscribe({
      next: () => {
        {this.poNotification.success("Cadastro Feito com sucesso"), this.poNotification.setDefaultDuration(3000)}
      },
      error: () => {
        {this.poNotification.error("Houve um erro no cadastro de veículo")}
      },
    });
    }
}

