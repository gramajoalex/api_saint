import { SATAXPRD } from "../../model";

/**
 * Obtiene los impuestos en productos.
 *
 * @param {Request} req La solicitud HTTP
 * @param {Response} res La respuesta HTTP
 */
export const getAllSATAXPRD = async (req, res) => {
  try {
    const productTaxes = await SATAXPRD.findAll({});

    return res.json({
      data: productTaxes,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Error interno del servidor." });
  }
};
