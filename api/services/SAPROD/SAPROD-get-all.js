import { SAPROD } from "../../model";

/**
 * Obtiene todos los productos con paginación.
 *
 * @param {Request} req La solicitud HTTP
 * @param {Response} res La respuesta HTTP
 */
export const getAllSAPROD = async (req, res) => {
  try {
    const { active, page, pageSize } = req.query;

    const pageNumber = parseInt(page) || 1;
    const elementsPerPage = parseInt(pageSize, 10) || 10;

    const where = {};

    if (active) {
      where.Activo = 1;
    }
    // Calcula el offset basado en el número de página y la cantidad de elementos por página.
    const offset = (pageNumber - 1) * elementsPerPage;

    // Utiliza los valores de 'limit' y 'offset' para la paginación.
    const products = await SAPROD.findAll({
      where,
      limit: elementsPerPage,
      offset: offset,
      attributes: ["CodProd", "Descrip"],
      order: [["CodProd", "ASC"]],
    });

    // Obtiene el total de registros para calcular el total de páginas.
    const totalItems = await SAPROD.count();
    const totalPages = Math.ceil(totalItems / elementsPerPage);

    // Devuelve los productos junto con información adicional de la paginación.
    return res.json({
      data: products,
      pagination: {
        page: pageNumber,
        elementsPerPage,
        totalItems,
        totalPages,
      },
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Error interno del servidor." });
  }
};
