import { endpoint } from 'helpers/endpoints';

export const patient = {
    createPatient: () => `${endpoint.baseUrl}/patient`,
    listPatient: () => `${endpoint.baseUrl}/patient`,
    listMedicamentByPatient: (id: string) => `${endpoint.baseUrl}/patient/medicament_by_user/${id}`,
    listExamByPatient: (id: string) => `${endpoint.baseUrl}/patient/exam_by_user/${id}`,
    listVaccineByPatient: (id: string) => `${endpoint.baseUrl}/patient/vaccine_by_user/${id}`,
    patientById: (id: string) => `${endpoint.baseUrl}/patient/${id}`,
    updatePatient: (id: string) => `${endpoint.baseUrl}/patient/${id}`,
    deletePatient: (id: string) => `${endpoint.baseUrl}/patient/${id}`, 
};