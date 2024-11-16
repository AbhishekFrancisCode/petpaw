import { Pet } from "./pet";

export interface User {
  id?: string;
  name?: string;
  age?: number;
  gender?: string;
  address?: Address;
  contact?: Contact;
  pets?: Pet;
}

export interface Address {
  street?: string;
  city?: string;
  state?: string;
  zipcode?: string;
}

export interface Contact {
  email?: string;
  phone?: string;
}
