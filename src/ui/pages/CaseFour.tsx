import React from "react";
import useCaseFour from "../../application/hooks/useCaseFour.ts";
import ComeBackButton from "../components/ComeBackButton.tsx";

/**
 * @author Edward Steven Hernández Lambraño
 * @since 31-05-2023
 * @description Vista CaseFour
 */
export default function CaseFour(): React.ReactElement {
    const {
        result,
        values,
        add,
        clean,
        changeValue,
    } = useCaseFour();

    return (<>
        <h1 className={"font-extrabold leading-none tracking-tight text-gray-900 md:text-3xl"}>Caso 4:</h1>
        <article>
            <p>Envío de datos de un FORMULARIO - Crear un formulario que solicite la carga de dos valores enteros y
                luego mostrar en otra página el resultado de la suma de los dos valores capturados por teclado.</p>
        </article>
        <br/>
        <div className={"flex justify-center"}>
            <div className="w-2/5">
                <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <div className={"flex flex-col justify-center gap-5"}>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">
                                Primer Valor
                            </label>
                            <input
                                onChange={changeValue}
                                value={values.first}
                                name={"first"}
                                pattern={"[0-9]*"}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                type="number"
                                placeholder="Ingrese Primer Valor..."/>
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">
                                Segundo Valor
                            </label>
                            <input
                                onChange={changeValue}
                                value={values.last}
                                name={"last"}
                                pattern={"[0-9]*"}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                type="number"
                                placeholder="Ingrese Segundo Valor..."/>
                        </div>
                    </div>
                    <div className="flex items-center justify-between">
                        <ComeBackButton/>
                        <div className={"flex gap-3"}>
                            <button
                                onClick={clean}
                                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                type="button">
                                Limpiar
                            </button>
                            <button
                                onClick={add}
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                type="button">
                                Sumar
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        {result && <p className={"tracking-tight text-gray-900 md:text-3xl"}>Resultado: {result}</p>}
    </>)
}