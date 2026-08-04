export type DonationMethod = {
  id: string;
  label: string;
  details: string;
};

export const donationMethods: DonationMethod[] = [
  {
    id: 'bank',
    label: 'Bank transfer (example)',
    details: 'Bank Name: Example Bank\nAccount Name: I AM FOUNDATION\nAccount Number: 123-456-789',
  },
  {
    id: 'gcash',
    label: 'GCash',
    details: 'GCash Number: +63917-000-0000 (I AM FOUNDATION)',
  },
  {
    id: 'paymaya',
    label: 'PayMaya',
    details: 'PayMaya Number: +63917-000-0000 (I AM FOUNDATION)',
  },
  {
    id: 'offline',
    label: 'Contact admin for other methods',
    details: 'Please contact Roger at rogerbc2000@gmail.com or (310) 619-0182 for other donation methods.',
  },
];