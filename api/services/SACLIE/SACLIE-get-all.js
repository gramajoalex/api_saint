import { SACLIE } from "../../model";

/**
 * Obtiene todos los clientes.
 *
 * @param {Request} req La solicitud HTTP
 * @param {Response} res La respuesta HTTP
 */
export const getAllSACLIE = async (req, res) => {
  try {
    const { clientId } = req.query;

    const where = {};

    if (clientId) {
      where.CodClie = clientId;
    }

    const clients = await SACLIE.findAll({
      where,
      attributes: ["CodClie", "Descrip"],
      order: [["CodClie", "ASC"]],
    });

    return res.json({
      data: clients,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Error interno del servidor." });
  }
};
