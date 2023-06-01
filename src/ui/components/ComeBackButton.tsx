import React from "react";
import PathRoutes from "../../cross-cutting/constants/PathRoutes.ts";
import {useNavigate} from "react-router-dom";

/**
 * @author Edward Steven Hernández Lambraño
 * @since 31-05-2023
 * @description Componente volver
 */
export default function ComeBackButton(): React.ReactElement {

    const navigate = useNavigate();

    return (<>
        <button
            onClick={() => navigate(PathRoutes.HOME)}
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button">
            Volver
        </button>
    </>)
}