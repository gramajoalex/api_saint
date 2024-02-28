import { SAOFER } from "../../model";

/**
 * Obtiene ofertas.
 *
 * @param {Request} req La solicitud HTTP
 * @param {Response} res La respuesta HTTP
 */
export const getAllSAOFER = async (req, res) => {
  try {
    const offers = await SAOFER.findAll({});

    return res.json({
      data: offers,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Error interno del servidor." });
  }
};
