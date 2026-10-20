# Exercices React — Ma bibliothèque

Transformez le projet `library-react` en une application qui recherche des livres avec Google Books et affiche leurs fiches. Conservez les styles existants et les modules CSS.

**Durée indicative : environ 3 heures**, hors bonus et selon votre aisance. Les exercices se suivent ; validez chaque étape avant de continuer.

## Avant de commencer

- Lancez le projet avec `npm install`, puis `npm run dev` dans `library-react`.
- Repérez les points d’entrée, les pages et les composants communs. Quel rôle jouent `main.jsx`, `App.jsx` et les fichiers `.module.css` ?
- Pour les appels à Google Books, utilisez la clé fournie en cours. Placez-la dans un fichier `.env.local` à la racine de `library-react`, sous le nom `VITE_GOOGLE_BOOKS_API_KEY`, puis redémarrez Vite. Elle sera accessible avec `import.meta.env.VITE_GOOGLE_BOOKS_API_KEY`.

Les variables préfixées par `VITE_` sont accessibles dans le navigateur : elles ne permettent pas de cacher un secret. Ne commitez pas votre fichier de configuration local.

Documentation : [variables d’environnement avec Vite](https://vite.dev/guide/env-and-mode).

## 1. Composants, props et listes

1. Dans `Home`, regroupez les trois livres écrits en dur dans un tableau d’objets. Chaque objet possède un identifiant stable, un titre, des auteurs, une date de publication et une couverture.
2. Créez un composant `BookCard` qui reçoit un livre par les props et affiche la carte existante.
3. Remplacez les trois cartes répétées par un `map`. Utilisez l’identifiant du livre comme `key` sur l’élément directement retourné par le `map`.
4. Déplacez les styles propres à la carte dans `BookCard.module.css` et adaptez les sélecteurs imbriqués de `Home.module.css`. L’affichage doit rester identique.

**À vérifier :** ajouter un objet au tableau fait apparaître une carte supplémentaire, sans recopier de JSX.

**Questions :** à quoi servent les props ? Pourquoi une liste a-t-elle besoin de clés stables ?

Documentation : [props](https://react.dev/learn/passing-props-to-a-component), [afficher des listes](https://react.dev/learn/rendering-lists).

## 2. Un formulaire contrôlé avec `useState`

1. Créez un état `search` initialisé à une chaîne vide.
2. Reliez le champ de recherche à cet état avec `value` et `onChange`.
3. Gérez la soumission avec `onSubmit` et empêchez le rechargement de la page avec `preventDefault()`.
4. Créez un second état `query`, initialisé à `subject:fiction`. À la soumission, donnez-lui la recherche saisie, sans espaces au début ni à la fin. Si le champ est vide, revenez à `subject:fiction`.
5. Affichez sous le formulaire la recherche validée. Elle doit changer uniquement à la soumission, même si vous continuez à saisir du texte.

**À vérifier :** la touche Entrée et le bouton valident la recherche sans recharger la page.

**Questions :** pourquoi une variable ordinaire ne suffit-elle pas à mettre l’interface à jour ? Pourquoi séparer `search` et `query` ?

Documentation : [`useState`](https://react.dev/reference/react/useState).

## 3. Manipuler un élément avec `useRef`

1. Créez une référence et associez-la au champ de recherche avec l’attribut `ref`.
2. Ajoutez un bouton « Effacer » de type `button` qui vide `search` avec son setter, puis redonne le focus au champ avec la référence.
3. Gardez la recherche validée inchangée jusqu’à la prochaine soumission.

**À vérifier :** après avoir cliqué sur « Effacer », vous pouvez immédiatement recommencer à écrire.

**Question :** pourquoi utiliser un état pour le texte affiché et une référence pour accéder au champ ?

Documentation : [`useRef`](https://react.dev/reference/react/useRef).

## 4. Charger les livres avec `useEffect`

1. Créez `src/api/books.js` et une fonction asynchrone `searchBooks(query)` qui appelle `https://www.googleapis.com/books/v1/volumes` avec `fetch`.
2. Construisez les paramètres avec `URLSearchParams` : `q` pour la recherche, `key` pour la clé API et `maxResults=12`. Vérifiez `response.ok` avant de lire le JSON et levez une erreur si la requête échoue.
3. Dans `Home`, créez les états `books`, `loading` et `error`. Remplacez les livres locaux par les résultats de l’API.
4. Déclenchez le chargement dans un `useEffect` qui dépend de `query`. Définissez une fonction asynchrone à l’intérieur de l’effet, puis appelez-la ; la fonction passée directement à `useEffect` ne doit pas être `async`.
5. Affichez un message pendant le chargement, une erreur en cas d’échec et « Aucun résultat » si la réponse ne contient pas de livres. Effacez l’erreur au début d’une nouvelle requête.
6. La liste se trouve dans `data.items`, qui peut être absent. Pour conserver les props de `BookCard`, transformez chaque résultat en un objet au format choisi dans l’exercice 1, à partir de `id` et `volumeInfo`.
7. Affichez le titre, les auteurs, la date et la couverture. Prévoyez des valeurs de remplacement si `authors`, `publishedDate` ou `imageLinks` sont absents ; la couverture locale peut servir de remplacement.
8. Ajoutez un nettoyage à l’effet pour ignorer les résultats d’une ancienne requête. Un booléen local suffit : après le nettoyage, cette requête ne doit plus modifier les états, y compris `loading` et `error`.

**À vérifier :** les livres se chargent à l’ouverture, une recherche change les résultats, et une erreur de réseau produit un message compréhensible. Le nombre affiché correspond aux livres reçus, pas au total annoncé par l’API.

**Questions :** pourquoi ne pas appeler `fetch` directement pendant le rendu ? Que changerait une dépendance sur `search` plutôt que sur `query` ?

Avec `StrictMode`, React effectue un cycle supplémentaire de mise en place et de nettoyage des effets en développement. Gardez-le et observez ce comportement dans l’onglet Réseau.

Documentation : [`useEffect` et requêtes](https://react.dev/reference/react/useEffect#fetching-data-with-effects), [Google Books : recherche](https://developers.google.com/books/docs/v1/reference/volumes/list), [`StrictMode`](https://react.dev/reference/react/StrictMode).

## 5. Naviguer avec React Router

Nous utiliserons son mode déclaratif et le composant `BrowserRouter`.

1. Installez-la dans `library-react` avec `npm install react-router`.
2. Dans `main.jsx`, entourez `<App />` avec `BrowserRouter`, importé depuis `react-router`. Ne passez plus `<Home />` comme enfant de `App`.
3. Dans `App`, remplacez l’affichage de `children` par `Routes` et deux `Route` : `/` affiche `Home` et `/books/:id` affiche `Book`. Gardez le header et le footer communs autour des routes ; vous pouvez retirer la prop `showHeader`.
4. Gardez uniquement `index.html` et `main.jsx` comme point d’entrée : supprimez `book.html` et `src/book.jsx`, puis retirez le bloc `build` et l’import `fileURLToPath` de `vite.config.js`. Les composants des pages restent dans `src/pages`.
5. Remplacez les liens internes vers les fichiers HTML par des composants `Link` avec une prop `to`. Chaque carte doit pointer vers `/books/` suivi de l’identifiant du livre. Le fil d’Ariane ramène à `/`. Le lien `#resume` peut rester une ancre HTML.

La fiche affiche encore Moby-Dick à cette étape : son contenu deviendra dynamique dans l’exercice suivant.

**À vérifier :** naviguez entre les pages, utilisez les boutons précédent et suivant du navigateur, puis rechargez une URL `/books/…` avec le serveur Vite.

**Question :** quelle différence observez-vous entre un lien HTML vers une autre page et un `Link` ?

Documentation : [installation et `BrowserRouter`](https://reactrouter.com/start/declarative/installation), [routes, paramètres et liens](https://reactrouter.com/start/declarative/routing).

## 6. Une fiche dynamique avec `useParams` et `useEffect`

1. Dans `Book`, récupérez `id` avec `useParams`, importé depuis `react-router`.
2. Ajoutez une fonction `getBook(id)` dans `src/api/books.js`. Elle appelle `https://www.googleapis.com/books/v1/volumes/ID_DU_LIVRE`, avec le paramètre `key`. La réponse est directement un livre, sans tableau `items`.
3. Chargez ce livre dans un effet dépendant de `id`. Reprenez la gestion du chargement, des erreurs et le nettoyage de l’exercice 4.
4. Remplacez les informations de Moby-Dick par celles du livre reçu : titre, auteurs, couverture, date, langue et résumé. Prévoyez les informations manquantes et un message si l’identifiant ne correspond à aucun livre.
5. Supprimez le bouton « Commander le livre » et sa boîte de dialogue. L’exercice suivant utilisera cet emplacement pour les favoris.

**À vérifier :** deux cartes différentes ouvrent deux fiches différentes. Une URL de fiche copiée dans un nouvel onglet charge le livre sans devoir passer par le catalogue.

**Question :** pourquoi la fiche doit-elle pouvoir charger son livre à partir de l’URL ?

Documentation : [paramètres d’URL](https://reactrouter.com/start/declarative/routing#dynamic-segments), [Google Books : un livre](https://developers.google.com/books/docs/v1/reference/volumes/get).

## 7. Partager des favoris avec `useContext`

1. Créez un contexte avec `createContext` dans `src/contexts/FavoritesContext.js`, puis un composant `FavoritesProvider` dans un fichier séparé. Le provider possède un état contenant les identifiants des livres favoris et expose cet état ainsi qu’une fonction pour ajouter ou retirer un identifiant.
2. Placez ce provider autour de `App` dans `main.jsx`, afin qu’il reste monté pendant la navigation.
3. Dans `Book`, utilisez `useContext` pour ajouter un bouton « Ajouter aux favoris » ou « Retirer des favoris », selon l’état du livre courant.
4. Mettez le tableau à jour sans le modifier directement, en partant de l’état précédent. Un identifiant ne doit jamais apparaître deux fois.
5. Dans `Header`, utilisez le même contexte pour afficher « Favoris : N ». Le nombre doit se mettre à jour dès le clic et rester correct en revenant au catalogue.

Pour cet exercice, les favoris vivent uniquement en mémoire. Un compteur dans le header suffit ; aucune page supplémentaire n’est demandée.

**À vérifier :** ajoutez un livre, revenez à la liste, ouvrez une autre fiche, puis retirez le premier livre. Le compteur suit les changements. Un rechargement remet les favoris à zéro.

**Questions :** que faudrait-il transmettre comme props sans contexte ? Quel rôle joue le provider, et quel rôle joue `useContext` ?

Documentation : [`useContext`](https://react.dev/reference/react/useContext).

## Pour terminer

- Vérifiez une recherche, une fiche, un retour au catalogue et l’ajout/retrait d’un favori.
- Testez l’application au clavier et sur une petite largeur d’écran.
- Lancez `npm run lint` et `npm run build`, puis corrigez les erreurs éventuelles.
- Expliquez avec vos mots quand utiliser `useState`, `useEffect`, `useRef` et `useContext`.

## Bonus courts

- **Persistance des favoris — 15 min :** initialisez l’état du provider depuis le `localStorage`, puis sauvegardez ses modifications dans un effet. Vérifiez qu’un rechargement conserve les favoris et qu’une valeur stockée invalide ne fait pas planter l’application.
- **Hook personnalisé — 15 min :** extrayez le chargement de la fiche dans un hook `useBook(id)` qui retourne le livre, le chargement et l’erreur. Comparez la lisibilité du composant avant et après.
