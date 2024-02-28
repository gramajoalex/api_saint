import { SAFACT } from "../../model";

/**
 * Obtiene las operaciones de ventas.
 *
 * @param {Request} req La solicitud HTTP
 * @param {Response} res La respuesta HTTP
 */
export const getAllSAFACT = async (req, res) => {
  try {
    const operations = await SAFACT.findAll({});

    return res.json({
      data: operations,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Error interno del servidor." });
  }
};
