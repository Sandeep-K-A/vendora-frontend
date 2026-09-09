export interface Subcategory {
  _id: string;
  name: string;
  slug: string;
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
