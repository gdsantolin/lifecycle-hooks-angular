import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Item } from 'src/app/interfaces/iItem';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit, OnChanges, OnDestroy {

  @Input() item!: Item;
  @Output() emitEditar = new EventEmitter();
  @Output() emitDeletar = new EventEmitter();

  faPen = faPen;
  faTrash = faTrash

  constructor() { }

  ngOnInit(): void { }

  ngOnChanges(): void {

  }

  editarItem(){
    this.emitEditar.emit(this.item);
  }

  deletarItem(){
    this.emitDeletar.emit(this.item);
  }

  checkItem(){
    this.item.comprado = !this.item.comprado;
  }

  ngOnDestroy(){
    console.log('Item destruído');
  }

}
