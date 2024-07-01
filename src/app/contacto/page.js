'use client'

export default function Contacto() {
  return (
    <div>
      <h1>Contacto</h1>
      <p>Si tienes alguna pregunta o necesitas más información, no dudes en contactarnos.</p>
      <form>
        <div>
          <label htmlFor="name">Nombre:</label>
          <input type="text" id="name" name="name" />
        </div>
        <div>
          <label htmlFor="email">Correo electrónico:</label>
          <input type="email" id="email" name="email" />
        </div>
        <div>
          <label htmlFor="message">Mensaje:</label>
          <textarea id="message" name="message" />
        </div>
        <div>
          <button type="submit">Enviar</button>
        </div>
      </form>
    </div>
  );
}
