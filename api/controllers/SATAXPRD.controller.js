import { getAllSATAXPRD } from "../services/SATAXPRD/SATAXPRD-get-all.js";

export const SATAXPRDController = {
  async getAll(req, res) {
    return getAllSATAXPRD(req, res);
  },
};
