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

[8] Components / Loader.Js
- Composant utilisé quand la commande est validé, va afficher la page de chargement

### Les fonctions dans App.JS
Dans notre state nous avons : l'objet **kebab** qui va contenir toutes les informations du kebab, **checkout** qui est le panier, **page** qui va permettre d'afficher l'étape suivante après validation d'une étape, **error** qui va nous permettre d'initialiser un message d'erreur si nécessaire

[1] selectKebab
- Va initialiser le pain choisit pour la kebab, en mettant à jour l'étape de la commande grâce à page, la fonction est utilisée par **KebabType.Js**
- (Mise à jour du state kebab et page)

[2] selectMeat
- Va rajouter la viande choisit dans l'objet précédemment initialisé avec le pain et va mettre à jour l'étape avec page, la fonction est utilisée par **Meat.Js**
- (Mise à jour du state kebab et page)

[3] selectVegetables
- Va rajouter les légumes sélectionnés dans l'objet kebab et met à jour page pour l'étape suivant, la fonction est utilisée par **Vegetables.Js**
- (Mise à jour du state kebab et page)

[4] selectSauces
- Va rajouter les sauces sélectionnées dans l'objet kebab et met à jour page pour l'étape suivant quand le bouton continuer est cliqué une condition est utilisée pour définir la limite de sauce à 2, la fonction est utilisée par **Sauce.Js**
- (Mise à jour du state kebab et page)

[5] kebabConfirmation
- Va mettre à jour le panier avec le kebab qui a été définit précédement, tout en ajoutant une **quantité** par défaut qui est 1 et un **id** pour référencer le kebab la fonction est utilisée par **KebabConfirmation.Js** et **DefaultKebab.Js**
- (Mise à jour du state checkout et page)

[6] deleteKebab
- Va permettre de supprimer un kebab dans le panier grâce à son id une recherche est faite, il est après supprimé si le bouton supprimé est cliqué
- (Mise à jour du state checkout)

[7] setQuantity
- Va permettre d'augmenter la quantité d'un kebab sur le point d'être commandé, utilise **l'id** du kebab et la **quantité** -1 ou +1 selon si on veut en enlever ou en ajouter, va rechecher l'élement dans checkout grâce à son id et va mettre à jour la quantité
- (Mise à jour du state checkout)

[8] orderCheckout
- Va afficher la page de chargement avec un délais, et va vider le checkout
- (Mise à jour du state checkout et page)
