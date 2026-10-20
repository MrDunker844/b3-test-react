# Exercices CSS — Bonus

Ces exercices facultatifs complètent les [rappels CSS obligatoires](exercices.md), qui incluent le responsive. Choisissez ceux que vous souhaitez revoir : aucun JavaScript n’est nécessaire.

## 1. Tester la solidité des cartes

- Dupliquez temporairement des cartes pour obtenir une liste de sept livres.
- Ajoutez un titre sur trois lignes et un auteur au nom très long.
- Alignez les lignes auteur/date en bas des cartes d’une même rangée, malgré les titres de longueurs différentes.
- Comparez `auto-fill` et `auto-fit` avec seulement deux cartes, puis avec sept.

**Question :** pourquoi un `flex: 1` sur le contenu de la carte ne suffit-il pas si la carte elle-même ne remplit pas la hauteur disponible ?

Documentation : [`repeat()` et les répétitions automatiques](https://developer.mozilla.org/fr/docs/Web/CSS/Reference/Values/repeat), [`flex`](https://developer.mozilla.org/fr/docs/Web/CSS/Reference/Properties/flex).

## 2. Vérifier les interactions et les contrastes

- Parcourez chaque page uniquement avec Tab, Maj+Tab, Entrée et Espace selon le contrôle ciblé. Chaque élément interactif doit avoir un focus identifiable.
- Vérifiez les contrastes du texte principal et du texte secondaire dans les outils du navigateur. Visez au moins 4,5:1 pour du texte courant.
- Désactivez les animations de cartes lorsque `prefers-reduced-motion: reduce` est actif. Testez cette préférence avec les outils du navigateur.

**Question :** quelle différence y a-t-il entre `:hover`, `:focus-visible` et `:focus-within` ?

Documentation : [`:focus-within`](https://developer.mozilla.org/fr/docs/Web/CSS/Reference/Selectors/:focus-within), [`prefers-reduced-motion`](https://developer.mozilla.org/fr/docs/Web/CSS/Reference/At-rules/@media/prefers-reduced-motion), [contraste des couleurs](https://developer.mozilla.org/fr/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable/Color_contrast).

## 3. Comprendre la cascade avec les outils du navigateur

- Créez deux règles qui donnent des couleurs différentes au même titre : l’une avec une classe, l’autre avec un sélecteur imbriqué.
- Avant de recharger, prédisez la couleur retenue, puis vérifiez dans les styles calculés.
- Inversez l’ordre des règles et expliquez le résultat. Résolvez le conflit sans `!important`.

**Question :** dans `.book-card { &:hover { … } }`, que représente `&` ? Quel sélecteur obtiendriez-vous sans imbrication ?

## 4. Préparer une version imprimable

- Avec `@media print`, masquez le formulaire de recherche et les actions de commande.
- Retirez les ombres, utilisez un fond blanc et rendez la fiche lisible sur papier.
- Vérifiez le résultat dans l’aperçu avant impression.

**Question :** comment éviter de couper une carte entre deux pages imprimées ?

Documentation : [styles d’impression](https://developer.mozilla.org/fr/docs/Web/CSS/CSS_media_queries/Printing), [`break-inside`](https://developer.mozilla.org/fr/docs/Web/CSS/Reference/Properties/break-inside).

## 5. Styliser la fenêtre de commande

Si vous avez réalisé le bonus HTML de commande :

1. Centrez le `dialog`, limitez sa largeur et ajoutez des espacements intérieurs.
2. Stylisez son titre, son texte et le bouton de fermeture.
3. Utilisez `::backdrop` pour assombrir la page derrière la fenêtre.

**Question :** quelle différence y a-t-il entre une pseudo-classe et un pseudo-élément ?

Documentation : [`::backdrop`](https://developer.mozilla.org/fr/docs/Web/CSS/Reference/Selectors/::backdrop).
