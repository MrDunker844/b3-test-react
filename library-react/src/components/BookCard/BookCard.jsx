import styles from './BookCard.module.css'
import {useEffect} from "react";
export default function BookCard({title,date,couverture,authors}) {

    return (
            <li>
                <a className={styles.bookCard} href="book.html">
                    <img className={styles.bookCover} src={couverture} alt="" />
                    <div className={styles.bookContent}>
                        <h3 className={styles.bookTitle}>{title}</h3>
                        <p className={styles.bookMeta}>
                            <span className={styles.bookAuthor}>{authors}</span>
                            <time dateTime={date}>{date}</time>
                        </p>
                    </div>
                </a>
            </li>
    )
}