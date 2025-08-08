import { useMemo } from "react"
import type { OrderItem } from "../types"
import { formatCurrency } from "../helpers"


type OrderTotalProps = {
    order: OrderItem[],
    tip: number,
    placeOrder: () => void
}
export default function OrderTotal({order, tip, placeOrder}: OrderTotalProps) {

    //Estas funciones se podrían hacer en el hook UseOrder, pero así lo tenemos en este componente más organizado y rápido

  const subTotalAmount = useMemo(() => order.reduce((total, item) => total + (item.price*item.quantity), 0), [order]) //Cuando cambie el order [order], se ejecuta toda la función

  const tipAmount = useMemo(() => subTotalAmount * tip , [tip, order]) //Depende tanto de la propina seleccionada, como de el pedido order actual

  const totalAmount = useMemo(() => subTotalAmount + tipAmount, [tip, order])

  return (
    <>
        <div className="space-y-3"></div>
            <h2 className="font-black text-2xl">Totales y Propina:</h2>
            <p>Subtotal a pagar:
                <span className="font-bold"> {formatCurrency(subTotalAmount)}</span>
            </p>
            <p>Propina:
                <span className="font-bold"> {formatCurrency(tipAmount)}</span>
            </p>
            <p>Total a pagar:
                <span className="font-bold"> {formatCurrency(totalAmount)}</span>
            </p>
        <button className="w-full bg-black p-3 uppercase text-white font-bold mt-10 cursor-pointer disabled:opacity-10 disabled:cursor-default"
                disabled={totalAmount === 0}
                onClick={placeOrder}>
            Guardar orden
        </button>
    </>
  )
}
