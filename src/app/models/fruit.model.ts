export const genusList = ['Actinidia', 'Ananas', 'Annonas', 'Apteryx', 'Artocarpus', 'Cactaceae', 'Carica', 'Citrullus', 'Citrus', 'Corylus', 'Cucumis', 'Cucurbita', 'Diospyros', 'Dovyalis', 'Durio', 'Ficus', 'Fragaria', 'Garcinia', 'Litchi', 'Malus', 'Mangifera', 'Morus', 'Musa', 'Passiflora', 'Persea', 'Prunus', 'Psidium', 'Punica', 'Pyrus', 'Ribes', 'Rubus', 'Selenicereus', 'Sellowiana', 'Solanum', 'Vaccinium', 'Vitis'] as const;

export type Genus = typeof genusList[number];

export const NO_VALUE = Symbol("NO_VALUE");

export type Fruit = {
    genus: Genus;
    name: string;
    id: number;
    family: string;
    order: string;
    nutritions: Nutrition;
}

export type Nutrition = {
    carbohydrates: number;
    protein: number;
    fat: number;
    calories: number;
    sugar: number;
}