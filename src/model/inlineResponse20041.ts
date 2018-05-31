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

export interface InlineResponse20041 {
  id?: number;
  doctorId?: number;
  specialtyId?: number;
  answerBoxId?: number;
  surgeryStatusId?: number;
  patient?: string;
  ssn?: string;
  term?: string;
  createdAt?: string;
  reschedules?: string;
  cancelled?: number;
  cpt?: string;
  completed?: number;
  initials?: string;
  diagnosisCode?: string;
  hospitalId?: number;
  surgeryTime?: string;
  admissionStatus?: string;
  approved?: number;
}
