import { getAllSAITEMFAC } from "../services/SAITEMFAC/SAITEMFAC-get-all.js";

export const SAITEMFACController = {
  async getAll(req, res) {
    return getAllSAITEMFAC(req, res);
  },
};
