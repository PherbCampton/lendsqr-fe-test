export interface LoanUserData {
  organisation: string;
  username: string;
  email: string;
  phoneNumber: string;
  dateJoined: string;
  status: "inactive" | "active" | "blacklisted" | "pending";
  personalInformation: {
    fullName: string;
    email: string;
    phoneNumber: string;
    bvn: string;
    gender: "male" | "female";
    "marital-status": "single" | "married";
    children: number;
    residentType: "parent" | "personal" | "rented";
  };
  educationAndEmployment: {
    levelOfEducation: string;
    employmentStatus: "employed" | "self-employed" | "unemployed";
    sectorOfEmployment: string;
    durationOfEmployment: string;
    officeEmail: string;
    monthlyIncome: string;
    loanRepayment: string;
  };
  socials: {
    twitterHandle: string;
    facebookHandle: string;
    instagramHandle: string;
  };
  guarantor: {
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    relationship: string;
  };
}
