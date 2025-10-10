import { faker } from '@faker-js/faker';


export function buildCustomer() {
    return {
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        zip: faker.location.zipCode()
    };
}