import "./styles.css";
// Etape 1 - Création des données les données

/**Note 1
 * const or let plurale name [tableau {proprieté}] = object
 * exemple syntaxique : 
    const animals = [
        {
        nom: "",
        description: "",
        catégorie: "",
        image: "",
        },
    ];
 * 
 */

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

/**Note 2
 * Créer instances de votre classe | en utilisant le constructeur | et mettez les dans un tableau |
 * Pour réaliser cette partie de l'examen, j'ai consulté la documentation url 'https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Classes'.
 */

class Animal {
  constructor(nom, description, categorie, image) {
    this.nom = nom;
    this.description = description;
    this.categorie = categorie;
    this.image = image;
  }
}
// debug and test :
// console.log(Animal);

const Loup = new Animal(
  "Loup",
  "quadrupède, couvert de fourrure habituellement grise.",
  "terrestre",
  "https://upload.wikimedia.org/wikipedia/commons/e/e8/Loup_gris_%28Canis_lupus_%29.jpg"
);

animals.push(Loup);

// debug and test :
// console.log(Loup);

/**Note 3 Autre Méthode Latérale de crée instance objet et l'ajouter tableau
 *
 * const animal = {
 *  nom: "Loup",
 *  description: "quadrupède, couvert de fourrure habituellement grise.",
 *  categorie: "terrestre",
 *  image:
 *  "https://upload.wikimedia.org/wikipedia/commons/e/e8/Loup_gris_%28Canis_lupus_%29.jpg",
 * };
 *
 * debug and test :
 * console.log(animal);
 */

// La méthode latérale :
// const animal = {
//   nom: "Loup",
//   description: "quadrupède, couvert de fourrure habituellement grise.",
//   categorie: "terrestre",
//   image:
//     "https://upload.wikimedia.org/wikipedia/commons/e/e8/Loup_gris_%28Canis_lupus_%29.jpg",
// };

// console.log(animal);

// debug and test :
console.log(animals);

// Etape 2 - Affichage des données

// Fonction pour afficher les animaux
function displayAnimals(animals) {
  const div = document.getElementById("animals");

  // Vider la div avant affichage
  div.innerHTML = "";

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

// Etape 3 - Filtrage des données

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

// Etape 4 - Formulaire et ajout des données

// Event listener SUBMIT sur le form
const animalForm = document.getElementById("animalForm");

animalForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const nomInput = document.getElementById("nomInput");
  const descriptionInput = document.getElementById("descriptionInput");
  const categorieInput = document.getElementById("categorieInput");
  const imageInput = document.getElementById("imageInput");

  let errors = [];

  const validCategories = ["terrestre", "aquatique", "volant"];

  // Validation NOM
  if (nomInput.value.trim().length === 0) {
    errors.push("Le nom est obligatoire");
  }

  // Validation DESCRIPTION
  if (descriptionInput.value.trim().length === 0) {
    errors.push("La description est obligatoire");
  }

  // Validation CATÉGORIE
  if (categorieInput.value.trim().length === 0) {
    errors.push("Veuillez sélectionner une catégorie");
  } else if (
    !validCategories.includes(categorieInput.value.trim().toLowerCase())
  ) {
    errors.push(
      "Catégorie inconnue. Les catégories valides sont : terrestre, aquatique, volant"
    );
  }

  // Validation IMAGE (URL)
  if (imageInput.value.trim().length === 0) {
    errors.push("Le lien de l'image est obligatoire");
  } else {
    try {
      new URL(imageInput.value.trim());
    } catch {
      errors.push("Veuillez entrer une URL valide pour l'image");
    }
  }

  // Si aucune erreur
  if (errors.length === 0) {
    document.getElementById("errors").innerHTML = "";

    const newAnimal = new Animal(
      nomInput.value.trim(),
      descriptionInput.value.trim(),
      categorieInput.value.trim(),
      imageInput.value.trim()
    );

    animals.push(newAnimal);
    displayAnimals(animals);
    animalForm.reset();
    showSuccessMessage();
    console.log("Nouvel animal ajouté:", newAnimal);
  } else {
    displayFlatErrors(errors);
  }
});

function displayFlatErrors(errors) {
  const errorContainer = document.getElementById("errors");
  errorContainer.innerHTML = "";
  errors.forEach((err) => {
    const p = document.createElement("p");
    p.textContent = err;
    p.style.color = "red";
    errorContainer.appendChild(p);
  });
}

//  probleme fixed with chatgpt
function showSuccessMessage() {
  const successMessage = document.getElementById("successMessage");
  successMessage.style.display = "block";

  setTimeout(() => {
    successMessage.style.display = "none";
  }, 3000);
}
