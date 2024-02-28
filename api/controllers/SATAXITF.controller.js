import { getAllSATAXITF } from "../services/SATAXITF/SATAXITF-get-all.js";

export const SATAXITFController = {
  async getAll(req, res) {
    return getAllSATAXITF(req, res);
  },
};
