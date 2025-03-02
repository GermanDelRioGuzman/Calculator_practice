<<<<<<< HEAD
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
=======
const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 8000;

// ✅ 1. Servir archivos estáticos (HTML, CSS, JS)
app.use(express.static(path.join(__dirname, "public")));

// ✅ 2. Enviar `index.html` cuando acceden a `/`
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname,"index.html"));
});

// ✅ 3. Iniciar el servidor
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
>>>>>>> 0d19ff7 (second)
