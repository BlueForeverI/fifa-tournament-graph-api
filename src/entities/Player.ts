import { Entity, ObjectIdColumn, ObjectID, Column, BaseEntity } from "typeorm";

@Entity()
export class Player extends BaseEntity {
  @ObjectIdColumn()
  id!: ObjectID;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  teamLogoUrl: string;

  @Column()
  score: number;

  constructor(firstName: string, lastName: string, teamLogoUrl: string, score: number) {
    super();
    this.firstName = firstName;
    this.lastName = lastName;
    this.teamLogoUrl = teamLogoUrl;
    this.score = score;
  }
}
