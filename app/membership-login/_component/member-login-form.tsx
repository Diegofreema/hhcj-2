'use client';

import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {useForm} from "react-hook-form";
import {MemberLoginType, memberLoginValidator} from "@/features/members/validators";
import {zodResolver} from "@hookform/resolvers/zod";
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";


export const MemberLoginForm = () => {
    const form = useForm<MemberLoginType>({
        defaultValues: {
            email: '',
            password: ""
        },
        resolver: zodResolver(memberLoginValidator)
    });

    const onSubmit = (data: MemberLoginType) => {
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

                <div className="space-y-2">
                    <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Password</FormLabel>
                                <FormControl>
                                    <Input placeholder="******" {...field} />
                                </FormControl>

                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>

                <div className="flex items-center justify-between text-sm">
                    <label className="flex items-center gap-2">
                        <input type="checkbox" className="rounded" />
                        <span className="text-muted-foreground">Remember me</span>
                    </label>
                    <a href="/reset-password" className="text-primary hover:text-primary-dark transition-smooth">
                        Forgot password?
                    </a>
                </div>

                <Button disabled={form.formState.isSubmitting} type="submit" className="w-full bg-primary hover:bg-primary-dark text-white">
                    Sign In
                </Button>
            </form>
        </Form>
    );
};
