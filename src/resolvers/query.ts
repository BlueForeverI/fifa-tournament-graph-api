import { Player } from "../entities/Player";
import { Match } from "../entities/Match";

const Query = {
  players(_, { where }): Promise<Player[]> {
    if (!where) {
      return Player.find();
    }

    return Player.find(where);
  },
  player(_, { id }): Promise<Player> {
    return Player.findOne(id);
  },
  matches() {
    return Match.find();
  }
};

export default Query;