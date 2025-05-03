# Instrucciones de Tarea - Ambiente de desarrollo

- Inicialice una aplicación utilizando nodejs e instale una dependencia
  del proyecto que sea relevante para la funcionalidad que desarrollará.
- Desarrolle un programa de línea de comando que resuelva el siguiente escenario:
  - Una empresa de logística necesita calcular el costo de envío
    de paquetes según ciertas reglas:
    - El costo base de envío es L50.00.
    - Si el paquete pesa más de 5 LB, se aplica un cargo adicional
      de L20.00 por LB excedente.
    - Si la distancia es mayor a 50 km, se aplica un costo adicional
      de L10.00 por km adicional.

## El programa debe contar con párametros como parte del código que definan

- Peso del paquete (en lb).
- Distancia del envío (en km).

### El programa debe calcular y mostrar por consola

- El costo total del envío desglosado.
- La fecha estimada de entrega (puede asumir un tiempo fijo de procesamiento
  de 2 días y un tiempo de transporte de 1 día por cada 100 km).
- Asegurese que node_modules no forma parte de la tarea que presenta.
- Suba su proyecto a github y comparta el enlace a su repositorio.

### Ejemplo de la salida

| Costo Base                       | L50.00     |
| -------------------------------- | ---------- |
| Recargo por peso                 | L100.00    |
| -------------------------------  | ---------- |
| Costo total                      | L150.00    |
| -------------------------------- | ---------- |
| Fecha estimada de entrega        | 2025-02-07 |
