import {Fragment} from "react";
import type {Propina} from "../types";
import type {AccionesOrdern} from "../reducers/orden_Reducer.ts";
const tipOptions: Propina[] = [
    {
        id: 'tip-10',
        value: .10,
        label: '10%'
    },
    {
        id: 'tip-20',
        value: .20,
        label: '20%'
    },
    {
        id: 'tip-50',
        value: .50,
        label: '50%'
    },
]

type PropinasFormularioProps = {
    // setPropina:  React.Dispatch<React.SetStateAction<number>>,
    dispatch:  React.ActionDispatch<[acciones: AccionesOrdern]>
}

const PropinasFormulario = ({dispatch}: PropinasFormularioProps) => {

    return (
        <Fragment>
            <div>
                <h3 className="font-black text-2xl text-center">Propina: </h3>
            </div>

            <form>
                {tipOptions.map((opcion) => {
                    return (
                        <Fragment key={opcion.id}>
                            <div className=" space-x-2">
                                <label htmlFor={opcion.id}>{opcion.label}</label>
                                <input
                                    id={opcion.id}
                                    type="radio"
                                    value={opcion.value}
                                    name="propina"
                                    onChange={(e) => {
                                        // calcularPropina(opcion.value);
                                        // setPropina(+e.target.value);
                                        dispatch({type: "agregarPropina", payload: {value: +e.target.value}})
                                    }}
                                />
                            </div>
                        </Fragment>
                    );
                })}
            </form>
        </Fragment>
    );
}
export default PropinasFormulario;