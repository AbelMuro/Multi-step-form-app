import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Container from './Container';
import YourInfo from './YourInfo';
import SideBar from './SideBar';
import "./styles.css";

function App() {
    return(
        <BrowserRouter>
            <Container>
                <SideBar/>
                <Routes>
                    <Route path="/" element={<YourInfo/>}/>
                </Routes>            
            </Container>
        </BrowserRouter>
    )
}

export default App;