import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { BotaoComponent } from '../botao/botao.component';

@Component({
  selector: 'app-vaga',
  imports: [BotaoComponent],
  templateUrl: './vaga.component.html',
  styleUrl: './vaga.component.scss'
})
export class VagaComponent {

}
