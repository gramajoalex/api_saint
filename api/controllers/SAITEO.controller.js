import { getAllSAITEO } from "../services/SAITEO/SAITEO-get-all.js";

export const SAITEOController = {
  async getAll(req, res) {
    return getAllSAITEO(req, res);
  },
};
