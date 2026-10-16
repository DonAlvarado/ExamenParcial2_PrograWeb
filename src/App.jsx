import React, { useState } from "react";

function App() {
  const [busqueda, setBusqueda] = useState("");

  const productos = [
    {
      id: 1,
      nombre: "Laptop Lenovo",
      categoria: "Tecnología",
      precio: 5500,
      stock: 15,
    },
    {
      id: 2,
      nombre: "Mouse Logitech",
      categoria: "Accesorios",
      precio: 150,
      stock: 50,
    },
    {
      id: 3,
      nombre: "Teclado Mecánico",
      categoria: "Accesorios",
      precio: 450,
      stock: 30,
    },
    {
      id: 4,
      nombre: "Monitor Samsung",
      categoria: "Tecnología",
      precio: 1800,
      stock: 20,
    },
    {
      id: 5,
      nombre: "Memoria USB 64GB",
      categoria: "Almacenamiento",
      precio: 85,
      stock: 100,
    },
  ];

  const productosFiltrados = productos.filter((producto) =>
    producto.nombre.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <div className="container">
      <h1>Tienda</h1>

      <p className="subtitulo">Listado de productos</p>

      <input
        type="text"
        placeholder="Buscar producto..."
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
        className="buscador"
      />

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Producto</th>
            <th>Categoría</th>
            <th>Precio</th>
            <th>Stock</th>
          </tr>
        </thead>

        <tbody>
          {productosFiltrados.map((producto) => (
            <tr key={producto.id}>
              <td>{producto.id}</td>
              <td>{producto.nombre}</td>
              <td>{producto.categoria}</td>
              <td>Q {producto.precio.toFixed(2)}</td>
              <td>{producto.stock}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {productosFiltrados.length === 0 && (
        <p className="sin-resultados">No se encontraron productos.</p>
      )}
    </div>
  );
}

export default App;