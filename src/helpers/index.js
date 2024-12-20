const formatearDinero = (valor) => {
  const formatter = new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
  });
  return formatter.format(valor);
};

const calcularTotalPagar = (cantidad, plazo) => {
  let total;

  if (cantidad < 250000) {
    total = cantidad * 1.5;
  } else if (cantidad >= 250000 && cantidad <= 500000) {
    total = cantidad * 1.4;
  } else if (cantidad >= 500000 && cantidad <= 750000) {
    total = cantidad * 1.3;
  } else {
    total = cantidad * 1.2;
  }

  if (plazo === 6) {
    total *= 1.1;
  } else if (plazo === 12) {
    total *= 1.2;
  } else if (plazo === 24) {
    total *= 1.3;
  }
  return total;
};

export { formatearDinero, calcularTotalPagar };
