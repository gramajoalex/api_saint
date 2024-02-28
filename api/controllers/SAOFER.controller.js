import { getAllSAOFER } from "../services/SAOFER/SAOFER-get-all.js";

export const SAOFERController = {
  async getAll(req, res) {
    return getAllSAOFER(req, res);
  },
};
