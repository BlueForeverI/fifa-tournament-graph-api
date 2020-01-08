import { Player } from "../entities/Player";
import { Match } from "../entities/Match";

const Mutation = {
  createPlayer(_, {data}): Promise<Player> {
    const player = new Player(data.firstName, data.lastName, data.teamLogoUrl, data.score);
    return player.save();
  },
  async deletePlayer(_, { id }): Promise<Player> {
    const player = await Player.findOne(id);
    return player.remove();
  },
  async createMatch(_, { data }): Promise<Match> {
    const player1 = await Player.findOne(data.player1Id);
    const player2 = await Player.findOne(data.player2Id);

    if (data.score1 > data.score2) {
      player1.score += 3;
    } else if (data.score1 < data.score2) {
      player2.score += 3;
    } else {
      player1.score++;
      player2.score++;
    }

    await player1.save();
    await player2.save();

    return Match.create(data).save();
  }
};

export default Mutation;
