import {z} from 'zod';

export const memberLoginValidator =  z.object({
    email: z.email({error: 'Please enter valid email'}).min(1, 'Email is required'),
    password: z.string().min(1, 'Password is required'),
});
export const memberResetValidator =  z.object({
    email: z.email({error: 'Please enter valid email'}).min(1, 'Email is required'),

});




export type MemberLoginType = z.infer<typeof memberLoginValidator>;
export type MemberResetType = z.infer<typeof memberResetValidator>;