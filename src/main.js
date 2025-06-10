import "./styles.css";
/*
la valeur des données dont génerer par chatgbt mais la syntaxe est presacquise pendant le cours JS
    const or let plurale name [tableau {proprieté}] = object
    exemple : 
    const animals = [
        {
        nom: "",
        description: "",
        catégorie: "",
        image: "",
        },
    ];
 */

// Etape 1 - Création des données les données ---------------------------------------------------------------------------

const animals = [
  {
    nom: "Lion",
    description: "Grand félin carnivore, roi de la savane.",
    categorie: "terrestre",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/7/73/Lion_waiting_in_Namibia.jpg",
  },
  {
    nom: "Dauphin",
    description: "Mammifère marin intelligent et joueur.",
    categorie: "aquatique",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/d/da/NMMP_dolphin_with_locator.jpeg",
  },
  {
    nom: "Aigle",
    description: "Rapace puissant à la vue perçante.",
    categorie: "volant",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/6/60/Steinadler%2C_Aquila_chrysaetos_01.JPG",
  },
  {
    nom: "Tigre",
    description: "Félin rayé, chasseur solitaire.",
    categorie: "terrestre",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/56/Tiger.50.jpg",
  },
  {
    nom: "Manchot empereur",
    description: "Oiseau marin ne volant pas, vit en Antarctique.",
    categorie: "aquatique",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/0/07/Emperor_Penguin_Manchot_empereur.jpg",
  },
];

// Créer instances de votre classe en utilisant le constructeur et mettez les dans un tableau-----------------------

/*
pour la réalisation de cette partie de l'exam j'ai checker la documentation 
url 'https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Classes'
*/

class Animal {
  constructor(nom, description, categorie, image) {
    this.nom = nom;
    this.description = description;
    this.categorie = categorie;
    this.image = image;
  }
}
// console.log(Animal);

// Exemple d'instanciation
const Loup = new Animal(
  "Loup",
  "quadrupède, couvert de fourrure habituellement grise.",
  "terrestre",
  "https://upload.wikimedia.org/wikipedia/commons/e/e8/Loup_gris_%28Canis_lupus_%29.jpg"
);
animals.push(Loup);

// console.log(Loup);

// La méthode latérale :-------------------------------------------------------------------------------------

// const animal = {
//   nom: "Loup",
//   description: "quadrupède, couvert de fourrure habituellement grise.",
//   categorie: "terrestre",
//   image:
//     "https://upload.wikimedia.org/wikipedia/commons/e/e8/Loup_gris_%28Canis_lupus_%29.jpg",
// };

// console.log(animal);

// Console.log animals tableau--------------------------------------------------------------------------------
console.log(animals);

// Etape 2 - Affichage des données ---------------------------------------------------------------------------

// Fonction pour afficher les animaux
function displayAnimals(animals) {
  const div = document.getElementById("animals");
  div.innerHTML = ""; // Vider la div avant affichage
  const animalsList = animals;
  animals.forEach((animal) => {
    const card = document.createElement("div");
    card.className = "animal-card";
    card.innerHTML = `
      <h2>${animal.nom}</h2>
      <p><strong>Description :</strong> ${animal.description}</p>
      <p><strong>Catégorie :</strong> ${animal.categorie}</p>
      <img src="${animal.image}" alt="${animal.nom}">
    `;
    div.appendChild(card);
  });
}
// displayAnimals();

// Etape 3 - Affichage des données ---------------------------------------------------------------------------

// Affichage initial de tous les animaux
displayAnimals(animals);

// EventListener pour le filtrage
const animalFilter = document.getElementById("animalFilter");

animalFilter.addEventListener("change", function () {
  const selectedCategory = animalFilter.value;

  console.log("Catégorie sélectionnée:", selectedCategory);

  if (selectedCategory === "tous") {
    // Afficher tous les animaux
    displayAnimals(animals);
  } else {
    // Filtrer par catégorie
    const filtered = animals.filter((animal) => {
      console.log(
        `Animal: ${animal.nom}, Catégorie: ${animal.categorie}, Match: ${
          animal.categorie === selectedCategory
        }`
      );
      return animal.categorie === selectedCategory;
    });

    console.log("Animaux filtrés:", filtered);

    // Afficher les animaux filtrés
    displayAnimals(filtered);
  }
});
