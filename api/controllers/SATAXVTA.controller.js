import { getAllSATAXVTA } from "../services/SATAXVTA/SATAXVTA-get-all.js";

export const SATAXVTAController = {
  async getAll(req, res) {
    return getAllSATAXVTA(req, res);
  },
};
