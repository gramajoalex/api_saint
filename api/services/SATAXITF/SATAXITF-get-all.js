import { SATAXITF } from "../../model";

/**
 * Obtiene los impuestos en items de facturas.
 *
 * @param {Request} req La solicitud HTTP
 * @param {Response} res La respuesta HTTP
 */
export const getAllSATAXITF = async (req, res) => {
  try {
    const taxOnSale = await SATAXITF.findAll({});

    return res.json({
      data: taxOnSale,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Error interno del servidor." });
  }
};
