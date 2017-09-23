import { Component, Input } from '@angular/core'
import { Pirate } from './pirate';


@Component({
  selector: 'pirate-detail',
  templateUrl: './pirate-detail.component.html'
})


export class PirateDetailComponent {
  @Input() pirate: Pirate; // 我们要绑定到的目标属性必须是一个输入属性，否则Angular会拒绝绑定，并抛出一个错误。
}
