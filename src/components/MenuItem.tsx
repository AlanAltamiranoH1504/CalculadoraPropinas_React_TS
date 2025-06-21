import {Fragment} from "react";
import type {MenuItem} from "../types";
import type {AccionesOrdern} from "../reducers/orden_Reducer.ts";

//Types de Componente
type MenuItemProps = {
    item: MenuItem,
    // addItem: (item: MenuItem) => void,
    dispatch:  React.ActionDispatch<[acciones: AccionesOrdern]>
}

const MenuItem = ({item, dispatch}: MenuItemProps) => {
    return (
        <Fragment>
            <button
                className="border-2 border-teal-400 w-full p-3 flex justify-between items-center hover:bg-teal-200 rounded-xl"
                onClick={() => {
                    // addItem(item);
                    dispatch({type: "addItem", payload: {item}})
                }}
            >
                <p>{item.name}</p>
                <p className="font-black">${item.price}</p>
            </button>
        </Fragment>
    );
}

export default MenuItem;