export interface PersonalInformation {
    fullName: string;
    phoneNumber: string;
    email: string;
    bvn: string;
    marital: string;
    gender: string;
    children: string;
    typeOfResidence: string;
  }
  
  export interface EducationAndEmploymentInformation {
    levelOfEducation: string;
    employmentStatus: string;
    sectorOfEmployment: string;
    durationOfEmployment: string;
    officeEmail: string;
    monthlyIncome: string;
    loanRepayment: string;
  }
  
  export interface SocialsInformation {
    twitter: string;
    facebook: string;
    instagram: string;
  }
  
  export interface Guarantor {
    fullName: string;
    phoneNumber: string;
    email: string;
    relationship: string;
  }
  
  export interface User {
    organization: string;
    usersTier: number; // Should be between 1 and 3
    loanAmount: number;
    bankName: string;
    accountNumber: number;
    username: string;
    email: string;
    phoneNumber: string;
    dateJoined: string;
    status: string;
    id: string;
    personalInformation: PersonalInformation;
    educationAndEmploymentInformation: EducationAndEmploymentInformation;
    socialsInformation: SocialsInformation;
    guarantor: Guarantor[];
  }
  
  

export type IFiltering = {
    [key: string]: string;
  } | null

  export interface IFilterOptions {
    key: string;
    type: string;
    label: string;
    options: string[] | null
  }