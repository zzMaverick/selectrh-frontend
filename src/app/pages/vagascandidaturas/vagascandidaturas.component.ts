import { Component } from '@angular/core';
import { HeaderComponent } from "../../shared/componentes/header/header.component";
import { VagaComponent } from '../../shared/componentes/vaga/vaga.component';

@Component({
  selector: 'app-vagascandidaturas',
  imports: [HeaderComponent,VagaComponent],
  templateUrl: './vagascandidaturas.component.html',
  styleUrl: './vagascandidaturas.component.scss'
})
export class VagascandidaturasComponent {

}
