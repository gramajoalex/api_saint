import { getAllSACLIE } from "../services/SACLIE/SACLIE-get-all.js";

export const SACLIEController = {
  async getAll(req, res) {
    return getAllSACLIE(req, res);
  },
};
