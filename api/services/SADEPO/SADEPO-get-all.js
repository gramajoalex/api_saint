import { SADEPO } from "../../model";

/**
 * Obtiene todos los depósitos.
 *
 * @param {Request} req La solicitud HTTP
 * @param {Response} res La respuesta HTTP
 */
export const getAllSADEPO = async (req, res) => {
  try {
    const { active, depositId } = req.query;

    const where = {};

    if (active) {
      where.Activo = 1;
    }

    if (depositId) {
      where.CodUbic = depositId;
    }

    const deposits = await SADEPO.findAll({
      where,
      attributes: ["CodUbic", "Descrip"],
      order: [["CodUbic", "ASC"]],
    });

    return res.json({
      data: deposits,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Error interno del servidor." });
  }
};
