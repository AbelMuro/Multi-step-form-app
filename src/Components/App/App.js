import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Container from './Container';
import SelectPlan from './SelectPlan';
import SideBar from './SideBar';
import PersonalInfo from './PersonalInfo';
import {Provider} from 'react-redux'
import Store from './Store';
import "./styles.css";


function App() {
    return(
        <Provider store={Store}>
            <BrowserRouter>
                <Container>
                    <SideBar/>
                    <Routes>
                        <Route path="/" element={<PersonalInfo/>}/>
                        <Route path="/SelectPlan" element={<SelectPlan/>}/>
                    </Routes>            
                </Container>
            </BrowserRouter>            
        </Provider>

    )
}

export default App;