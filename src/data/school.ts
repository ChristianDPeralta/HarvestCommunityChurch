export interface SchoolGalleryItem {
  src: string;
  alt: string;
}

export interface SchoolGallerySection {
  title: string;
  description: string;
  items: SchoolGalleryItem[];
}

const createItems = (folder: string, files: string[], label: string): SchoolGalleryItem[] =>
  files.map((file) => ({
    src: `/HCLC/2025-2026/pictures/${folder}/${file}`,
    alt: `${label} - ${file}`,
  }));

const nurseryOne2024 = createItems('N1 2024', [
  'Aldo.jpg',
  'Cloe.jpg',
  'Doc.jpg',
  'Ezekiel.jpg',
  'Heidi.jpg',
  'Hope.jpg',
  'jaliyah.jpg',
  'JM.jpg',
  'Kim.jpg',
  'Nash.jpg',
  'Paolo.jpg',
  'Ryzen.jpg',
  'Seri.jpg',
  'Sophia.jpg',
  'Zeyah.jpg',
], 'N1 2024 student portrait');

const nurseryOne2026 = createItems('N1 2026 pix', [
  'abed.jpg',
  'Atarah.jpg',
  'Azer.jpg',
  'Calia.jpg',
  'Calix.jpg',
  'Ezekiah.jpg',
  'Jade.jpg',
  'Luna.jpg',
  'Priam.jpg',
  'Priam1.jpg',
  'Royce.jpg',
], 'N1 2026 student portrait');

const nurseryOneClass = createItems('n1 class px', [
  'Class3.jpg',
], 'N1 classroom moment');

const kinderTwo2026 = createItems('K2 2026 pix', [
  'Alexis.jpg',
  'Alyanna.jpg',
  'EJ.jpg',
  'Heidi.jpg',
  'Hope.jpg',
  'Kim.jpg',
  'Morisette.jpg',
  'Paul.jpg',
  'Seri.jpg',
], 'K2 2026 student portrait');

const kinderTwoClass = createItems('K2 class px', [
  'Class1.jpg',
  'Class2.jpg',
  '_DSC1273.JPG',
  '_DSC1291.JPG',
  '_DSC1604.JPG',
], 'K2 classroom moment');

export const schoolStats = [
  { label: 'Student portraits', value: '40+' },
  { label: 'Class groups', value: '2' },
  { label: 'School year', value: '2025-2026' },
  { label: 'Mission', value: 'Faith-based' },
];

export const schoolGallerySections: SchoolGallerySection[] = [
  {
    title: 'Nursery 1',
    description:
      'This collection reflects the early learning environment for our youngest students. It includes individual portraits and classroom moments that show the warmth, structure, and encouragement that guide each child’s first steps in school.',
    items: [...nurseryOne2024, ...nurseryOne2026, ...nurseryOneClass],
  },
  {
    title: 'Kinder 2',
    description:
      'These images highlight the Kinder 2 group and the progress students make as they grow in confidence, learning, and community. The portraits and classroom scenes capture both the joy of childhood and the purpose of a caring educational setting.',
    items: [...kinderTwo2026, ...kinderTwoClass],
  },
];
