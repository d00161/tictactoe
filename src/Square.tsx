import { useState } from "react";
import './App.css';


interface SquareProps {
    value: string;
    onSquareClick: () => void;
  }
  

export const Square=  ({value, onSquareClick}:SquareProps)=> {

    return <button className="square" onClick={onSquareClick}>{value}</button>;
}