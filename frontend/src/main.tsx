import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/global.css'
import App from './App.tsx'
import {BrowserRouter, Route, Routes} from "react-router";
import Layout from "@/components/Layout.tsx";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Layout/>}>
                <Route index element={<App/>}/>
                <Route path={"/test"} element={<div/>}/>
            </Route>
        </Routes>
    </BrowserRouter>
  </StrictMode>,
)
