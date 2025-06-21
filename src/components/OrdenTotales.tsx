import {Fragment} from "react";
import {formatCurrency} from "../helpers";
import type {AccionesOrdern} from "../reducers/orden_Reducer.ts";

type OrdenTotalesProps = {
    costoTotalOrden: () => number
    calcularPropina: () => number
    calcularTotalConPropina: () => number
    reiniciarOrden: () => void,
    dispacth:  React.ActionDispatch<[acciones: AccionesOrdern]>
}

const OrdenTotales = ({costoTotalOrden, calcularPropina, calcularTotalConPropina, dispacth}: OrdenTotalesProps) => {
    return(
        <Fragment>
            <div className="space-y-3">
                <h2 className="font-black text-2xl text-center">Totales y Propina</h2>
                <p className="">Subtotal a Pagar: <span className="font-bold">{formatCurrency(costoTotalOrden())}</span></p>
                <p className="">Propina: <span className="font-bold">{formatCurrency(calcularPropina())}</span></p>
                <p>Total a Pagar: <span className="font-bold">{formatCurrency(calcularTotalConPropina())}</span> </p>
            </div>
            <button
                // onClick={reiniciarOrden}
                onClick={() => {
                    dispacth({type: "reiniciarOrden"})
                }}
                className="rounded-lg uppercase p-3 bg-teal-400 w-full text-white text-xl font-bold text-black hover:bg-white  hover:border border-teal-700 hover:text-teal-700">Reiniciar Orden</button>
        </Fragment>
    );
}

export default OrdenTotales;