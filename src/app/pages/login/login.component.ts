import { Component } from '@angular/core';
import { HeaderComponent } from "../../shared/componentes/header/header.component";
import { BotaoComponent } from '../../shared/componentes/botao/botao.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [HeaderComponent, BotaoComponent,ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  formularioLogin!: FormGroup;
  constructor(){
    this.formularioLogin = new FormGroup({
      email: new FormControl('',[Validators.required,Validators.email]),
      senha: new FormControl('',[Validators.required,Validators.minLength(8)])
    })
  }
  onSubmit(){
    console.log(this.formularioLogin.value);
  }
}
