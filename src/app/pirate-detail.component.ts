import {Component, Input, OnInit} from '@angular/core';
import {Pirate} from './pirate';
import {PirateService} from './pirate.service';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {Location} from '@angular/common';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-pirate-detail',
  templateUrl: './pirate-detail.component.html'
})


export class PirateDetailComponent implements OnInit {
  @Input() pirate: Pirate; // 我们要绑定到的目标属性必须是一个输入属性，否则Angular会拒绝绑定，并抛出一个错误。

  constructor(private pirateService: PirateService,
              private route: ActivatedRoute,
              private location: Location) {
  }

  ngOnInit(): void {
    this.route.paramMap
      .switchMap((params: ParamMap) => {
        return this.pirateService.getPirate(+params.get('id')); // 英雄的id是数字，而路由参数的值总是字符串。 所以我们需要通过 JavaScript 的 (+) 操作符把路由参数的值转成数字。
      })
      .subscribe(pirate => this.pirate = pirate);
  }

  goBack(): void {
    this.location.back();
  }
}
