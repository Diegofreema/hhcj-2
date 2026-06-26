import {z} from 'zod';


export const contactSchemaValidator = z.object({
    name: z.string().min(1, 'Name is required'),
    email: z.email({error: 'Please add a valid email'}).min(1, 'Email is required'),
    subject: z.string().min(2, 'Subject is required'),
    message: z.string().min(3, 'Message is required'),
})

export type ContactSchemaType = z.infer<typeof contactSchemaValidator>