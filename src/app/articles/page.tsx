import Link from "next/link";
import ArticleItem from "../../../components/articles/ArticleItem";
import { Article } from "@/utils/types";

const ArticlesPage = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const articles: Article[] = await response.json();

    return (
        <section className="container mx-auto px-5 py-6">
            <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
                {
                    articles.map((article) => {
                        return <ArticleItem key={article.id} article={article} />
                    })
                }
            </div>
        </section>
    )
}

export default ArticlesPage
