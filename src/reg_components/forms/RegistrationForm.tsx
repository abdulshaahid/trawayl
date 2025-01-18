import React from 'react';
import { BasicDetailsForm } from './BasicDetailsForm';
import { ProfileForm } from './ProfileForm';
import { DetailsForm } from './DetailsForm';
import { KYCForm } from './KYCForm';
import { ContractForm } from './ContractForm';
import type { PartnerType } from '../../types';

interface RegistrationFormProps {
  type: PartnerType;
  currentStep: number;
  onStepComplete: (step: number) => void;
}

export function RegistrationForm({ type, currentStep, onStepComplete }: RegistrationFormProps) {
  const handleSubmit = (data: any) => {
    onStepComplete(currentStep);
  };

  switch (currentStep) {
    case 0:
      return <BasicDetailsForm onSubmit={handleSubmit} />;
    case 1:
      return <ProfileForm onSubmit={handleSubmit} />;
    case 2:
      return <DetailsForm type={type} onSubmit={handleSubmit} />;
    case 3:
      return <KYCForm onSubmit={handleSubmit} />;
    case 4:
      return <ContractForm onSubmit={handleSubmit} />;
    default:
      return null;
  }
}