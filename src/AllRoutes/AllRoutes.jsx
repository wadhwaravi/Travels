import {Routes, Route} from "react-router-dom";
import Home from "../Pages/Home";
import Hotel from "../Pages/Hotel";
import AskLocalPage from '../Pages/AskLocalPage';

function AllRoutes(){
    return <Routes>
        <Route path="/" element={<Home />} ></Route>
        <Route path="/hotel" element={<Hotel />} ></Route>
        <Route path="/ask-local" element={<AskLocalPage />} ></Route>
    </Routes>
}

export default AllRoutes;