import { getAllSATARJ } from "../services/SATARJ/SATARJ-get-all.js";

export const SATARJController = {
  async getAll(req, res) {
    return getAllSATARJ(req, res);
  },
};
