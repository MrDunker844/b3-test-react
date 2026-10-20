# Exercices CSS — Ma bibliothèque

## Objectif

Revoir les bases du CSS en stylisant le catalogue et la fiche de livre réalisés en HTML : typographie, modèle de boîte, positionnement, Flexbox, Grid, interactions et responsive.

Le rendu fourni est une référence visuelle. Choisissez vos textes et vos couleurs : il n’est pas nécessaire de reproduire chaque détail. Ajoutez les classes et conteneurs utiles et utilisez le **CSS imbriqué natif** avec des sélecteurs simples.

**Les cinq exercices sont obligatoires, y compris le responsive.** Les [exercices bonus sont dans un fichier séparé](exercices-bonus.md). La recherche reste une maquette : aucun JavaScript n’est demandé.

## 1. Préparer les styles communs

1. Créez `style.css` et liez-la aux deux pages. Vérifiez son chargement avec une règle temporaire, puis retirez-la.
2. Ajoutez le reset ci-dessous.
3. Définissez des variables dans `:root` pour les couleurs du fond, du texte, de l’accent et des bordures. Réutilisez-les.

```css
*,
*::before,
*::after {
  box-sizing: border-box;
}

* {
  margin: 0;
  padding: 0;
}

img,
picture,
video,
canvas,
svg {
  display: block;
  max-width: 100%;
}

img,
video {
  height: auto;
}

input,
button,
textarea,
select {
  font: inherit;
  color: inherit;
}

button {
  cursor: pointer;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
}
```

**Questions de rappel**

- À quoi sert `box-sizing: border-box` ?
- Quelle différence y a-t-il entre `margin` et `padding` ?
- Dans une règle imbriquée, que représente `&` ?

Documentation : [modèle de boîte](https://developer.mozilla.org/fr/docs/Learn_web_development/Core/Styling_basics/Box_model), [variables CSS](https://developer.mozilla.org/fr/docs/Web/CSS/Using_CSS_custom_properties), [imbrication CSS](https://developer.mozilla.org/fr/docs/Web/CSS/CSS_nesting/Using_CSS_nesting).

## 2. Définir la typographie et la structure de page

1. Choisissez deux familles de polices, une pour les titres et une pour le texte, sur [Fontshare](https://www.fontshare.com/) ou [Google Fonts](https://fonts.google.com/).
2. Chargez les graisses utilisées et prévoyez une police de repli.
3. Définissez le fond, les couleurs, les tailles de texte et la hauteur de ligne. Le texte doit rester lisible, y compris les informations secondaires.
4. Utilisez Flexbox pour que `main` remplisse l’espace disponible et que le footer soit en bas lorsque le contenu est court. Avec un contenu long, le footer doit rester après celui-ci.

**Questions de rappel**

- Quelle différence y a-t-il entre `height` et `min-height` ?
- Quelle différence y a-t-il entre `px`, `rem` et `%` ?

Documentation : [polices web](https://developer.mozilla.org/fr/docs/Learn_web_development/Core/Text_styling/Web_fonts), [Flexbox](https://developer.mozilla.org/fr/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox).

## 3. Styliser le catalogue

### Navigation et recherche

1. Gardez le header visible pendant le défilement. Comparez `sticky` et `fixed`, puis choisissez une solution.
2. Disposez les liens de navigation avec Flexbox et `gap`.
3. Centrez le titre et le texte de présentation.
4. Stylisez le champ de recherche avec une bordure inférieure et un bouton à icône. Conservez un label et un nom accessible pour le bouton.
5. Ajoutez un style de focus visible au clavier pour le champ et le bouton.

**Questions de rappel**

- Quelle différence y a-t-il entre `sticky` et `fixed` ? À quoi sert `top` ?
- Quelle différence y a-t-il entre `:hover` et `:focus-visible` ?

Documentation : [`position`](https://developer.mozilla.org/fr/docs/Web/CSS/Reference/Properties/position), [`:focus-visible`](https://developer.mozilla.org/fr/docs/Web/CSS/Reference/Selectors/:focus-visible).

### Cartes de livres

1. Affichez la couverture au format portrait, puis le titre, et enfin l’auteur à gauche et l’année à droite.
2. Essayez une liste avec Flexbox et retour à la ligne, puis une grille avec Grid. Comparez le résultat en changeant la largeur de la fenêtre.
3. Utilisez `aspect-ratio` et `object-fit` pour afficher les couvertures dans un format cohérent.
4. Tronquez les auteurs trop longs avec une ellipse, tout en gardant l’année visible.
5. Ajoutez un léger agrandissement au survol avec une transition et un focus visible sur le lien de la carte.

**À vérifier :** essayez un titre sur deux lignes et un auteur au nom très long. Tous les liens peuvent continuer à pointer vers Moby-Dick.

**Questions de rappel**

- Dans quel cas choisir Flexbox ou Grid ?
- Quelles propriétés faut-il associer à `text-overflow: ellipsis` ?
- Pourquoi utiliser `transform` plutôt que modifier la largeur au survol ?

Documentation : [Grid](https://developer.mozilla.org/fr/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout), [`object-fit`](https://developer.mozilla.org/fr/docs/Web/CSS/Reference/Properties/object-fit), [`text-overflow`](https://developer.mozilla.org/fr/docs/Web/CSS/Reference/Properties/text-overflow), [`transition`](https://developer.mozilla.org/fr/docs/Web/CSS/Reference/Properties/transition).

## 4. Styliser la fiche de livre

1. Disposez la couverture et les actions à gauche, les informations et le résumé à droite.
2. Donnez un fond distinct à la colonne de la couverture et ajoutez une ombre à l’image.
3. Stylisez le bouton de commande et le lien vers le résumé : icône, texte centré, espacements, bordure et survol.
4. Affichez le fil d’Ariane sur une ligne avec des séparateurs.
5. Hiérarchisez le titre et l’auteur, puis disposez les métadonnées avec Flexbox.
6. Rendez le résumé lisible en ajustant sa largeur, sa hauteur de ligne et l’espacement des paragraphes.

Placez les styles spécifiques dans `book.css`, chargé après `style.css`. Gardez les règles communes dans `style.css`.

**Questions de rappel**

- Quelle différence y a-t-il entre `gap`, `margin` et `padding` ?
- Lorsque deux règles ciblent la même propriété, comment savoir laquelle s’applique ?

Documentation : [cascade et spécificité](https://developer.mozilla.org/fr/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts), [pseudo-éléments](https://developer.mozilla.org/fr/docs/Web/CSS/Pseudo-elements).

## 5. Adapter les deux pages au mobile

1. Testez les pages à 320 px, 768 px et 1280 px de largeur dans les outils du navigateur.
2. Adaptez le nombre de colonnes du catalogue à la place disponible.
3. Avec une media query, faites passer la fiche de livre à une seule colonne sur petit écran.
4. Ajustez les tailles des titres, les marges et les espacements. Le formulaire et les images doivent rester dans la largeur disponible.
5. Vérifiez l’absence de défilement horizontal et le bon fonctionnement de la navigation sur les deux pages.

**Questions de rappel**

- À quoi sert une media query ?
- Quelle différence y a-t-il entre `width` et `max-width` pour une image ou un conteneur ?
- Comment éviter qu’une largeur fixe fasse déborder un élément sur mobile ?

Documentation : [media queries](https://developer.mozilla.org/fr/docs/Web/CSS/CSS_media_queries/Using_media_queries), [`max-width`](https://developer.mozilla.org/fr/docs/Web/CSS/Reference/Properties/max-width).
