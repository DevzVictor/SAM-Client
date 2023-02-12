import { auth } from './auth';
import { patient } from './patient';
import { medicament } from './medicament';
import { exam } from './exam';
import { vaccine } from './vaccine';
import { user } from './user';

export const endpoint = {
    baseUrl: "http://localhost:3333/",
    ...auth,
    ...user,
    ...patient,
    ...medicament,
    ...exam,
    ...vaccine,
};