import { Router } from 'express'
import { addContactForm, addEmail } from '../controllers/'

const router: Router = Router();

router.post("/submit-email", addEmail);

router.post("/submit-contact-form", addContactForm)

export default router;