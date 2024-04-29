import Link from "next/link";
import ArticleItem from "../../components/articles/ArticleItem";
import { Article } from "@/utils/types";
import { Metadata } from "next";
import SearchArticleInput from "@/components/articles/SearchArticleInput";
import Pagination from "@/components/articles/Pagination";

const ArticlesPage = async () => {

    await new Promise((resolve, reject) => setTimeout(resolve, 3000))

    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        // cache: 'force-cache', // default cache
        // cache: 'no-cache',
        next: { revalidate: 50 }, // refresh every 50 seconds
    });
    if (!response.ok) {
        throw new Error("Failed to fetch articles")
    }
    const articles: Article[] = await response.json();

    return (
        <section className="container mx-auto px-5 py-6">
            <SearchArticleInput />
            <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
                {
                    articles.slice(0, 12).map((article) => {
                        return <ArticleItem key={article.id} article={article} />
                    })
                }
            </div>
            <Pagination />
        </section>
    )
}

export default ArticlesPage

export const metadata: Metadata = {
    title: 'Articles List',
    description: 'Cloud Hosting Articles List',
}