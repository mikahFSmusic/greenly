import { IEmail } from '../types/email';
import { model, Schema } from 'mongoose';

const EmailSchema = new Schema(
  {
    email: {
       type: String
    }
  }
);

export default model<IEmail>("email", EmailSchema);