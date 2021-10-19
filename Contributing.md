## Structuration du Projet
- App.js (coeur du projet)
- Dossier components va contenir tous les composants de l'application appelés dans App.js

## Fonctionement du code

### Les composants
[1] Components / Vegetables.Js
- Utilise le UseState, une valeur true/false est affecté au légume sélectionné ou non le résultat est passé par un bouton si cliqué

[2] Components / Sauces.Js
- Utilise le UseState, une valeur true/false est affecté au légume sélectionné ou non le résultat est passé par un bouton si cliqué

[3] Components / Meat.Js
- 2 Options possibles donc deux boutons l'un renvoit une valeur et l'autre renvois une valeur aussi

[4] Components / KebabType.Js
- 2 Options possibles donc deux boutons l'un renvoit une valeur et l'autre renvois une valeur aussi

[5] Components / DefaultKebab.Js
- Utilise le fichier **defaultKebab.json** ou sont référencé les kebabs prédéfinits il utilise une fonction qui met à jour le checkout

[6] Components / Header.Js
- Retourne le Header pour toutes les pages

[7] Components / Checkout.Js
- Composant du panier, va vérifier les sauces et légumes selectionnés va ensuite créer une chaîne de caractères pour récapituler la composition du kebab pour l'ajouter

### 
