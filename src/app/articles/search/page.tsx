interface searchArticlePageParams {
    searchParams: { search: string }
}

const ArticleSearchPage = ({ searchParams }: searchArticlePageParams) => {

    return (
        <div>
            <h1>Search: {searchParams.search}</h1>
        </div>
    )
}

export default ArticleSearchPage
