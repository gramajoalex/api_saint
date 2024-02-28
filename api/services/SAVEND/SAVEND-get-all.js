import { SAVEND } from "../../model";

/**
 * Obtiene todos los vendedores.
 *
 * @param {Request} req La solicitud HTTP
 * @param {Response} res La respuesta HTTP
 */
export const getAllSAVEND = async (req, res) => {
  try {
    const sellers = await SAVEND.findAll({});

    return res.json({
      data: sellers,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Error interno del servidor." });
  }
};
