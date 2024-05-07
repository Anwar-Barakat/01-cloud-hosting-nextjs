import prisma from "@/utils/db";
import { CreateArticleDto } from "@/utils/dto";
import { createArticleSchema } from "@/utils/validationSchema";
import { PrismaClient, Article, Comment, User } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

/**
 * @method GET
 * @route ~/api/articles
 * @desc Get articles from server
 * @access Public
 */
export async function GET(request: NextRequest) {
  try {
    let articles = await prisma.article.findMany();
    return NextResponse.json(articles, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "internal error" }, { status: 500 });
  }
}

// Dto: data transfer object

/**
 * @method POST
 * @route ~/api/articles/create
 * @desc store a new article
 * @access Public
 */
export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as CreateArticleDto;

    const validation = createArticleSchema.safeParse(body);
    if (!validation.success) {
      return NextResponse.json(
        { message: validation.error.errors[0].message },
        { status: 400 }
      );
    }

    const newArticle: Article = await prisma.article.create({
      data: {
        title: body.title,
        body: body.body,
      },
    });

    return NextResponse.json({
      message: "created",
      article: newArticle,
      status: 201,
    });
  } catch (error) {
    return NextResponse.json(
      { message: "internal server error" },
      { status: 500 }
    );
  }
}
