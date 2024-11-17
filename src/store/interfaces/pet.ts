export interface Pet {
  id?: string;
  owner_id?: string;
  petname?: string;
  nickname?: string;
  weight?: string;
  species?: string;
  breed?: string;
  // dob?: Date;
  age?: number;
  gender?: string;
  neutered?: boolean;
  vaccinated?: boolean;
  microchipped?: boolean;
  activity_level?: string;
  body_shape?: string;
  eating_habits?: string;
  diet_plan?: [];
  allergies?: string[];
  preferred_foods?: string[];
  medical_history?: MedicalHistory[];
  note?: Note;
}

export interface Diet {
  id?: string;
  name?: string;
}

export interface MedicalHistory {
  date?: Date;
  condition?: string;
  treatment?: string;
}

export interface Note {
  text?: string;
  last_updated?: Date;
}
