import { Metadata } from 'next';
import { ContactUsClientPage } from './_components/contact-client';

export const metadata: Metadata = {
  title: 'Contact Us - HHCJ Foundation',
  description: 'Get in touch with HHCJ Foundation',
};
const ContactUsPage = () => {
  return <ContactUsClientPage />;
};
export default ContactUsPage;
