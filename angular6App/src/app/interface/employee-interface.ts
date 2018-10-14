import { GenderEnum } from '../enum/gender.enum';

export interface EmployeeInterface {
    id?: number;
    firstName?: string;
    lastName?: string;
    gender?: GenderEnum;
    dateOfBirth?: string;
    department?: string;
}
