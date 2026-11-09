import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function ArticleNotFound() {
  return (
    <div className="max-w-container mx-auto px-4 sm:px-6 py-16 text-center">
      <div className="border-t-4 border-amber-500 pt-8 mb-6 max-w-md mx-auto">
        <p className="text-overline font-semibold uppercase tracking-widest text-amber-600 mb-2">
          404
        </p>
        <h1 className="font-serif text-headline-xl font-bold mb-3">
          Article not found
        </h1>
        <p className="text-body text-muted-foreground mb-6">
          This article may have been moved or is no longer available.
        </p>
      </div>
      <div className="flex gap-3 justify-center">
        <Button variant="amber" asChild>
          <Link href="/articles">Browse Articles</Link>
        </Button>
        <Button variant="outline" asChild>
          <Link href="/">Go Home</Link>
        </Button>
      </div>
    </div>
  );
}
