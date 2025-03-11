# personal-budget

## funcionamiento del programa personal-budget
Una vez estando en la pagina el programa pedira 3 datos.

1. El tipo de movimiento: elija la accion a realizar, **#1** para depositar o registrar un ingreso de dinero o **#2** para retirar o registrar un gasto.

2. El nombre del movimiento: Ingrese un nombre corto que describa el tipo de movimiento, ya sea para realizar una compra o para registrar algun ingreso de dinero.

3. El monto: Coloque la cantidad de dinero a retirar o abonar.

Finalmente una vez registrado la transaccion, el programa solicitara su confirmacion por si desea realizar otro movimiento. 

`Ok` para continuar o `Cancel` para salir.

## Funciones creadas
1. `operationRegister()`

    - Funcion principal del programa.
    
    - Solicita datos al usuario y los alamacena en el arreglo `transactions[]`.
    - `do-while` asegura que por lo menos una vez se soliciten los datos, para luego preguntar si se desea continuar.
2. `push()`
    - agrega al arreglo `transactions[]` los datos solicitados.

3. `map()`
    - crea una copia y lo devuelve. 

4. `filter()`
    - crea una copia del arreglo `transactions[]` y solo devuelve los elementos que cumplan la condicion `== 2 && >100`

5. `find()`
    - busca y devuelve el primer elemento que cumpla la condicion `=== 'supermercado'`.

## Reflexión sobre cómo las estructuras de control de flujo facilitaron el desarrollo

Las estructuras de control de flujo fueron esenciales para organizar la lógica del programa:

- `do...while` permitió seguir registrando transacciones sin necesidad de repetir código manualmente, mejorando la eficiencia.

- `switch` (si se usara) sería útil para procesar diferentes tipos de transacciones.

- `if...else` dentro de filter() permitió separar ingresos y gastos fácilmente, lo que simplificó la organización de los datos.

- `filter()` ayudó a extraer información específica sin necesidad de bucles manuales, haciendo el código más limpio y eficiente.