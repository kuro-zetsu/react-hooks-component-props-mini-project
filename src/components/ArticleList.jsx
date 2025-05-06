import Article from "./Article";

export default function ArticleList ({ posts }) {
    let articles = posts.map((article) => {
        return (
            <Article 
                key = { article.id }
                title = { article.title }
                date = { article.date }
                preview = { article.preview }
                minutes = { article.minutes }
            />  
        )
    });
    return (
        <main>
            { articles }
        </main>
    )
}