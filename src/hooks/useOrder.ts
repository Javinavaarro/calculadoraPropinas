import { useState } from "react"
import type { OrderItem, MenuItem } from "../types"



export default function useOrder(){
    const [order, setOrder] = useState<OrderItem[]>([]) //Para definir el tipo de la variable que iniciamos
    const [tip, setTip] = useState(0)

    const addItem = (item: MenuItem) => {
        
        const itemExists = order.find(orderItem => orderItem.id === item.id) //Para saber si existe
        if(itemExists){
            const updatedOrder = order.map(orderItem => orderItem.id === item.id ? {...orderItem, quantity: orderItem.quantity+1} : orderItem) //Encontramos el que ya existe
            setOrder(updatedOrder) //map devuelve un array nuevo asique no hace falta añadir el ...order
        } else {
            const newItem = {
                ...item, 
                quantity:1
            }
            setOrder([...order, newItem])
        }

    }

    const removeItem = (id: MenuItem['id']) => { //Si cambiaramos el type, automaticamente se cambia el tipo
        setOrder(order.filter(item => item.id !== id)) //Filtra y devuelve todos los que estén en la orden menos el del id seleccionado
    }

    return {
        order,
        tip,
        setTip,
        addItem, 
        removeItem  
    }
}