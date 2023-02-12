import { endpoint } from 'helpers/endpoints';

export const vaccine = {
    createVaccine: (id: string) => `${endpoint.baseUrl}/vaccine/${id}`,
    vaccineById: (id: string) => `${endpoint.baseUrl}/vaccine/${id}`,
    updateVaccine: (id: string) => `${endpoint.baseUrl}/vaccine/${id}`,
    deleteVaccine: (id: string) => `${endpoint.baseUrl}/vaccine/${id}`,
    listVaccine: () => `${endpoint.baseUrl}/vaccine`,
};
