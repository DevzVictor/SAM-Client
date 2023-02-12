import { endpoint } from 'helpers/endpoints';

export const medicament = {
    createMedicament: (id: string) => `${endpoint.baseUrl}/medicament/${id}`,
    medicamentById: (id: string) => `${endpoint.baseUrl}/medicament/${id}`,
    updateMedicament: (id: string) => `${endpoint.baseUrl}/medicament/${id}`,
    deleteMedicament: (id: string) => `${endpoint.baseUrl}/medicament/${id}`,
    listMedicament: () => `${endpoint.baseUrl}/medicament`,
};