import { CommonModule } from '@angular/common';
import { Component, Input,Output,EventEmitter } from '@angular/core';
type BtnVariants = "primary" | "secundary";
@Component({
  selector: 'btn-primary',
  imports: [CommonModule],
  templateUrl: './botao.component.html',
  styleUrl: './botao.component.scss'
})
export class BotaoComponent {
  @Input("btn-text") btnText:string="";
  @Input() disabled:boolean = false;
  @Input() loading:boolean = false;
  @Input() variant:BtnVariants = "primary";
  @Output("submit") onSubmit = new EventEmitter();

  submit(){
    this.onSubmit.emit();
  }
}
