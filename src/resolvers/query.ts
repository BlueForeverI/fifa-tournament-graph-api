import { Player } from "../entities/Player";

const Query = {
        players() :Promise<Player[]> {
          return Player.find();
        }
};

export default Query;