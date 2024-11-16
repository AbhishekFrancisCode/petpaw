export interface Pet {
  id?: string;
  owner_id?: string;
  name?: string;
  nickname?: string;
  species?: string;
  breed?: string;
  date_of_birth?: Date;
  age?: number;
  gender?: string;
  neutered?: boolean;
  vaccinated?: boolean;
  microchipped?: boolean;
  activity_level?: string;
  body_shape?: string;
  eating_habits?: string;
  allergies?: string[];
  preferred_foods?: string[];
  medical_history?: MedicalHistory[];
  note?: Note;
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
