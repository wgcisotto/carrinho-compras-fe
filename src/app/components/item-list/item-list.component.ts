import { Component, OnInit } from '@angular/core';;
import { Item } from '../../models/item';
import { ItemService } from '../../services/item.service';
import { ɵINTERNAL_BROWSER_DYNAMIC_PLATFORM_PROVIDERS } from '@angular/platform-browser-dynamic';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {

  items: Item[];

  itemSelected: Item = null;

  constructor(private itemService: ItemService) { }

  ngOnInit() {
    this.getItems();
  }

  getItems(): void {
    // this.items = ITENS
    this.itemService.getItems()
    .subscribe(items => this.items = items);
  }

  add(name :string, price: number){
    name = name.trim();
    let id: string;

    if (!name) { return; }


    if(this.itemSelected == null){
      this.itemService.addItem({id,  name, price } as Item)
        .subscribe(item => {
          this.items.push(item);
        });
    }else{
      this.itemSelected.name = name;
      this.itemSelected.price = price;
      this.itemService.updateItem(this.itemSelected)
        .subscribe();
      this.itemSelected = null;
    }
  }

  delete(item: Item): void {
    this.items = this.items.filter(i=> i !== item);
    this.itemService.deleteItem(item).subscribe();
  }

  edit(item: Item): void {
    this.itemSelected = item;
  }

  cancel(): void{
    this.itemSelected = null;
  }

}
