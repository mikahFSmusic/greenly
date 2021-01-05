import { Response, Request } from 'express';
import { IEmail } from '../types/email';
import EmailSchema from '../models/email';
import { IContactForm } from '../types/contact_form';
import ContactFormSchema from '../models/contact_form';
const addEmail = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const body = req.body

    console.log(body)
    const email: IEmail = new EmailSchema({
      email: body.email
    })
    const newEmail = await email.save();
    res.status(201).json({ message: "Email Submitted ", newEmail })
    console.log("Email submitted to mongo")

  } catch (error) {
    throw error
  }
}

const addContactForm = async (
  req: Request,
  res: Response
): Promise<void> => {
  try{
    const body = req.body
    console.log("REQUEST CONTACT FORM")
    console.log(body)
    const contactForm: IContactForm = new ContactFormSchema({
      first: body.first,
      last: body.last,
      email: body.email,
      reason: body.reason,
      message: body.message
    })
    const newContactForm = await contactForm.save();
    res.status(201).json({ message: "Contact Form Submitted", newContactForm})
    console.log("Contact form submitted to mongo")
  } catch (error) {
    throw error
  }
}

export { addEmail, addContactForm }