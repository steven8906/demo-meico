/**
 * @author Edward Steven Hernández Lambraño
 * @since 31-05-2023
 * @description Modelos de datos
 */

interface PhoneNumberModel {
    phone_type   : string;
    phone_number : string;
}

interface PersonModel {
    name         : string;
    age          : number;
    phones       : PhoneNumberModel[];
    email        : string;
}


export default PersonModel;