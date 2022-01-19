import {Routes, Route} from "react-router-dom";
import Home from "../Pages/Home";
import ListVideoPage from "../Pages/ListVideoPage";

const Router = () => {
    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/list" element={<ListVideoPage/>}/>
        </Routes>
    )
};

export default Router;