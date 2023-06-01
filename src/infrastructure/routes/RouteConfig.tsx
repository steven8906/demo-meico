import {HashRouter, Route, Routes} from "react-router-dom";
import Home from "../../ui/pages/Home.tsx";
import CaseFour from "../../ui/pages/CaseFour.tsx";
import CaseEight from "../../ui/pages/CaseEight.tsx";
import PathRoutes from "../../cross-cutting/constants/PathRoutes.ts";
import NotFound from "../../ui/pages/NotFound.tsx";
import Layout from "../../ui/components/layout/Layout.tsx";

export default function RouteConfig() {

    return (<>
        <HashRouter>
            <Layout>
                <Routes>
                    <Route path={PathRoutes.NOT_FOUND} element={<NotFound/>}/>
                    <Route path={PathRoutes.ROOT} element={<Home/>}/>
                    <Route path={PathRoutes.HOME} element={<Home/>}/>
                    <Route path={PathRoutes.CASE_FOUR} element={<CaseFour/>}/>
                    <Route path={PathRoutes.CASE_EIGHT} element={<CaseEight/>}/>
                </Routes>
            </Layout>
        </HashRouter>
    </>)
}