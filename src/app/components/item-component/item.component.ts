import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Item } from '../../modelos/Item.class';

@Component({
    selector: "item-component",
    templateUrl: "item.component.html"
})

export class itemComponent{

    //Inputs Events
    @Input() itemPedido:Item

    //Outputs Events
    @Output() onModificarPedidoForm:EventEmitter<Item> = new EventEmitter<Item>()
    @Output() onEliminarPedido:EventEmitter<Item> = new EventEmitter<Item>()

    //Functions
    modificarPedido(){
        this.onModificarPedidoForm.emit(this.itemPedido)
    }
    eliminarPedido(){
        this.onEliminarPedido.emit(this.itemPedido)
    }
}