import { getAllSAFACT } from "../services/SAFACT/SAFACT-get-all.js";

export const SAFACTController = {
  async getAll(req, res) {
    return getAllSAFACT(req, res);
  },
};
