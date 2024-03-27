import { Component, DoCheck, OnInit } from '@angular/core';
import { Item } from './interfaces/iItem';
import { ListaDeCompraService } from './service/lista-de-compra.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, DoCheck{
  title = 'app-lista-de-compras';
  listaCompras! : Array<Item>;
  itemEditar!: Item;

  constructor(private service: ListaDeCompraService) { }

  ngOnInit(): void {
    this.listaCompras = this.service.getListaDeCompra();
  }

  ngDoCheck(): void {
    this.service.atualizarLocalStorage();
  }

  editarItem(item: Item){
    this.itemEditar = item;
  }

  deletarItem(id: number){
    const idx = this.listaCompras.findIndex(item => item.id === id);
    this.listaCompras.splice(idx, 1);
  }

  limparLista(){
    this.listaCompras = [];
  }
}
