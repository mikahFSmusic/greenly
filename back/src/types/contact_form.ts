import { Document } from 'mongoose';

export interface IContactForm extends Document {
  first: String,
  last: String,
  email: String,
  reason: String,
  message: String
}