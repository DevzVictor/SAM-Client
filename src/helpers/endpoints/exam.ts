import { endpoint } from 'helpers/endpoints';

export const exam = {
    createExam: (id: string) => `${endpoint.baseUrl}/exam/${id}`,
    examById: (id: string) => `${endpoint.baseUrl}/exam/${id}`,
    updateExam: (id: string) => `${endpoint.baseUrl}/exam/${id}`,
    deleteExam: (id: string) => `${endpoint.baseUrl}/exam/${id}`,
    listExam: () => `${endpoint.baseUrl}/exam`,
};