import { faker } from '@faker-js/faker';

export class DataRandom {

    static getPetName() {
        return faker.name.firstName(); // Genera un nombre aleatorio para la mascota
    }

    static getCategory() {
        return faker.helpers.arrayElement(['Perro', 'Gato', 'Ave', 'Reptil']); // Selecciona aleatoriamente una categoría
    }

    static getStatus() {
        return faker.helpers.arrayElement(['available', 'pending', 'sold']); // Genera un estado aleatorio
    }

    static getRandomText() {
        return faker.lorem.paragraph(); // Genera un párrafo de texto aleatorio
    }
}
