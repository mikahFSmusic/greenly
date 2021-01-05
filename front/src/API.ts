import axios, { AxiosResponse } from 'axios';

const baseUrl: string = "http://localhost:4000";

export const addEmail = async (
  inputEmail: string
): Promise<AxiosResponse<ApiDataType>> => {
  console.log("Add email initiated")
  try {
    const email: Omit<IEmail, "_id"> = {
      email: inputEmail
    };
    const saveEmail: AxiosResponse<ApiDataType> = await axios.post(
      baseUrl + "/submit-email",
      email
    );
    console.log("response received from backend")
    console.log(saveEmail)
    return saveEmail;
  } catch (error) {
    throw new Error(error)
  }
}

export const addContactForm = async (
  formData: IContactForm
): Promise<AxiosResponse<ApiDataType>> => {
  console.log("Contact Form submit initiated")
  try {
    const contactForm: Omit<IContactForm, "_id"> = {
      first: formData.first,
      last: formData.last,
      email: formData.email,
      reason: formData.reason,
      message: formData.message
    };
    const saveContactForm: AxiosResponse<ApiDataType> = await axios.post(
      baseUrl + "/submit-contact-form",
      contactForm
    )
    return saveContactForm
  } catch(error) {
    throw new Error(error)
  }
}