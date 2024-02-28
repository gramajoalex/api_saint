import { SAITEO } from "../../model";

/**
 * Obtiene los items de ofertas.
 *
 * @param {Request} req La solicitud HTTP
 * @param {Response} res La respuesta HTTP
 */
export const getAllSAITEO = async (req, res) => {
  try {
    const itemOffers = await SAITEO.findAll();

    return res.json({
      data: itemOffers,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Error interno del servidor." });
  }
};
