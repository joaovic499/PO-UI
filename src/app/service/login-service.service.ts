import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
import { CookieService } from 'ngx-cookie-service';
import { Observable, tap } from 'rxjs';

export enum TipoUsuario {
  'USER', 'ADMIN'
}

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService implements OnInit {

  constructor(private http: HttpClient, private cookieService: CookieService, private router: Router) { }

  public role: | undefined;
  private tipoUsuario: TipoUsuario | undefined;


  ngOnInit(): void {
    const role = this.cookieService.get('role')
    if (role === 'ADMIN') {
      this.tipoUsuario = TipoUsuario.ADMIN
    } else {
      this.tipoUsuario = TipoUsuario.USER
    }
  }

  login(user: string, password: string): Observable<boolean>{
    return this.http.post<any>('http://localhost:3000/auth/login', {user, password}, {observe: 'response'})
    .pipe(tap(
      (res: any) => {
        debugger
        if(res.body && res.body.token && res.body.user) {
          const token = res.body.token;
          this.cookieService.set('token', token);
          const role = this.getUserRole(token);
          this.cookieService.set('role', role)

          if(role === 'ADMIN') {
            this.tipoUsuario = TipoUsuario.ADMIN;
          } else {
            this.tipoUsuario = TipoUsuario.USER
          }
          console.log(`Usuario ${res.body.user.user} autenticado por ${token}`);
        } else {
          console.error('Resposta do Login Mal informada', res)
        }
      }
    ))
  }

  criarVeiculo(chassi: string, modelo: string, marca: string, cor: string, estado: string, armazem: string, procedencia: string){
    debugger
    return this.http.post<any>('http://localhost:3000/auth/create/chassi', {chassi, modelo, marca, cor, estado, armazem, procedencia})
  }

  getRole() {
    return this.cookieService.get('role');
  }

  getToken() {
    return this.cookieService.get('token');
  }

  getUserRole(token: string): string {
    const decoded: any = jwtDecode(token);
    return decoded.role
  }

  isAdmin(): boolean {
    return this.role === TipoUsuario.ADMIN;
  }

  isUsuario(): boolean {
    return this.role === TipoUsuario.USER;
  }

  tokenValid(): boolean {
    const token = this.cookieService.get('token');
    if(!token){
      return false;
    } else {
      return true;
    }
  }
}
