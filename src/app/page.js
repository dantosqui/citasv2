'use client';

import React from 'react';
import Link from 'next/link';
import './home.css';

export default function Home() {
  const username = typeof window !== 'undefined' ? localStorage.getItem('username') : null;

  return (
    <div className="home-container">
      <h1>Bienvenido a Nuestra Página</h1>
      {username && <h1>{username}</h1>}
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
          <li>
            <Link href="/login">Iniciar sesion</Link>
          </li>
        </ul>
      </nav>
      <p>hola</p>
    </div>
  );
}
