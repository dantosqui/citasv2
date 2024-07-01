import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Bienvenido a Nuestra Página</h1>
      <nav>
        <ul>
          <li>
            <Link href="/quienes-somos">
              Quienes somos
            </Link>
          </li>
          <li>
            <Link href="/reservas">
              Reservas
            </Link>
          </li>
          <li>
            <Link href="/contacto">
              contacto
            </Link>
          </li>
        </ul>
      </nav>
      <p>hola</p>
    </div>
  );
}
