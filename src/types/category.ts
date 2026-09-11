export interface SpecField {
  key: string;
  label: string;
  required: boolean;
}

export interface Subcategory {
  _id: string;
  name: string;
  slug: string;
  specFields: SpecField[];
}

export interface Category {
  _id: string;
  name: string;
  slug: string;
  description?: string;
  image?: string;
  subcategories: Subcategory[];
  isActive: boolean;
}
