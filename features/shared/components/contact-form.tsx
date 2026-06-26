'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useForm } from 'react-hook-form';
import {
  ContactSchemaType,
  contactSchemaValidator,
} from '@/features/shared/validators';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { sendEmail } from '@/features/contact/services';
import { toast } from 'sonner';

export function ContactForm() {
  const form = useForm<ContactSchemaType>({
    defaultValues: {
      email: '',
      message: '',
      name: '',
      subject: '',
    },
    resolver: zodResolver(contactSchemaValidator),
  });

  const onSubmit = async (values: ContactSchemaType) => {
    try {
      await sendEmail({
        email: values.email,
        fullName: values.name,
        message: values.message,
        subject: values.subject,
      });
      toast.success('Email sent successfully');
    } catch {
      toast.error('Failed to send email');
    }
  };

  return (
    <Form {...form}>
      <motion.form
        onSubmit={form.handleSubmit(onSubmit)}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="space-y-6 p-8 bg-muted/50 border-futuristic rounded-lg"
      >
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Your Name" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="space-y-2">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="Your Email" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>

        <div className="space-y-2">
          <FormField
            control={form.control}
            name="subject"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Subject</FormLabel>
                <FormControl>
                  <Input placeholder="Subject" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="space-y-2">
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Message</FormLabel>
                <FormControl>
                  <Textarea
                    rows={5}
                    className={'resize-none'}
                    placeholder="Type your message below..."
                    {...field}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <Button
          disabled={form.formState.isSubmitting}
          type="submit"
          className="w-full bg-primary hover:bg-primary-dark text-white"
        >
          Send message
        </Button>
      </motion.form>
    </Form>
  );
}
