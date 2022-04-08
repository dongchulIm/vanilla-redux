import React from "react";
import { 
    HashRouter as Router,
    Routes,
    Route,
} from "react-router-dom";

import Home from "../routes/Home.js";
import Detail from "../routes/Detail";

function App(){
    return (
    <Router>
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/:id" element={<Detail/>}></Route>
            <Route path="/movie/:test2" element={<Detail/>}></Route>
        </Routes>
    </Router>
    );
}

  
export default App;