import { Component } from '@angular/core';
import { HeaderComponent } from "../../shared/componentes/header/header.component";
import { BotaoComponent } from '../../shared/componentes/botao/botao.component';

@Component({
  selector: 'app-register',
  imports: [HeaderComponent,BotaoComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

}
