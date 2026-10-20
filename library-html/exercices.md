# Exercices HTML — Ma bibliothèque

Créez deux pages : un catalogue (`index.html`) et une fiche de livre (`book.html`). Travaillez sans CSS ni JavaScript : ces mêmes pages seront stylisées dans la suite du cours.

Les pages fournies sont un exemple. Choisissez vos textes : l’objectif est d’utiliser les balises adaptées au contenu, pas de reproduire chaque phrase. Récupérez la couverture `moby-dick.png` dans votre dossier de travail.

Les exercices 1 à 6 forment le parcours principal. Le formulaire et la fenêtre modale permettent de poursuivre selon le temps disponible.

## 1. Préparer les pages

1. Créez `index.html` et `book.html` avec la structure d’un document HTML : doctype, `html`, `head` et `body`.
2. Déclarez la langue française, l’encodage UTF-8 et la métadonnée `viewport`.
3. Donnez à chaque page un titre d’onglet pertinent et distinct.

**Question :** quelle différence y a-t-il entre `title` et `h1` ?

Documentation : [structure HTML](https://developer.mozilla.org/fr/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax), [attribut `lang`](https://developer.mozilla.org/fr/docs/Web/HTML/Reference/Global_attributes/lang), [viewport](https://developer.mozilla.org/fr/docs/Web/HTML/Reference/Elements/meta/name/viewport).

## 2. Structurer les pages et la navigation

1. Dans chaque page, créez un `header`, un `main` et un `footer`.
2. Dans le header, ajoutez un `nav` contenant une liste `ul` et un lien « Accueil » vers `index.html`.
3. Sur le catalogue, indiquez la page courante avec `aria-current="page"` sur ce lien.
4. Ajoutez un `hr` après la navigation et au début du footer, puis un paragraphe de copyright dans le footer.

**À vérifier :** le lien « Accueil » fonctionne depuis les deux pages.

**Question :** dans quel cas choisiriez-vous une liste `ol` plutôt qu’une liste `ul` ?

Documentation : [`header`](https://developer.mozilla.org/fr/docs/Web/HTML/Reference/Elements/header), [`nav`](https://developer.mozilla.org/fr/docs/Web/HTML/Reference/Elements/nav), [`main`](https://developer.mozilla.org/fr/docs/Web/HTML/Reference/Elements/main), [`footer`](https://developer.mozilla.org/fr/docs/Web/HTML/Reference/Elements/footer), [`aria-current`](https://developer.mozilla.org/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-current), [`hr`](https://developer.mozilla.org/fr/docs/Web/HTML/Reference/Elements/hr).

## 3. Présenter la bibliothèque

Dans le `main` du catalogue :

1. Ajoutez un titre principal `h1` et un ou deux courts paragraphes de présentation.
2. Utilisez `strong` pour une information importante et `em` pour une expression sur laquelle vous souhaitez insister.

**Question :** pourquoi choisir `strong` et `em` selon le sens du texte plutôt que pour leur apparence ?

**À retenir :** chaque paragraphe utilise un `p`. N’utilisez pas des `br` répétés pour créer de l’espacement. Les séparateurs `hr` sont conservés ici pour la version sans CSS ; leur sens HTML est une rupture thématique.

Documentation : [titres](https://developer.mozilla.org/fr/docs/Web/HTML/Reference/Elements/Heading_Elements), [`p`](https://developer.mozilla.org/fr/docs/Web/HTML/Reference/Elements/p), [`strong`](https://developer.mozilla.org/fr/docs/Web/HTML/Reference/Elements/strong), [`em`](https://developer.mozilla.org/fr/docs/Web/HTML/Reference/Elements/em).

## 4. Créer le catalogue et la fiche

1. Dans le catalogue, créez une `section` avec un titre `h2` et une liste de trois livres. Pour chaque livre, affichez son titre et son auteur.
2. Transformez les titres en liens vers `book.html`. Pour cet exercice, tous les liens ouvrent la même fiche de Moby-Dick : ne créez pas d’autres pages.
3. Dans le `main` de la fiche, créez un `article` contenant un `h1` avec le titre du livre.
4. Ajoutez à la fin de l’article un lien de retour au catalogue.

**À vérifier :** vous pouvez naviguer entre les deux pages.

**Question :** que représentent `section` et `article` dans ce projet ?

Documentation : [`section`](https://developer.mozilla.org/fr/docs/Web/HTML/Reference/Elements/section), [`article`](https://developer.mozilla.org/fr/docs/Web/HTML/Reference/Elements/article), [`ul`](https://developer.mozilla.org/fr/docs/Web/HTML/Reference/Elements/ul), [`a`](https://developer.mozilla.org/fr/docs/Web/HTML/Reference/Elements/a).

## 5. Ajouter la couverture et les informations

Dans l’article de la fiche :

1. Ajoutez la couverture avec `img`, un chemin relatif vers `moby-dick.png`, un texte alternatif pertinent et une largeur de 200 pixels.
2. Créez une section avec un `h2` pour les informations du livre.
3. Utilisez `dl`, `dt` et `dd` pour présenter quelques propriétés : auteur, première publication, langue originale et genre.
4. Pour l’année de première publication de Moby-Dick, utilisez `<time datetime="1851">1851</time>`.

**À vérifier :** l’image s’affiche et conserve ses proportions.

**Questions :** à quoi sert `alt` ? Pourquoi une liste de descriptions est-elle adaptée aux informations du livre ?

Documentation : [`img`](https://developer.mozilla.org/fr/docs/Web/HTML/Reference/Elements/img), [`dl`, `dt` et `dd`](https://developer.mozilla.org/fr/docs/Web/HTML/Reference/Elements/dl), [`time`](https://developer.mozilla.org/fr/docs/Web/HTML/Reference/Elements/time).

## 6. Ajouter un résumé dépliable

1. Créez une section avec un `h2` présentant le résumé du roman.
2. Ajoutez un `details` dont le premier enfant est un `summary` avec un intitulé explicite.
3. Après le summary, rédigez un court résumé dans un ou deux paragraphes.

**À vérifier :** ouvrez et fermez le résumé à la souris, puis au clavier avec Tab et Entrée ou Espace.

**Question :** faut-il du JavaScript pour obtenir ce comportement ?

Documentation : [`details`](https://developer.mozilla.org/fr/docs/Web/HTML/Reference/Elements/details), [`summary`](https://developer.mozilla.org/fr/docs/Web/HTML/Reference/Elements/summary).

## 7. Préparer une recherche — complément

Dans le catalogue, avant la liste des livres :

1. Ajoutez un formulaire avec `action="index.html"` et `method="get"`.
2. Ajoutez un champ `input` de type `search`, avec un `id`, un `name` et un placeholder donnant un exemple de recherche.
3. Associez un label visible au champ avec `for` et `id`.
4. Ajoutez un bouton « Rechercher » de type `submit`.

**À vérifier :** cliquer sur le label place le curseur dans le champ. Soumettez une recherche et observez les paramètres dans l’adresse de la page. Le formulaire ne filtre pas les livres : nous pourrons ajouter ce comportement en JavaScript plus tard.

**Questions :** quelle différence y a-t-il entre `id` et `name` ? Pourquoi le placeholder ne remplace-t-il pas le label ?

Documentation : [`form`](https://developer.mozilla.org/fr/docs/Web/HTML/Reference/Elements/form), [`label`](https://developer.mozilla.org/fr/docs/Web/HTML/Reference/Elements/label), [`input type="search"`](https://developer.mozilla.org/fr/docs/Web/HTML/Reference/Elements/input/search), [`button`](https://developer.mozilla.org/fr/docs/Web/HTML/Reference/Elements/button).

## 8. Ouvrir une fenêtre de commande — bonus

Dans la fiche, ajoutez une section de commande avec un titre `h2`.

1. Ajoutez un bouton « Commander le livre » avec `type="button"`, `command="show-modal"` et `commandfor="command-dialog"`.
2. Ajoutez un `dialog` avec `id="command-dialog"`, contenant un titre et un court message de confirmation.
3. Donnez un identifiant au titre et référencez-le avec `aria-labelledby` sur le dialog : la fenêtre possède ainsi un nom accessible.
4. Dans le dialog, ajoutez un `form` avec `method="dialog"` et un bouton « Fermer » de type `submit`.

**À vérifier :** ouvrez la fenêtre, fermez-la avec le bouton puis avec Échap. Vérifiez aussi la navigation au clavier. Il s’agit d’une simulation : aucune commande n’est enregistrée.

**Questions :** quelle différence y a-t-il entre un lien et un bouton ? Que fait ici le formulaire `method="dialog"` ?

Les attributs `command` et `commandfor` sont récents : vérifiez leur compatibilité dans MDN pour le navigateur utilisé. Si nécessaire, reportez l’ouverture de la fenêtre à la partie JavaScript.

Documentation : [`button`, `command` et `commandfor`](https://developer.mozilla.org/fr/docs/Web/HTML/Reference/Elements/button), [`dialog`](https://developer.mozilla.org/fr/docs/Web/HTML/Reference/Elements/dialog), [`aria-labelledby`](https://developer.mozilla.org/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby).

## Vérifications finales

- Les pages déclarent la bonne langue et possèdent chacune un titre d’onglet et un `h1` pertinent.
- Les niveaux de titres suivent la structure du contenu.
- Les liens et l’image fonctionnent.
- Les identifiants sont uniques dans chaque page et leurs références correspondent.
- Le champ possède un label visible et les boutons ont un type explicite.
- Les interactions sont utilisables au clavier.

Contrôlez également la syntaxe avec le [validateur HTML du W3C](https://validator.w3.org/nu/).
