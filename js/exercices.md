# Exercices

1. Créer une nouvelle page index.html et intégrer un script à cette page.
2. Rajouter un bouton "Click me".
3. Ajouter un event listener sur le clic du bouton.
4. Au clic sur le bouton, rajouter un log "Hello world", puis une alert qui affiche "Hello world".
5. Rajouter une fonction qui va fetch l'API suivante : `https://www.googleapis.com/books/v1/volumes`.
6. Rajouter la clé d'API suivante au GET pour que ça fonctionne : `AIzaSyAAU-Fg7X8gopwftnbTfpLvCPxjQIgHzk0`. Vous pouvez logger la réponse pour voir comment la data est faite. Appelez cette fonction au clic sur le bouton.
7. Sortez le fetch du listener du clic pour charger les livres directement au chargement du script.
8. Affichez la liste des livres dans une liste en HTML en manipulant le DOM.
9. Au clic sur le bouton "Click me", ajoutez à la fin de la liste les livres suivants (le retour de l'API est paginé, voir la doc : <https://developers.google.com/books/docs/v1/using#pagination>).

Bonus

10. Quand l'API plante, afficher un message d'erreur (il doit être supprimé si le prochain appel d'API fonctionne).
11. Rajouter un loader pendant le fetch des données.
