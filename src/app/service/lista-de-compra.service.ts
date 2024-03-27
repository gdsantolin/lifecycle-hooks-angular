import { Item } from 'src/app/interfaces/iItem';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListaDeCompraService {

  private listaDeCompra: Item[];

  constructor() {
    this.listaDeCompra = JSON.parse(localStorage.getItem('itens') || '[]');
  }

  getListaDeCompra(){
    return this.listaDeCompra;
  }

  criarItem(nome: string){
    const id = this.listaDeCompra.length + 1;
    const data = new Date().toLocaleDateString('pt-BR');
    const item: Item = {
      id: id,
      nome: nome,
      data: data,
      comprado: false
    }
    this.listaDeCompra.push(item);
    //this.atualizarLocalStorage();
  }

  editarItem(item: Item, novoNome : string){
    const novoItem: Item = {
      id: item.id,
      nome: novoNome,
      data: item.data,
      comprado: item.comprado
    }
    const id = item.id;
    this.listaDeCompra.splice(Number(id)-1, 1, novoItem);
    //this.atualizarLocalStorage();
  }

  atualizarLocalStorage(){
    localStorage.setItem('itens', JSON.stringify(this.listaDeCompra));
  }
}
