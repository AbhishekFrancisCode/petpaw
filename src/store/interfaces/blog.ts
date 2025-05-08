export interface Blog {
  title: string;
  slug: string;
  heroImage: HeroImage;
}

export interface HeroImage {
  src: string;
  width: number;
  height: number;
  format: string;
}
