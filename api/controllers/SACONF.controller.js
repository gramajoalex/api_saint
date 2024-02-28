import { getAllSACONF } from "../services/SACONF/SACONF-get-all.js";

export const SACONFController = {
  async getAll(req, res) {
    return getAllSACONF(req, res);
  },
};
