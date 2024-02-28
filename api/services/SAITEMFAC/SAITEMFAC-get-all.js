import { SAITEMFAC } from "../../model";

/**
 * Obtiene los items de facturas.
 *
 * @param {Request} req La solicitud HTTP
 * @param {Response} res La respuesta HTTP
 */
export const getAllSAITEMFAC = async (req, res) => {
  try {
    const fac = await SAITEMFAC.findAll();

    return res.json({
      data: fac,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Error interno del servidor." });
  }
};
