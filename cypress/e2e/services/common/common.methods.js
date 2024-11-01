import { faker } from '@faker-js/faker';

export class CommonMethods {

  // Genera una cadena aleatoria de caracteres de longitud especificada
  static generateRandomString(length = 10) {
    let result = "";
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
  }

  // Genera un texto aleatorio (puede ser una descripción, comentario, etc.)
  static generateRandomTextFaker() {
    return faker.lorem.paragraph();
  }

  // Genera un nombre de mascota aleatorio
  static generateRandomPetNameFaker() {
    return faker.animal.type(); // Puedes usarlo para generar tipos de mascotas
  }

  // Genera un estado aleatorio
  static generateRandomStatusFaker() {
    return faker.helpers.arrayElement(['available', 'pending', 'sold']);
  }

  static generateRandomPhotoFaker() {
    return faker.image.url(); // Devuelve una URL de imagen aleatoria
  }
}
