import { SATARJ } from "../../model";

/**
 * Obtiene todos los instrumentos de pagos.
 *
 * @param {Request} req La solicitud HTTP
 * @param {Response} res La respuesta HTTP
 */
export const getAllSATARJ = async (req, res) => {
  try {
    const paymentInstruments = await SATARJ.findAll({});

    return res.json({
      data: paymentInstruments,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Error interno del servidor." });
  }
};
