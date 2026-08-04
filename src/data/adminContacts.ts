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
    id: 'joseph',
    name: 'Joseph Vincent Hue Catalan',
    role: 'Pastor',
    email: 'joseph@example.org',
    phone: '+63 917-000-0001',
    socials: [
      { platform: 'Facebook', url: 'https://facebook.com/joseph.catalan' },
      { platform: 'Instagram', url: 'https://instagram.com/joseph.catalan' },
    ],
    note: 'Pastor and primary contact for donation coordination and pastoral inquiries.',
  },
  {
    id: 'jocelyn',
    name: 'Jocelyn Perez',
    role: 'Teacher',
    email: 'jocelyn@example.org',
    phone: '+63 917-000-0002',
    socials: [
      { platform: 'Facebook', url: 'https://facebook.com/jocelyn.perez' },
      { platform: 'LinkedIn', url: 'https://linkedin.com/in/jocelyn-perez' },
    ],
    note: 'Teacher and community outreach coordinator.',
  },
  {
    id: 'john',
    name: 'John Reyes',
    role: 'Programs Coordinator',
    email: 'john@example.org',
    phone: '+63 917-000-0003',
    socials: [
      { platform: 'Facebook', url: 'https://facebook.com/john.reyes' },
      { platform: 'Twitter', url: 'https://twitter.com/johnreyes' },
    ],
    note: 'Coordinates field programs and local partnerships.',
  },
  {
    id: 'angela',
    name: 'Angela Cruz',
    role: 'Volunteer Lead',
    email: 'angela@example.org',
    phone: '+63 917-000-0004',
    socials: [
      { platform: 'Instagram', url: 'https://instagram.com/angela.cruz' },
    ],
    note: 'Volunteer coordination and donor relations.',
  },
  {
    id: 'peter',
    name: 'Peter Tan',
    role: 'Communications',
    email: 'peter@example.org',
    phone: '+63 917-000-0005',
    socials: [
      { platform: 'Facebook', url: 'https://facebook.com/peter.tan' },
      { platform: 'LinkedIn', url: 'https://linkedin.com/in/peter-tan' },
    ],
    note: 'Media and public communications contact.',
  },
];