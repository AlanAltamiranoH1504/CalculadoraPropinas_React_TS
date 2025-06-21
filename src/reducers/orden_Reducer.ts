import type {MenuItem, OrderItem} from "../types";

export type AccionesOrdern =
    { type: "addItem", payload: { item: MenuItem } } |
    { type: "removeItem", payload: { id: MenuItem["id"] } } |
    { type: "reiniciarOrden" } |
    { type: "agregarPropina", payload: { value: number } }

export type OrdenState = {
    orden: OrderItem[],
    propina: number
}

export const initialState: OrdenState = {
    orden: [],
    propina: 0
}

export const orderReducer = (
    state: OrdenState = initialState,
    acciones: AccionesOrdern
) => {
    if (acciones.type === "addItem") {
        const itemExistente = state.orden.findIndex((producto) => {
            return acciones.payload.item.id === producto.id;
        });

        let updatedItem: OrderItem[] = [];
        if (itemExistente >= 0) {
            updatedItem = [...state.orden];
            updatedItem[itemExistente] = {
                ...updatedItem[itemExistente],
                cantidad: updatedItem[itemExistente].cantidad + 1
            };
        } else {
            const newItem: OrderItem = {
                ...acciones.payload.item,
                cantidad: 1
            }
            updatedItem = [...state.orden, newItem]
        }
        return {
            ...state,
            orden: updatedItem
        }
    }

    if (acciones.type === "removeItem") {
        const nuevaOrden = state.orden.filter((producto) => {
            return producto.id !== acciones.payload.id;
        });
        return {
            ...state,
            orden: nuevaOrden
        }
    }

    if (acciones.type === "reiniciarOrden") {
        return {
            ...state,
            orden: []
        }
    }

    if (acciones.type === "agregarPropina") {
        const propinaSeleccionada = acciones.payload.value;
        return {
            ...state,
            propina: propinaSeleccionada
        }
    }

    return state;
}