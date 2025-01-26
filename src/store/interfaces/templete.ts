export interface ButtonProps {
    title: string;
    title_color?: string;
    link_to?: string;
    color?: string;
    outlineButton?: boolean;
  }
  
  export interface ImagePropsType {
    title?: string;
    title_color?: string;
    image_link: string;
    link_to?: string;
    color?: string;
    description?: string;
  }
  
  export interface TempletProps {
    title: string;
    title_color?: string;
    sub_title?: string;
    sub_title_color?: string;
    section_color?: string;
    buttons?: ButtonProps[];
    images?: ImagePropsType[];
    steps_count?: boolean;
  }