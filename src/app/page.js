'use client';

import React from 'react';
import Link from 'next/link';
import './home.css';

export default function Home() {
  return (
    <div className="home-container">
      <h1>Bienvenido a Nuestra Página</h1>
      <nav>
        <ul className="nav-links">
          <li>
            <Link href="/quienes-somos">Quienes somos</Link>
          </li>
          <li>
            <Link href="/reservas">Reservas</Link>
          </li>
          <li>
            <Link href="/contacto">Contacto</Link>
          </li>
        </ul>
      </nav>
      <p>hola</p>
    </div>
  );
}
