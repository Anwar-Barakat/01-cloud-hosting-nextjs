import { articles } from "@/utils/data";
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
