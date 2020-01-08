import { Player } from "../entities/Player";

const Match = {
  player1(parent): Promise<Player> {
    return Player.findOne(parent.player1Id);
  },
  player2(parent): Promise<Player> {
    return Player.findOne(parent.player2Id);
  }
};

export default Match;