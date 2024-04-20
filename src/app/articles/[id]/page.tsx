import { Article } from "@/utils/types";

interface SingleArticlePageProps{
    params:{id:string}
}
const SingleArticlePage = async ({ params }: SingleArticlePageProps) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
    if (!response.ok) {
        throw new Error('Article not found')
    }
    const article : Article = await response.json();
    console.log(article);
    
  return (
    <div>
      Hello Single
    </div>
  )
}

export default SingleArticlePage
