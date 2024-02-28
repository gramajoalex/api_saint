import { getAllSADEPO } from "../services/SADEPO/SADEPO-get-all.js";

export const SADEPOController = {
  async getAll(req, res) {
    return getAllSADEPO(req, res);
  },
};
