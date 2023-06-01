import React from "react";
import NotFoundMain from "../../infrastructure/assets/img/404-main.png";
import NotFoundComeBack from "../../infrastructure/assets/img/404-volver.png";
import {useNavigate} from "react-router-dom";
import PathRoutes from "../../cross-cutting/constants/PathRoutes.ts";
/**
 * @author Edward Steven Hernández Lambraño
 * @since 31-05-2023
 * @description Vista 404
 */
export default function NotFound(): React.ReactElement {
    const navigate = useNavigate();

    return (<>
        <div
            className="lg:px-24 lg:py-24 md:py-20 md:px-44 px-4 py-24 items-center flex justify-center flex-col-reverse lg:flex-row md:gap-28 gap-16">
            <div className="xl:pt-24 w-full xl:w-1/2 relative pb-12 lg:pb-0">
                <div className="relative">
                    <div className="absolute">
                        <div className="">
                            <h1 className="my-2 text-gray-800 font-bold text-2xl">
                                No hay nada por aquí...
                            </h1>
                            <p className="my-2 text-gray-800">¡Lo lamento! Visite nuestra página de inicio para llegar a
                                donde necesita ir.</p>
                            <button
                                className="sm:w-full lg:w-auto my-2 border rounded md py-4 px-8 text-center bg-indigo-600 text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-700 focus:ring-opacity-50"
                                onClick={() => navigate(PathRoutes.HOME)}>
                                Volver!
                            </button>
                        </div>
                    </div>
                    <div>
                        <img src={NotFoundComeBack} alt={"404"}/>
                    </div>
                </div>
            </div>
            <div>
                <img src={NotFoundMain} alt={"404"}/>
            </div>
        </div>
    </>)
}