import { Component, Output, EventEmitter, Input } from '@angular/core';
import { Item } from '../../modelos/Item.class';

@Component({
    selector: "form-component",
    templateUrl: "form.component.html"
})

export class formComponent{
    //Inputs Events
    @Input() itemPedido:Item = {
        id: -1,
        cantidad: 0,
        descripcion: ""
    }

    //Outputs Events
    @Output() onEnviarPedido:EventEmitter<Item> = new EventEmitter<Item>()

    //Functions
    guardarPedido(){
        this.onEnviarPedido.emit(this.itemPedido)
        this.itemPedido = {
            id: -1,
            cantidad: 0,
            descripcion: ""
        }
    }
    desmarcarPedido(){
        this.itemPedido = new Item(-1,0, "")
    }
    modificarPedido(pedido:Item){
        this.itemPedido = {
            id: pedido.id,
            cantidad: pedido.cantidad,
            descripcion: pedido.descripcion
        }
    }
}