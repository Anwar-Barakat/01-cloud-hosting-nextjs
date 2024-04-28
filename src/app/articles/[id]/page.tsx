import AddCommentForm from "@/components/comments/AddCommentForm";
import CommentItems from "@/components/comments/CommentItems";
import { Article } from "@/utils/types";

interface SingleArticlePageProps {
  params: { id: string }
}
const SingleArticlePage = async ({ params }: SingleArticlePageProps) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
  if (!response.ok) {
    throw new Error('Article not found')
  }
  const article: Article = await response.json();
  console.log(article);

  return (
    <>
      <main className="pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white dark:bg-gray-900 antialiased">
        <div className="flex flex-col justify-between px-4 mx-auto max-w-screen-xl ">
          <article className="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
            <header className="mb-4 lg:mb-6 not-format">
              <address className="flex items-center mb-6 not-italic">
                <div className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white">
                  <div>
                    <a href="#" rel="author" className="text-xl font-bold text-gray-900 dark:text-white">Jese Leos</a>
                    <p className="text-base text-gray-500 dark:text-gray-400">{article.title}</p>
                    <p className="text-base text-gray-500 dark:text-gray-400">
                    </p>
                  </div>
                </div>
              </address>
              <h1 className="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white">Best practices for successful prototypes</h1>
            </header>
            <p className="lead mb-5">
              {article.body}
            </p>
            <CommentItems />
            <AddCommentForm />
          </article>
        </div>
      </main>
    </>
  )

}

export default SingleArticlePage
