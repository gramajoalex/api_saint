import { SASERV } from "../../model";

/**
 * Obtiene todos los servicios.
 *
 * @param {Request} req La solicitud HTTP
 * @param {Response} res La respuesta HTTP
 */
export const getAllSASERV = async (req, res) => {
  try {
    const servicios = await SASERV.findAll();

    return res.json({
      data: servicios,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Error interno del servidor." });
  }
};
