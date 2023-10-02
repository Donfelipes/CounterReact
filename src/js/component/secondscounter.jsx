import React, { useState } from "react";
import { FaClock } from "react-icons/fa";
export function ContadorSimple() {
  const [contador, intervalo] = useState(0);
  const Seis = Math.floor((contador / 100000) % 10);
  const Cinco = Math.floor((contador / 10000) % 10);
  const Cuatro = Math.floor((contador / 1000) % 10);
  const Tres = Math.floor((contador / 100) % 10);
  const Dos = Math.floor((contador / 10) % 10);
  const Uno = Math.floor(contador % 10);
  setTimeout(() => {
    intervalo(contador + 1);
  }, 1000);
  return (
    <div className="container">
      <div className="Reloj">
        <FaClock style={{ color: "#99d85a" }} />
      </div>
      <div className="seis">{Seis}</div>
      <div className="cinco">{Cinco}</div>
      <div className="cuatro">{Cuatro}</div>
      <div className="tres">{Tres}</div>
      <div className="dos">{Dos}</div>
      <div className="uno">{Uno}</div>
    </div>
  );
}