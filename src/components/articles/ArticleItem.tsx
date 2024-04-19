import { Article } from "@/utils/types"
import Link from "next/link"

interface ArticleItemProps {
    article: Article
}
const ArticleItem = ({ article }: ArticleItemProps) => {
    return (
        <div className="p-5 rounded-lg my-1 shadow-lg border-2 border-gray-400 hover:bg-slate-200 w-full transition-all">
            <h3 className="text-xl font-bold text-gray-900 line-clamp-1">{article.title}</h3>
            <p className="text-lg text-slate-500 my-2 mb-4 line-clamp-1">{article.body}</p>
            <Link className="text-lg text-white bg-purple-700 p-2 rounded-md shadow-md" href={`/articles/${article.id}`} >Read Info </Link>
        </div>
    )
}

export default ArticleItem
