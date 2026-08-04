export type AdminContact = {
  id: string;
  name: string;
  role?: string;
  email?: string;
  phone?: string;
  socials?: { platform: string; url: string }[];
  note?: string;
};

export const adminContacts: AdminContact[] = [
  {
    id: 'roger',
    name: 'Roger Catalan',
    role: 'Primary Contact',
    email: 'rogerbc2000@gmail.com',
    phone: '+1 (310) 619-0182',
    socials: [
      { platform: 'Facebook', url: 'https://facebook.com/roger.example' },
      { platform: 'Instagram', url: 'https://instagram.com/roger.example' },
    ],
    note: 'Contact for donations, coordination, and inquiries.',
  },
  {
    id: 'admin2',
    name: 'Content Admin',
    role: 'Volunteer Admin',
    email: '',
    phone: '',
    socials: [
      { platform: 'Facebook', url: 'https://facebook.com/admin2.example' },
    ],
    note: 'Alternate contact for local coordination.',
  },
];