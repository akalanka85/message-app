import { IMessage } from "./IMessage";

export interface IRecipient {
  id: number;
  name: string;
  messages: IMessage[];
}