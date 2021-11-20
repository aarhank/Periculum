import React,{useState} from 'react'
import './Main.css'
import Chintu from './chintu'
import {Link} from 'react-router-dom'
export default function Home() {
    return (
        <div className="h_layout">
            <div className="h_into">
            <Link to="/home/wrongButton" style={{ textDecoration: 'none' }}><h1 className="h_text">Periculum</h1></Link>
                <Link to="/home/about" style={{ textDecoration: 'none' }}><h2 className="h_text" >About</h2></Link>
                <a href="https://twitter.com/bdab__" className="I-hate-text-decorations"><h2 className="h_text">Github</h2></a>
                <Link to="/home/feedback" style={{ textDecoration: 'none' }}><h2 className="h_text">Feedback</h2></Link>
                <Link to="/home/disclamer" style={{ textDecoration: 'none' }} ><h2 className="h_text">Disclamer</h2></Link>
                <Link to="/home/bdab" style={{ textDecoration: 'none' }} ><h2 className="h_text">Bdab</h2></Link>
                </div>
                <Chintu/>
        </div>
    )
}
