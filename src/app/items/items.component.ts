import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { ItemsService } from '../service/items.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  @Input()
  result$: Observable<any>;

  constructor(private itemsService: ItemsService) {
    console.log('Resolving items!')
    this.result$ = itemsService.resolveItems();
  }

  ngOnInit() {}

}
