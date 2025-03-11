
const transactions = [];

function operationRegister() {
    do {
        const transactionType = Number(prompt("Ingrese el numero de la accion a realizar\n 1. Abonar\n 2. Retirar"));
        const transactionName = prompt("Nombre del ingreso/gasto");
        const amountMoney = Number(prompt("Cual es el monto?"));

        if ()
        transactions.push({
            transactionType,
            transactionName,
            amountMoney,
        });

    } while (confirm("Desea realizar otra operacion?"));
}

operationRegister()

// HU1 - Listar nombres de movimientos
console.log("Lista de los nombres de los movimientos: ", transactions.map(transaction => transaction.transactionName));

// HU2 - Filtrar egresos mayores a $100
const highWithdrawals = transactions.filter(transaction => transaction.transactionType === 2 && transaction.amountMoney > 100);
console.log("Egresos mayores a 100: ", highWithdrawals);

// HU3 - Buscar movimiento por nombre
const searchTransactionName = transactions.find(transaction => transaction.transactionName === "supermercado");
console.log("Buscar movimiento por nombre: 'supermercado'\nResultado encontrado:", searchTransactionName)