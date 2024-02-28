import { getAllSAPROD } from "../services/SAPROD/SAPROD-get-all.js";

export const SAPRODController = {
  async getAll(req, res) {
    return getAllSAPROD(req, res);
  },
};
