/**
 * surgipal_dev
 * API
 *
 * OpenAPI spec version: 1.5
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

export interface Item120 {
  surgeryId?: number;
  patient: string;
  term?: string;
  createdAt: string;
  reschedules?: string;
  cancelled?: number;
  completed?: number;
  approved?: number;
  speciality: string;
  answersBoxId?: number;
  cardId?: number;
  preferenceCardName?: string;
  initials?: string;
  surgeryTime?: string;
  admissionStatus?: string;
  cpt?: string;
  diagnosisCode?: string;
  surgerySnapshot?: number;
  hospitalId?: number;
  hospitalEmail: string;
  hospital?: string;
  doctorFosId?: number;
  doctorEmail: string;
  doctorDataId?: number;
  doctorImage?: string;
  firstName?: string;
  lastName?: string;
  coordinatorName?: string;
  coordinatorPhone?: string;
  coordinatorEmail?: string;
  officePhone?: string;
  pager?: string;
  companyName?: string;
  billingCoordinatorName?: string;
  billingCoordinatorPhone?: string;
  billingCoordinatorEmail?: string;
  managerName?: string;
  managerPhone?: string;
  managerEmail?: string;
}