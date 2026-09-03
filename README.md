# 🌾 AGRI-TOGO

> Site vitrine pour une coopérative agricole togolaise — Projet pédagogique

[![Statut](https://img.shields.io/badge/statut-en%20cours-yellow)]()
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)]()
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)]()
[![JavaScript](https://img.shields.io/badge/JavaScript-Vanilla-F7DF1E?logo=javascript&logoColor=black)]()
[![Licence](https://img.shields.io/badge/licence-MIT-blue)]()

---

## 📖 Présentation du commanditaire

**AGRI-TOGO** est une coopérative agricole *(fictive, à usage pédagogique)* regroupant des producteurs de la région **Maritime** et des **Plateaux** au Togo. Elle valorise des produits locaux — maïs, manioc, ananas — ainsi que des produits transformés (farines, jus, gari), et accompagne ses membres dans la commercialisation et la formation aux bonnes pratiques agricoles.

La coopérative ne disposait jusqu'ici d'**aucune présence en ligne**. Ce projet répond à son besoin d'un site vitrine simple, moderne et responsive permettant de :

1. Présenter la coopérative, ses membres et ses valeurs ;
2. Mettre en avant les produits et activités ;
3. Partager les actualités et événements (foires, formations, récoltes) ;
4. Permettre à des partenaires, acheteurs ou ONG de la contacter facilement.

---

## 🎯 Objectifs pédagogiques

À l'issue du projet, chaque étudiant du binôme est capable de :

- Lire, reformuler et découper un cahier des charges en tâches concrètes ;
- Structurer un site multi-pages en **HTML5 sémantique** ;
- Mettre en page et rendre responsive un site avec **CSS3** (Flexbox / Grid) ;
- Ajouter de l'interactivité avec **JavaScript natif** (sans framework) ;
- Organiser un projet en autonomie au sein d'un binôme (répartition des rôles, points d'étape) ;
- Présenter et défendre son travail à l'oral devant un public (soutenance).

---

## 🗺️ Structure des pages

| Page | Contenu attendu |
|---|---|
| **Accueil** | Bannière de présentation, slogan de la coopérative, chiffres clés (nombre de membres, régions couvertes, produits), aperçu des 3 dernières actualités, appel à l'action vers la page Contact. |
| **À propos** | Histoire et mission d'AGRI-TOGO, valeurs, présentation des membres/producteurs, zone géographique d'action (Maritime, Plateaux). |
| **Nos produits** | Galerie de produits (maïs, manioc, ananas, produits transformés) avec image, nom, courte description ; filtre ou carrousel en JavaScript. |
| **Actualités** | Liste d'articles ou d'événements (foires, formations, récoltes) avec date, titre, image, extrait. |
| **Contact** | Formulaire (nom, email, sujet, message) avec validation JavaScript, coordonnées de la coopérative, plan ou adresse. |

---

## ⚙️ Fonctionnalités techniques

### Essentielles (obligatoires)
- ✅ Menu de navigation responsive avec ouverture/fermeture en JavaScript (menu « hamburger » sur mobile) ;
- ✅ Formulaire de contact avec validation des champs en JavaScript (champs obligatoires, format email) ;
- ✅ Galerie ou carrousel d'images sur la page « Nos produits », animé en JavaScript ;
- ✅ Mise en page entièrement responsive (mobile, tablette, ordinateur).

### Bonus (facultatives)
- ⭐ Filtrage dynamique des produits par catégorie (JavaScript);
- ⭐ Animations légères au défilement (scroll reveal) ;
- ⭐ Bouton de bascule mode sombre / mode clair.

---

## 🚧 Contraintes techniques imposées

- **HTML5 sémantique et valide** (balises `header`, `nav`, `main`, `section`, `footer`…) ;
- **CSS3 uniquement** — pas de framework CSS (Bootstrap, Tailwind…) — usage libre de Flexbox et/ou CSS Grid ;
- **JavaScript natif** (« vanilla JS ») — aucune librairie externe (jQuery, React…) n'est autorisée ;
- **Approche mobile-first** recommandée ;
- **Arborescence de fichiers claire** (voir ci-dessous) ;
- Code **indenté, commenté** et versionné si possible (Git/GitHub en bonus) ;
- Compatibilité avec les navigateurs récents (Chrome, Firefox).

---

## 📁 Arborescence du projet

```
agri-togo/
├── index.html
├── pages/
│   ├── a-propos.html
│   ├── produits.html
│   ├── actualites.html
│   └── contact.html
├── css/
│   └── style.css
├── js/
│   └── script.js
├── images/
└── README.md


---

## 🖼️ Contenus et visuels

Les textes définitifs et le logo n'étant pas fournis par le commanditaire, les contenus (textes courts, chiffres plausibles) ont été rédigés par le binôme, et les visuels utilisés proviennent de banques libres de droits (Pexels, Unsplash, Freepik) et d'icônes gratuites (Font Awesome, Bootstrap Icons).

---

## 🚀 Lancement du projet

Aucune installation n'est requise : le site est en HTML/CSS/JS natif.

```bash
# Cloner le dépôt
git clone https://github.com/votre-compte/agri-togo.git
cd agri-togo

# Ouvrir directement le fichier
# → double-clic sur index.html
```

Le site s'ouvre localement dans le navigateur sans erreur console.

---

## 🗓️ Organisation du projet

| Créneau | Activités |
|---|---|
| **Jour 1 – Matin** | Lecture et reformulation du cahier des charges • Brainstorming et wireframe • Répartition des tâches |
| **Jour 1 – Après-midi** | Mise en place de l'arborescence • Structuration HTML sémantique de toutes les pages |
| **Jour 2 – Matin** | Intégration CSS (Flexbox/Grid), palette de couleurs, typographie, header/footer • Début du responsive |
| **Jour 2 – Après-midi** | Finalisation du responsive • JavaScript : menu hamburger, validation du formulaire, carrousel |
| **Jour 3 – Matin** | Fonctionnalités bonus • Tests multi-navigateurs et multi-écrans • Correction des bugs |
| **Jour 3 – Après-midi** | Préparation et passage de la soutenance • Debrief collectif |

---

## 📦 Livrables

1. Code source complet du site (dossier compressé ou dépôt Git) ;
2. Site fonctionnel, ouvrable localement (double-clic sur `index.html`) sans erreur console ;
3. Fiche courte de répartition des tâches au sein du binôme ;
4. Support de présentation (2 à 3 diapositives) pour la soutenance.

---

## 👥 Équipe du projet

**Réalisé par :**
- GOLI Amélé Rolande
- TCHASSAMA Noumane

**Formateur :**
- GBADAMASSI Abdou-Akim

---

## 📄 Licence

Projet réalisé à des fins pédagogiques dans le cadre d'une formation. Licence **MIT**.

---

<p align="center">Fait avec 🌱 pour la promotion de l'agriculture togolaise</p>
