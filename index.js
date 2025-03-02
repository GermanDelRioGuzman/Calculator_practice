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