import React from "react";
import {useNavigate} from "react-router-dom";
import PathRoutes from "../../cross-cutting/constants/PathRoutes.ts";
/**
 * @author Edward Steven Hernández Lambraño
 * @since 31-05-2023
 * @description Vista Home
 */
export default function Home(): React.ReactElement {

    const navigate = useNavigate();

    return (<>
        <div className={"flex justify-center gap-4"}>
            <button type={"button"} className={"w-1/3"} onClick={() => navigate(PathRoutes.CASE_FOUR)}>
                <h3 className="text-blue-300 mb-4 text-sm font-bold">
                    CASO 4
                </h3>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                    <p className="text-gray-700">Cick aquí para revisar el CASO 4</p>
                </div>
            </button>
            <button type={"button"} className={"w-1/3"} onClick={() => navigate(PathRoutes.CASE_EIGHT)}>
                <h3 className="text-blue-300 mb-4 text-sm font-bold">
                    CASO 8
                </h3>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                    <p className="text-gray-700">Cick aquí para revisar el CASO 8</p>
                </div>
            </button>
        </div>
    </>)
}