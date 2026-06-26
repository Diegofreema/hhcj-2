'use client';

import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {useForm} from "react-hook-form";
import {MemberResetType, memberResetValidator} from "@/features/members/validators";
import {zodResolver} from "@hookform/resolvers/zod";
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";


export const ResetPasswordForm = () => {
    const form = useForm<MemberResetType>({
        defaultValues: {
            email: '',

        },
        resolver: zodResolver(memberResetValidator)
    });

    const onSubmit = (data: MemberResetType) => {
        console.log(data);
    }
    return (
        <Form  {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <div className="space-y-2">
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input placeholder="Enter your email" {...field} />
                                </FormControl>

                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>




                <Button disabled={form.formState.isSubmitting} type="submit" className="w-full bg-primary hover:bg-primary-dark text-white">
                    Submit
                </Button>
            </form>
        </Form>
    );
};
