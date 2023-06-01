import React, {useState} from "react";
import CaseFourModel from "../../data/models/CaseFourModel.ts";

/**
 * @author Edward Steven Hernández Lambraño
 * @since 31-05-2023
 * @description Hook encargado de realiza todas las operaciones de sumar, limpiar y asignar valores de la vista CaseFour
 */
export default function useCaseFour() {
    const initialValues: CaseFourModel = {
        first : 0,
        last  : 0
    }
    const [values, setValues] = useState<CaseFourModel>(initialValues);
    const [result, setResult] = useState<number|undefined>();

    function changeValue(ev: React.ChangeEvent<HTMLInputElement>): void {
        setValues(prevState => ({
            ...prevState,
            [ev.target.name]: ev.target.validity.valid ? parseInt(ev.target.value) : '',
        }));
    }

    function add(): void {

        setResult(values.first + values.last);
    }

    function clean(): void {
        setResult(undefined);
        setValues(initialValues);
    }

    return {
        result,
        values,
        add,
        clean,
        changeValue,
    }
}