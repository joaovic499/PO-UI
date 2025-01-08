import { LoginComponent } from './../login/login.component';
import { Component, ViewChild } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PoModalAction, PoModalComponent  } from '@po-ui/ng-components';
import { LoginServiceService } from '../service/login-service.service';




@Component({
  selector: 'app-veiculos',
  templateUrl: './veiculos.component.html',
  styleUrl: './veiculos.component.css'
})
export class VeiculosComponent {

  reactiveForm!: UntypedFormGroup;

  constructor(private fb: UntypedFormBuilder, private loginService: LoginServiceService) {
    this.createReactiveForm();
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

  criarChassi() {

    if (this.reactiveForm.invalid) {
      console.error('Formulário inválido');
    } else {
      console.log(this.reactiveForm)
    }

    debugger
    const { chassi, modelo, marca, cor, estado, armazem, procedencia } = this.reactiveForm.value;
    this.loginService.criarVeiculo(chassi, modelo, marca, cor, estado, armazem, procedencia);
    }
}

