import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {

  title = 'platzi-store';

  items = ['Victor', 'Aurora', 'Karen', 'Magnesio'];

  power = 10;

  addItem() {
    this.items.push('Nuevo item');
  }

  deleteItem(index: number) {
    this.items.splice(index, 1);
  }

  ngOnInit() {

  }

}
