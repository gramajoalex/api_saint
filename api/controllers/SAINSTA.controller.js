import { getAllSAINSTA } from "../services/SAINSTA/SAINSTA-get-all.js";

export const SAINSTAController = {
  async getAll(req, res) {
    return getAllSAINSTA(req, res);
  },
};
