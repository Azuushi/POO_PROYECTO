var carrito = {
    productos: [],
  
    agregarProducto: function(nombre, precio, cantidad) {
      // Función para agregar un producto al carrito
      var producto = {
        nombre: nombre,
        precio: precio,
        cantidad: cantidad,
      };
      this.productos.push(producto);
      this.actualizarCarrito();
    },
  
    actualizarCarrito: function() {
      // Función para actualizar la tabla en el HTML con los productos del carrito
      var tbody = document.querySelector('tbody');
      tbody.innerHTML = '';
  
      this.productos.forEach(function(producto) {
        var row = tbody.insertRow();
        var cellNombre = row.insertCell(0);
        var cellPrecio = row.insertCell(1);
        var cellCantidad = row.insertCell(2);
        var cellTotal = row.insertCell(3);
  
        cellNombre.innerHTML = producto.nombre;
        cellPrecio.innerHTML = '$' + producto.precio.toFixed(2);
        cellCantidad.innerHTML = producto.cantidad;
        cellTotal.innerHTML = '$' + (producto.precio * producto.cantidad).toFixed(2);
      });
  
      // Actualizar el total
      var totalAmount = this.calcularTotal();
      document.getElementById('total-amount').innerHTML = totalAmount.toFixed(2);
    },
  
    calcularTotal: function() {
      // Función para calcular el total del carrito
      var total = 0;
      this.productos.forEach(function(producto) {
        total += producto.precio * producto.cantidad;
      });
      return total;
    },
  
    realizarCompra: function() {
      // Lógica para realizar la compra
      // Puedes enviar la información del carrito al servidor aquí, por ejemplo
      console.log('Compra realizada!');
    },
  
    limpiarCarrito: function() {
      // Función para limpiar el carrito
      this.productos = [];
      this.actualizarCarrito();
    },
  };
  
    function agregarLibroAlCarrito(nombre, precio, cantidad) {
        carrito.agregarProducto(nombre, precio, cantidad);
        alert('Libro agregado al carrito');
    }
