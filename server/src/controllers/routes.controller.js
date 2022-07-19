const { pool } = require("../../db/conn");

const getPrueba = async (req, res) => {
    const response = await pool.query('SELECT * FROM public."Personas"');
    console.log(response.rows);
    res.status(200).json(response.rows);
};

const insertPrueba = async (req, res) => {
    const { id_persona, nombre, apellido, dni, sexo, fecha_nac, detalle_persona } = req.body;
    const insert = await pool.query('INSERT INTO public."Personas" (id_persona, nombre, apellido, dni, sexo, fecha_nac, detalle_persona) VALUES ($1, $2, $3, $4, $5, $6, $7)', [id_persona, nombre, apellido, dni, sexo, fecha_nac, detalle_persona]);
};

module.exports = {
    getPrueba,
    insertPrueba
}