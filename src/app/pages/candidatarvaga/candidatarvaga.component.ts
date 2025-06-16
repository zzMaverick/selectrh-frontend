import { Component } from '@angular/core';
import { HeaderComponent } from "../../shared/componentes/header/header.component";
import { BotaoComponent } from '../../shared/componentes/botao/botao.component';

@Component({
  selector: 'app-candidatarvaga',
  imports: [HeaderComponent,BotaoComponent],
  templateUrl: './candidatarvaga.component.html',
  styleUrl: './candidatarvaga.component.scss'
})
export class CandidatarvagaComponent {

}
