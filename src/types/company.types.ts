export type Company = {
  id?: string;
  name: string;
  address: {
    street: string;
    houseNumber: string;
    city: string;
    zip: string;
    country: string;
    latitude: number;
    longitude: number;
  };
  phone: string;
  email: string;
  logo?: string;
};
