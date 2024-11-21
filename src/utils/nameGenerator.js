const firstNames = [
    // Male names
    'Andres', 'Martin', 'Jaan', 'Kristjan', 'Märt',
    'Karl', 'Peeter', 'Toomas', 'Rein', 'Mati',
    'Aleksander', 'Johannes', 'Mihkel', 'Priit', 'Tõnu',
    'Jaak', 'Ants', 'Artur', 'Erik', 'Henrik',
    'Igor', 'Indrek', 'Jüri', 'Kaarel', 'Kalev',
    'Kaspar', 'Lauri', 'Madis', 'Marko', 'Oliver',
    'Oskar', 'Raivo', 'Robert', 'Siim', 'Tanel',
    'Tarmo', 'Urmas', 'Valdur', 'Viktor', 'Allan',
    'Raul', 'Silver', 'Taavi', 'Aivar', 'Heiki',

    // Female names
    'Mari', 'Anne', 'Tiina', 'Kristiina', 'Liis',
    'Katrin', 'Eva', 'Laura', 'Maria', 'Liisa',
    'Anna', 'Helena', 'Kadri', 'Kersti', 'Linda',
    'Marta', 'Nora', 'Olivia', 'Piret', 'Regina',
    'Sandra', 'Tiiu', 'Urve', 'Valve', 'Agnes',
    'Britta', 'Diana', 'Elina', 'Gerli', 'Hanna',
    'Ingrid', 'Julia', 'Kaire', 'Liina', 'Maarja',
    'Nele', 'Pille', 'Riina', 'Sirje', 'Triinu',
    'Ülle', 'Viivi', 'Anneli', 'Ene', 'Krista',
    'Malle', 'Reet', 'Sofia', 'Terje', 'Aino'
];
const lastNames = [
    'Tamm', 'Saar', 'Sepp', 'Kask', 'Kukk',
    'Rebane', 'Koppel', 'Kaasik', 'Mägi', 'Vaher',
    'Lepik', 'Raudsepp', 'Lepp', 'Kivi', 'Pärn',
    'Ivanov', 'Peterson', 'Kuusik', 'Teder', 'Ilves',
    'Kallas', 'Oja', 'Luik', 'Karu', 'Rand',
    'Põder', 'Kütt', 'Lõhmus', 'Paju', 'Roos',
    'Kangur', 'Kuusk', 'Männik', 'Nõmm', 'Org',
    'Laur', 'Mitt', 'Saks', 'Toom', 'Valk',
    'Anderson', 'Hunt', 'Järv', 'Kull', 'Lill',
    'Mets', 'Nurk', 'Ots', 'Parts', 'Raud',
    'Smirnov', 'Tali', 'Uibo', 'Varik', 'Äär',
    'Berg', 'Erikson', 'Jaakson', 'Kalda', 'Liiv',
    'Miller', 'Nõmmik', 'Orav', 'Puusepp', 'Rätsep',
    'Sild', 'Tammik', 'Uus', 'Veski', 'Aavik',
    'Järve', 'Kalmus', 'Laine', 'Mänd', 'Olesk',
    'Paal', 'Roos', 'Soo', 'Talts', 'Vahtra',
    'Aas', 'Jõgi', 'Kala', 'Laas', 'Moor',
    'Ots', 'Pukk', 'Rätsepp', 'Teder', 'Vain'
];
const emailProviders = [
    'gmail.com', 'gmail.com', 'gmail.com', 'gmail.com', 'gmail.com', 'gmail.com', 'gmail.com', 'gmail.com',
    'outlook.com', 'outlook.com', 'outlook.com',
    'icloud.com', 'icloud.com',
    'yahoo.com',
    'protonmail.com',
    'ut.ee',
];


export function generateName() {
    const getRandomElement = array => array[Math.floor(Math.random() * array.length)];
    const genRandomNumber = () => Math.floor(Math.random() * 10);
    const normalizeName = name => {
        return name
            .toLowerCase()
            .replace(/ä/g, 'a')
            .replace(/ö/g, 'o')
            .replace(/ü/g, 'u')
            .replace(/õ/g, 'o')
            .replace(/š/g, 's')
            .replace(/ž/g, 'z')
    }

    const firstName = getRandomElement(firstNames);
    const lastName = getRandomElement(lastNames);
    const fullName = `${firstName} ${lastName}`;
    const emailProvider = getRandomElement(emailProviders);

    const normalFirst = normalizeName(firstName);
    const normalLast = normalizeName(lastName);

    const emailFormats = [
        `${normalFirst}.${normalLast}@${emailProvider}`,
        `${normalFirst}${normalLast}@${emailProvider}`,
        `${normalFirst[0]}${normalLast}@${emailProvider}`,
        `${normalFirst}.${normalLast[0]}@${emailProvider}`,
        `${normalFirst[0]}.${normalLast}@${emailProvider}`,
        `${normalFirst}${normalLast[0]}@${emailProvider}`,
        `${normalFirst[0]}${normalLast[0]}@${emailProvider}`,
        `${normalFirst}${genRandomNumber()}${genRandomNumber()}@${emailProvider}`,
        `${normalFirst}${normalLast}${genRandomNumber()}@${emailProvider}`,
        `${normalFirst}${normalLast}${genRandomNumber()}${genRandomNumber()}@${emailProvider}`
    ]

    return {
        firstName,
        lastName,
        fullName,
        email: getRandomElement(emailFormats)
    };
}
