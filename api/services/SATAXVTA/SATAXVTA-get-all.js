import { SATAXVTA } from "../../model";

/**
 * Obtiene los impuestos de facturas.
 *
 * @param {Request} req La solicitud HTTP
 * @param {Response} res La respuesta HTTP
 */
export const getAllSATAXVTA = async (req, res) => {
  try {
    const salesTaxes = await SATAXVTA.findAll({});

    return res.json({
      data: salesTaxes,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Error interno del servidor." });
  }
};
