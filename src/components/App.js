import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './Header'
import StreamCreate from './streams/StreamCreate'
import StreamDelete from './streams/StreamDelete'
import StreamEdit from './streams/StreamEdit'
import StreamList from './streams/StreamList'
import StreamShow from './streams/StreamShow'

const App = () =>{
    return (
        <div className='ui container'>
            <BrowserRouter>
                <div>
                    <Header />
                    <Routes>
                        <Route path='/' exact element={<StreamList/>}/>
                        <Route path='streams/show' exact element={<StreamShow/>}/>
                        <Route path='streams/edit' exact element={<StreamEdit/>}/>
                        <Route path='streams/delete' exact element={<StreamDelete/>}/>
                        <Route path='streams/add' exact element={<StreamCreate/>}/>
                    </Routes>
                </div>
            </BrowserRouter>

        </div>
    )
}
export default App