import { Player } from "../entities/Player";

const Mutation = {
  createPlayer(_, args): Promise<Player> {
    const input = args.data;
    const player = new Player(input.firstName, input.lastName, input.teamLogoUrl, input.score);
    return player.save();
  }
};

export default Mutation;
