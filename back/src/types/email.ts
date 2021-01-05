import { Document } from 'mongoose';

export interface IEmail extends Document {
  email: String;
}

