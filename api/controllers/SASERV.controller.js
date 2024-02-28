import { getAllSASERV } from "../services/SASERV/SASERV-get-all.js";

export const SASERVController = {
  async getAll(req, res) {
    return getAllSASERV(req, res);
  },
};
