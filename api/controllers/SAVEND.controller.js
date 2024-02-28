import { getAllSAVEND } from "../services/SAVEND/SAVEND-get-all.js";

export const SAVENDController = {
  async getAll(req, res) {
    return getAllSAVEND(req, res);
  },
};
