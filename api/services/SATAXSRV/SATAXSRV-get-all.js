import { SATAXSRV } from "../../model";

/**
 * Obtiene los impuestos en servicios.
 *
 * @param {Request} req La solicitud HTTP
 * @param {Response} res La respuesta HTTP
 */
export const getAllSATAXSRV = async (req, res) => {
  try {
    const serviceTaxes = await SATAXSRV.findAll({});

    return res.json({
      data: serviceTaxes,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Error interno del servidor." });
  }
};
