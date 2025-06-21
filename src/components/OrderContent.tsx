import {Fragment} from "react";
import type {OrderItem} from "../types";
import {formatCurrency} from "../helpers";
import type {AccionesOrdern} from "../reducers/orden_Reducer.ts";

type OrderContentProps = {
    orden: OrderItem[],
    // removeItem: (id: MenuItem['id']) => void
    dispatch:  React.ActionDispatch<[acciones: AccionesOrdern]>
}

const OrderContent = ({orden, dispatch}: OrderContentProps) => {

    return (
        <Fragment>
            <div className="space-y-3  mt-5">
                {orden.length > 0 ? (
                    <>
                        {orden.map((item) => {
                            return (
                                <Fragment key={item.id}>
                                    <div
                                        className="grid grid-cols-2 border-t border-gray-700 py-5 last-of-type:border-b">
                                        <div>
                                            <p className="text-lg">{item.name} - {formatCurrency(item.price)}</p>
                                            <p className="font-black">
                                                Cantidad: {item.cantidad} - {formatCurrency((item.cantidad * item.price))}
                                            </p>
                                        </div>
                                        <div className="flex justify-end items-center">
                                            <button
                                                className="bg-red-600 h-8 w-8 rounded-full text-white font-black"
                                                onClick={() => {
                                                    // removeItem(item.id);
                                                    dispatch({type: "removeItem", payload: {id: item.id}})
                                                }}
                                            >
                                                X
                                            </button>
                                        </div>
                                    </div>
                                </Fragment>
                            );
                        })}
                    </>
                ) : (
                    <>
                        <p className="text-center font-black uppercase underline">La orden está vacia</p>
                    </>
                )}
            </div>
        </Fragment>
    );
}

export default OrderContent;