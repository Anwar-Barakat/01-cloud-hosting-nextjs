import { articles } from "@/utils/data";
import prisma from "@/utils/db";
import { UpdateArticleDto } from "@/utils/dto";
import { NextRequest, NextResponse } from "next/server";
import { string } from "zod";

interface ArticleDetailProps {
  params: { id: string };
}

/**
 * @method GET
 * @route ~/api/articles/:id
 * @desc get the article details
 * @access Public
 */
export async function GET(
  request: NextRequest,
  { params }: ArticleDetailProps
) {
  try {
    const article = await prisma.article.findUnique({
      where: { id: parseInt(params.id) },
    });

    if (!article) {
      return NextResponse.json(
        { message: "Article not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(article, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "internal error", status: 500 });
  }
}

/**
 * @method PUT
 * @route ~/api/articles/:id
 * @desc update the article
 * @access Public
 */
export async function PUT(
  request: NextRequest,
  { params }: ArticleDetailProps
) {
  try {
    const article = await prisma.article.findUnique({
      where: { id: parseInt(params.id) },
    });

    if (!article) {
      return NextResponse.json(
        { message: "Article not found" },
        { status: 404 }
      );
    }

    const body = (await request.json()) as UpdateArticleDto;

    const updatedArticle = await prisma.article.update({
      where: { id: parseInt(params.id) },
      data: {
        title: body.title,
        body: body.body,
      },
    });

    return NextResponse.json(
      { article: updatedArticle, message: "article updated" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ message: "internal error", status: 500 });
  }
}

/**
 * @method DELETE
 * @route ~/api/articles/:id
 * @desc update the article
 * @access Public
 */
export async function DELETE(
  request: NextRequest,
  { params }: ArticleDetailProps
) {
  try {
    const article = prisma.article.findFirst({
      where: { id: parseInt(params.id) },
    });

    if (!article) {
      return NextResponse.json(
        { message: "Article not found" },
        { status: 404 }
      );
    }

    await prisma.article.delete({ where: { id: parseInt(params.id) } });

    return NextResponse.json({ message: "article deleted" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "internal error", status: 500 });
  }
}
