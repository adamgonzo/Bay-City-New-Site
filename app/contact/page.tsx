import type { Metadata } from 'next'
import ContactMe from '@/components/contact_me'

export const metadata: Metadata = {
  title: {
    absolute: 'Contact Me | Bay City General Glass'
  },
  metadataBase: new URL('https://www.baycitygeneralglass.com'),
  description: 'Contact Me Form For Glass Installations',
  openGraph: {
    title: 'Contact Me | Bay City General Glass',
    description: 'Contact Form To Contact Me For Glass Installations',
    url: 'https://www.baycitygeneralglass.com/contact',
    siteName: 'Bay City General Glass',
    locale: 'en-US',
    type: 'website'
  },
  keywords:
    'commercial glass services, storefront glass, glass mirrors, commercial doors, emergency board-up services, expert glass solutions, Bay City General Glass'
}

export default function Contact() {
  return (
    <section>
      <ContactMe />
    </section>
  )
}
