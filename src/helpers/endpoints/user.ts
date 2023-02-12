import { endpoint } from 'helpers/endpoints';

export const user = {
    createUser: () => `${endpoint.baseUrl}/user`,
    listUser: () => `${endpoint.baseUrl}/user`,
    listPatientByUser: () => `${endpoint.baseUrl}/user/patient_by_user`,
    userById: (id: string) => `${endpoint.baseUrl}/user/${id}`,
    updateUser: (id: string) => `${endpoint.baseUrl}/user/${id}`,
    deleteUser: (id: string) => `${endpoint.baseUrl}/user/${id}`, 
};