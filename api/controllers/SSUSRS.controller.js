import { getAllSSUSRS } from "../services/SSUSRS/SSUSRS-get-all.js";

export const SSUSRSController = {
  async getAll(req, res) {
    return getAllSSUSRS(req, res);
  },
};
