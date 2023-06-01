import React from "react";
import meico from "../../../infrastructure/assets/img/meico.png"
import {useNavigate} from "react-router-dom";
import PathRoutes from "../../../cross-cutting/constants/PathRoutes.ts";

/**
 * @author Edward Steven Hernández Lambraño
 * @since 31-05-2023
 * @description Componente HEADER
 */
export default function Header(): React.ReactElement {
    const navigate = useNavigate();

    return (<>
        <header className="relative z-50 w-full h-24">
            <div className="p-3">
                <nav>
                    <button className="relative flex items-center inline-block h-5 h-full font-black leading-none"
                            onClick={() => navigate(PathRoutes.ROOT)}>
                        <img src={meico} alt={"Meico"} width={100}/>
                    </button>
                </nav>
            </div>
        </header>
    </>)
}
