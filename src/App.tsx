import Header from "./components/Header.tsx";
import {menuItems} from "./data/db.ts";
import {Fragment, useReducer} from "react";
import MenuItem from "./components/MenuItem.tsx";
import useOrder from "./hooks/useOrder.ts";
import OrderContent from "./components/OrderContent.tsx";
import OrdenTotales from "./components/OrdenTotales.tsx";
import PropinasFormulario from "./components/PropinasFormulario.tsx";
import {initialState, orderReducer} from "./reducers/orden_Reducer.ts";


function App() {
    const {reiniciarOrden} = useOrder();
    const [state, dispacth] = useReducer(orderReducer, initialState);

    function costoTotalOrden() {
        return state.orden.reduce((total, item) => {
            return total = total + (item.cantidad * item.price);
        }, 0);
    }

    const calcularPropina = ()=> {
        return costoTotalOrden() * state.propina;
    }

    const calcularTotalConPropina = (): number =>{
        return calcularPropina() + costoTotalOrden();
    }
    return (
        <>
            <Fragment>
                <Header/>
            </Fragment>

            <main className="max-w-7xl mx-auto py-20 grid md:grid-cols-2">
                <div className="p-5">
                    <h2 className="text-center text-3xl font-black mb-4">Menú</h2>
                    <div className="space-y-3">
                        {menuItems.map((item) => {
                            return (
                                <MenuItem
                                    key={item.id}
                                    item={item}
                                    // addItem={addItem}
                                    dispatch={dispacth}
                                />
                            );
                        })}
                    </div>
                </div>
                <div className="border border-dashed border-slate-300 p-5 rounded-lg space-y-10">
                    <h2 className="text-center text-3xl font-black mb-4">Consumo</h2>
                    <OrderContent
                        // orden={orden}
                        orden={state.orden}
                        dispatch={dispacth}
                        // removeItem={removeItem}
                    />
                    {state.orden.length > 0 ? (
                        <Fragment>
                            <PropinasFormulario
                                // setPropina={setPropina}
                                dispatch={dispacth}
                            />
                            <OrdenTotales
                                costoTotalOrden={costoTotalOrden}
                                calcularPropina={calcularPropina}
                                calcularTotalConPropina={calcularTotalConPropina}
                                reiniciarOrden={reiniciarOrden}
                                dispacth={dispacth}
                            />
                        </Fragment>
                    ):(
                        <Fragment></Fragment>
                    )}
                </div>
            </main>
        </>
    )
}

export default App
