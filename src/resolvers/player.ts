import { Match } from "../entities/Match";

const Player = {
  matches(parent): Promise<Match[]> {
    return Match.find(
      { 
        where: { 
          $or: [
            { player1Id: parent.id.toString() }, 
            { player2Id: parent.id.toString() }
          ]
        }
      }
    );
  }
};

export default Player;