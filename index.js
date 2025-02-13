function calculate() {
    // Obtener los valores de los inputs y convertirlos a números
    const num1 = parseFloat(document.getElementById("num1").value) || 0;
    const num2 = parseFloat(document.getElementById("num2").value) || 0;

    // Calcular la suma
    let result = num1 + num2;

    // Mostrar el resultado
    document.getElementById("result").innerText = "Result: " + result.toFixed(2);
}

function resetFields() {
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
    document.getElementById("result").innerText = "Result: ";
}
