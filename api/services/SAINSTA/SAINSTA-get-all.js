import { SAINSTA } from "../../model";

/**
 * Obtiene las instancias.
 *
 * @param {Request} req La solicitud HTTP
 * @param {Response} res La respuesta HTTP
 */
export const getAllSAINSTA = async (req, res) => {
  try {
    const instancias = await SAINSTA.findAll();

    return res.json({
      data: instancias,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Error interno del servidor." });
  }
};
