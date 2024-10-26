
export interface ProfileDataType {
  ID?: string;
  name?: string;
  family_name?: string;
  phone?: string;
  user_type?: number;
  email?: string;
  image?: string;
  languages?: string;
  about?: string;
  identifier?: string;
  proceedings?: string;
  short_about?: string;
  strength?: string;
  tags?: string;
  what_to_except?: string;
  linked_in?: string;
  twitter?: string;
  instagram?: string;
  facebook?: string;
  timings?: any;
  pricings?: any;
}
export interface ProfileFormInputs {
  name?: string;
  family_name?: string;
  company?: string;
  designation?: string;
  tags?: string; //transformed ot type -> SkilsInputs
  city?: string;
  state?: string;
  pincode?: string;
  country?: string;
  about?: string;
  strength?: string;
  what_to_except?: string;
  phone?: string;
  email?: string;
  identifier?: string;
}

export interface SkilsInputs {
  id: number;
  value: string;
}

export interface LanguageInputs {
  id: number;
  value: string;
}

export interface SocialInputs {
  linked_in: string;
  twitter: string;
  instagram: string;
  facebook: string;
};

export interface QuestionFormInputs {
  name: string,
  family_name: string,
  question: string,
  question1: string,
  question2: string,
  about: string,
  email: string,
  company: string
}
