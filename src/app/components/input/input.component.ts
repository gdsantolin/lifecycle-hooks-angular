import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Item } from 'src/app/interfaces/iItem';
import { ListaDeCompraService } from 'src/app/service/lista-de-compra.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit, OnChanges {
  @Input() itemEditar!: Item;
  editando = false;
  textoBtn = 'Salvar item'

  valorItem!: string;

  constructor(private service: ListaDeCompraService) { }

  ngOnInit(): void { }

  adicionarItem(){
    this.service.criarItem(this.valorItem);
    this.valorItem = '';
  }

  editarItem(){
    this.service.editarItem(this.itemEditar, this.valorItem);
    this.valorItem = '';
    this.editando = false;
    this.textoBtn = 'Salvar item';
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(!changes['itemEditar'].firstChange){
      this.editando = true;
      this.textoBtn = 'Editar item';
      this.valorItem = this.itemEditar?.nome;
    }
  }
}
