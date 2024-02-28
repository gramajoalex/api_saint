import { SATAXES } from "../../model";

/**
 * Obtiene todos los taxes.
 *
 * @param {Request} req La solicitud HTTP
 * @param {Response} res La respuesta HTTP
 */
export const getAllSATAXES = async (req, res) => {
  try {
    const taxes = await SATAXES.findAll();

    return res.json({
      data: clients,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Error interno del servidor." });
  }
};
