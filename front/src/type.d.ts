interface IEmail {
  _id: string
  email: string
}

interface IContactForm {
  _id: string
  first: string
  last: string
  email: string
  reason: string
  message: string
}

type ApiDataType = {
  message: string
  status: string
  damaged_defect?: IEmail
}