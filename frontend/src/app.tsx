import React from 'react';
import './app.scss';
import {Home} from './pages/Home';
import {AppBar} from './components/AppBar';

export function App(){
    return (
        <div className="page_layout">
            <AppBar/>
            <div className="page_body">
                <Home/>
            </div>
        </div>
    )
}