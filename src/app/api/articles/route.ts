import { articles } from "@/utils/data";
import { CreateArticleDto } from "@/utils/dto";
import { Article } from "@/utils/types";
import { createArticleSchema } from "@/utils/validationSchema";
import { NextRequest, NextResponse } from "next/server";


/**
 * @method GET
 * @route ~/api/articles
 * @desc Get articles from server
 * @access Public
 */
export function GET(request: NextRequest) {
  return NextResponse.json(articles, { status: 200 });
}

// Dto: data transfer object


/**
 * @method POST
 * @route ~/api/articles/create
 * @desc store a new article
 * @access Public
 */
export async function POST(request: NextRequest) {
  const body = (await request.json()) as CreateArticleDto;

  const validation = createArticleSchema.safeParse(body);
  if (!validation.success) {
    return NextResponse.json(
      { message: validation.error.errors[0].message },
      { status: 400 }
    );
  }

  const newArticle: Article = {
    id: articles.length + 1,
    userId: 200,
    title: body.title,
    body: body.body,
  };
  articles.push(newArticle);
  return NextResponse.json({
    message: "created",
    article: newArticle,
    status: 201,
  });
}
