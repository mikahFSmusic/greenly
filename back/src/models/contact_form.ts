import { IContactForm } from '../types/contact_form';
import { model, Schema } from 'mongoose';

const ContactFormSchema = new Schema(
  {
    first: {
      type: String
    },
    last: {
      type: String
    },
    email: {
      type: String
    },
    reason: {
      type: String
    },
    message: {
      type: String
    }
  }
);

export default model<IContactForm>("contact_form", ContactFormSchema);