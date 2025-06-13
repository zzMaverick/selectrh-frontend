import { Component } from '@angular/core';
import { HeaderComponent } from '../../shared/componentes/header/header.component';
import { BotaoComponent } from '../../shared/componentes/botao/botao.component';

@Component({
  standalone: true,
  selector: 'app-home',
  imports: [HeaderComponent, BotaoComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
