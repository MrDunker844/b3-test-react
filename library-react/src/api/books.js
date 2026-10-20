

export default async function searchBooks(query) {
    const url = new URL("https://www.googleapis.com/books/v1/volumes")
    url.searchParams.set("q", query);
    url.searchParams.set("key", import.meta.env.VITE_GOOGLE_BOOKS_API_KEY);
    url.searchParams.set("maxResults", 12);
    try {
        const response = await fetch(url)
        if (!response.ok) {
            throw new Error('La requête a échoué ');
        }
        const data = await response.json();
        return data;
    } catch (err) {
        console.log(err)
        throw err;
    }

}