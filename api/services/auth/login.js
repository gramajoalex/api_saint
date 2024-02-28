import jwt from "jsonwebtoken";
import { sequelize } from "../../model";

const generateToken = (payload) =>
  jwt.sign(payload, process.env.JWT_SECRET || "secret", {
    expiresIn: process.env.JWT_EXPIRATION || "12h",
  });

/**
 * Obtiene la clave del usuario de la base de datos.
 */
const getUserKeyByUsername = async (username) => {
  const query = `
    SELECT CodUsua, DESCRIP, REPLACE(
      CAST(SUBSTRING(SData3, 175, 1) AS VARCHAR) +
      CAST(SUBSTRING(SData1, 33, 1) AS VARCHAR) +
      CAST(SUBSTRING(SData2, 90, 1) AS VARCHAR) +
      CAST(SUBSTRING(SData3, 14, 1) AS VARCHAR) +
      CAST(SUBSTRING(SData1, 207, 1) AS VARCHAR) +
      CAST(SUBSTRING(SData3, 111, 1) AS VARCHAR) +
      CAST(SUBSTRING(SData3, 145, 1) AS VARCHAR) +
      CAST(SUBSTRING(SData2, 180, 1) AS VARCHAR) +
      CAST(SUBSTRING(SData2, 9, 1) AS VARCHAR) +
      CAST(SUBSTRING(SData3, 53, 1) AS VARCHAR),
      ' ', ''
    ) AS CLAVE
    FROM SSUSRS
    WHERE CodUsua = :username
  `;
  const results = await sequelize.query(query, {
    replacements: { username: username }, 
    type: sequelize.QueryTypes.SELECT,
  });

  return results[0];
};

/**
 * Servicio de login.
 *
 * @param {Request} req La solicitud HTTP
 * @param {Response} res La respuesta HTTP
 */
export const Login = async (req, res) => {
  try {
    const { username, password } = req.body; // Asume que la solicitud contiene 'username' y 'password'

    // Obtener la clave del usuario de la base de datos
    const user = await getUserKeyByUsername(username);

    // Si no se encuentra el usuario o la clave no coincide, enviar error
    if (!user || user.CLAVE !== password) {
      return res
        .status(401)
        .json({ error: "Usuario o contraseña incorrectos." });
    }

    // Crear el payload para el token, sin incluir roles por ahora
    const tokenPayload = {
      user: {
        CodUsua: user.CodUsua,
        DESCRIP: user.DESCRIP,
      },
    };

    // Generar el token
    const token = generateToken(tokenPayload);

    // Enviar el token en la respuesta
    return res.json({ token });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Error interno del servidor." });
  }
};
