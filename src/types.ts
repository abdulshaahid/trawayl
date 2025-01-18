export type PartnerType = 'tour' | 'vehicle' | 'strangers';

export interface RegistrationStep {
  id: number;
  title: string;
  description: string;
}

export interface BasicDetails {
  companyName: string;
  ownerName: string;
  phone: string;
  address: string;
  location: {
    lat: number;
    lng: number;
  };
}