export interface TeamMember {
  id: number;
  name: string;
  role: string;
  expertise: string;
  contact: string;
  image: string;
  description: string;
}

export interface Branch {
  id: string;
  name: string;
  address: string;
  phone: string;
  hoursRegular: string;
  hoursWeekend: string;
  mapLink: string;
  embedSrc: string;
}

export interface Course {
  id: number;
  title: string;
  description: string;
  gradeLevel: string;
}

export interface GalleryItem {
  id: number;
  src: string;
  alt: string;
  category: string;
  caption?: string;
}