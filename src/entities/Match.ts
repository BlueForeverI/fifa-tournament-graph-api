import { Entity, BaseEntity, ObjectIdColumn, ObjectID, Column } from "typeorm";

@Entity()
export class Match extends BaseEntity {
  @ObjectIdColumn()
  id!: ObjectID;

  @Column('string')
  player1Id: ObjectID;

  @Column('string')
  player2Id: ObjectID;

  @Column()
  score1: number;

  @Column()
  score2: number;
}