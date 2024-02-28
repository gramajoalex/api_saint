import { getAllSATAXES } from "../services/SATAXES/SATAXES-get-all.js";

export const SATAXESController = {
  async getAll(req, res) {
    return getAllSATAXES(req, res);
  },
};
