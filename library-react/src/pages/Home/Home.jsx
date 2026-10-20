import bookCover from '../../assets/moby-dick.png'
import styles from './Home.module.css'
import BookCard from '../../components/BookCard/BookCard.jsx'
import {useEffect, useRef, useState,} from "react";
import searchBooks from "../../api/books.js"
const defaultSearch ="Ana de armas"
export default function Home() {
    const [search, setSearch] = useState('')
    const searchInputRef = useRef(null)
    const [books, setBooks] = useState([])
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [query, setQuery] = useState(defaultSearch);
    const [refresh, setRefresh] = useState(0);

    useEffect(() => {
        let active = true;

        setError(null);
        setLoading(true);

        async function fetchBooks() {
            try {
                const data = await searchBooks(query)
                if (active) {
                    setBooks(data.items ?? [])
                }
            } catch (e) {
                if (active) {
                    setError(e.message)
                }
            } finally {
                if (active) {
                    setLoading(false)
                }
            }
        }

        fetchBooks()

        return () => {
            active = false
        }
    }, [query, refresh])

    function handleSearchChange(event) {
        setSearch(event.target.value)
    }

    function handleSearchSubmit(event) {
        event.preventDefault()
        const trimmedSearch = search.trim()

        if (trimmedSearch === '') {
            setQuery(defaultSearch)
        } else {
            setQuery(trimmedSearch)
        }
        setRefresh(previousRefresh => previousRefresh + 1)
    }

    function handleClear(event) {
        setSearch('')
        searchInputRef.current.focus()
    }

    return (
        <main className={styles.page}>
            <h1 className={styles.title}>Bibliothèque</h1>
            <p className={styles.description}>
                Bienvenue dans notre bibliothèque. Découvrez notre{' '}
                <strong>sélection de romans d’aventure</strong> et consultez la fiche
                d’un livre pour en savoir plus. Cette sélection vous invite à explorer
                des récits d’aventure et des univers imaginaires.{' '}
                <em>Quel sera votre prochain voyage ?</em>
            </p>

            <form onSubmit={handleSearchSubmit} action="index.html" method="get">
                <div className={styles.searchField}>
                    <input
                        type="search"
                        name="q"
                        id="book-name"
                        aria-label="Rechercher un livre"
                        placeholder="Rechercher un titre, un auteur..."
                        value={search}
                        ref={searchInputRef}
                        onChange={handleSearchChange}
                    />
                    <button type="submit" aria-label="Rechercher">
            <span className="material-symbols-outlined" aria-hidden="true">
              search
            </span>
                    </button>
                    <button type={"button"} onClick={handleClear}>Effacer</button>
                </div>
            </form>
            <p>Recherche : {query}</p>
            <section className={styles.catalogue}>
                <h2>Les livres de la bibliothèque</h2>
                {error && <p role="alert">{error}</p>}
                <ul className={styles.bookList}>
                    {loading && <li>Chargement...</li>}
                    {!loading && !error && books.length === 0 && (
                        <li>Aucun résultat</li>
                    )}
                    {!loading && !error && books.map(book => (
                            <BookCard
                                key={book.id}
                                title={book.volumeInfo.title || 'Titre inconnu'}
                                date={book.volumeInfo.publishedDate || 'Date inconnue'}
                                authors={book.volumeInfo.authors?.join(', ') || 'Auteur inconnu'}
                                couverture={book.volumeInfo.imageLinks?.thumbnail || bookCover}
                            />
                        ))}

                </ul>
            </section>
        </main>
    )
}
