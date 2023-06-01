import React from "react";
import Header from "./Header";

/**
 * @author Edward Steven Hernández Lambraño
 * @since 31-05-2023
 * @description Componente Layout
 */
export default function Layout({children}: { children: React.ReactNode }): React.ReactElement {
    return (<>
        <Header/>
        <main className="space-y-10">
            <div className="p-20 bg-blue-100 mt-8">
                {children}
            </div>
        </main>
    </>)
}
