import { Gift } from '../../index';

export class Enum<T> {
  public constructor(public  value: T ) {}
  public toString() {
    return this.value.toString();
  }
}

export class MessageType extends Enum<string> {
    public static  Wish = new Enum('Wish');
    public static  Congratulation = new Enum('Congratulation');
};

export interface Message {
  id: number;
  type: MessageType;
  gift?: Gift;
  babyName?: string;
  birthdate?: Date;
  message?: string;
};

