import React from 'react';
import { BasicDetailsForm } from './BasicDetailsForm';
import { ProfileForm } from './ProfileForm';
import { EventDetailsForm } from './EventDetailsForm';
import { KYCForm } from './KYCForm';
import { ContractForm } from './ContractForm';

interface StrangersMeetFormProps {
  currentStep: number;
  onStepComplete: (step: number, data: any) => void;
}

export function StrangersMeetForm({ currentStep, onStepComplete }: StrangersMeetFormProps) {
  const handleBasicDetailsSubmit = (data: any) => {
    onStepComplete(0, data);
  };

  const handleProfileSubmit = (data: any) => {
    onStepComplete(1, data);
  };

  const handleEventDetailsSubmit = (data: any) => {
    onStepComplete(2, data);
  };

  const handleKYCSubmit = (data: any) => {
    onStepComplete(3, data);
  };

  const handleContractSubmit = () => {
    onStepComplete(4, {});
  };

  switch (currentStep) {
    case 0:
      return <BasicDetailsForm onSubmit={handleBasicDetailsSubmit} />;
    case 1:
      return <ProfileForm onSubmit={handleProfileSubmit} />;
    case 2:
      return <EventDetailsForm onSubmit={handleEventDetailsSubmit} />;
    case 3:
      return <KYCForm onSubmit={handleKYCSubmit} />;
    case 4:
      return <ContractForm onSubmit={handleContractSubmit} />;
    default:
      return null;
  }
}