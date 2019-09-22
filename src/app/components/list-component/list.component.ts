import { Component } from '@angular/core';
import { Item } from '../../modelos/Item.class';

@Component({
    selector: "list-component",
    templateUrl: "list.component.html"
})

export class listComponent{
    listaItems: Item[] = []

    //Inputs Events

    //Outputs Events

    //Functions
    agregarPedido(pedido:Item){
        if(pedido.id < 0){
            pedido.id = this.listaItems.length
            this.listaItems.push(new Item(pedido.id, pedido.cantidad, pedido.descripcion))
        }else{
            this.listaItems[pedido.id] = new Item(pedido.id, pedido.cantidad, pedido.descripcion)
        }
    }
    eliminarPedido(pedido:Item){
        let index:number = this.listaItems.indexOf(pedido)
        this.listaItems.splice(index,1)
    }
}