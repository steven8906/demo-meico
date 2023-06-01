import React from "react";
import useCaseEight from "../../application/hooks/useCaseEight.ts";
import ComeBackButton from "../components/ComeBackButton.tsx";

/**
 * @author Edward Steven Hernández Lambraño
 * @since 31-05-2023
 * @description Vista CaseEight
 */
export default function CaseEight(): React.ReactElement {
    const {data} = useCaseEight();

    return (<>
        <h1 className={"font-extrabold leading-none tracking-tight text-gray-900 md:text-3xl"}>Caso 8:</h1>
        <article>
            <p>Genere un programa para extraer los datos el archivo json generado y mostrarlos en formato lista en una
                página web..</p>
        </article>
        <br/>

        <div className="flex flex-wrap -mx-2">
            {data.map((person, index) => (
                <div key={`person-${index}`}
                     className="w-full sm:w-1/2 md:w-1/3 px-2 mb-4">
                    <div className="bg-white border border-gray-200 p-4 rounded shadow">
                        <h2 className="text-xl font-semibold mb-2">{person.name}</h2>
                        <p className="font-semibold">Edad: {person.age}</p>
                        <div>
                            <p className="font-semibold">Teléfonos:</p>
                            <ul>
                                {person.phones.map((phone, phoneIndex) => (
                                    <li key={`phone-${phoneIndex}`}>
                                        {phone.phone_type}: {phone.phone_number}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <p className="font-semibold">Email: {person.email}</p>
                    </div>
                </div>
            ))}
        </div>
        <ComeBackButton/>
    </>)
}