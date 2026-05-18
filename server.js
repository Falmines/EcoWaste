const express = require("express");
const { Pool } = require("pg");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// ================= DATABASE =================
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "ecowaste",
  password: "085891099220",
  port: 5432,
});

// ================= HOME ROUTE =================
app.get("/", (req, res) => {
  res.send("Server EcoWaste aktif 🚀");
});

// ================= SIMPAN CHAT =================
app.post("/chat", async (req, res) => {
  const { nama, email, pesan } = req.body;

  try {
    await pool.query(
      "INSERT INTO chat_messages (nama, email, pesan) VALUES ($1, $2, $3)",
      [nama, email, pesan]
    );

    res.json({ success: true });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err.message });
  }
});

// ================= AMBIL CHAT =================
app.get("/chat", async (req, res) => {
  try {
    const result = await pool.query(
      "SELECT * FROM chat_messages ORDER BY id DESC"
    );

    res.json(result.rows);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err.message });
  }
});

// ================= START SERVER =================
app.listen(3000, () => {
  console.log("Server jalan di http://localhost:3000");
});