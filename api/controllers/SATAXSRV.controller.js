import { getAllSATAXSRV } from "../services/SATAXSRV/SATAXSRV-get-all.js";

export const SATAXSRVController = {
  async getAll(req, res) {
    return getAllSATAXSRV(req, res);
  },
};
