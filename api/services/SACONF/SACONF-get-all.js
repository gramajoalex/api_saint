import { SACONF } from "../../model";

/**
 * Obtiene todas las config.
 *
 * @param {Request} req La solicitud HTTP
 * @param {Response} res La respuesta HTTP
 */
export const getAllSACONF = async (req, res) => {
  try {
    const configs = await SACONF.findAll();

    return res.json({
      data: configs,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Error interno del servidor." });
  }
};
