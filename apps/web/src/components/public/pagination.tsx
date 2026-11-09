"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface PaginationProps {
  total: number;
  limit: number;
  offset: number;
  className?: string;
}

export function Pagination({
  total,
  limit,
  offset,
  className,
}: PaginationProps) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const currentPage = Math.floor(offset / limit) + 1;
  const totalPages = Math.ceil(total / limit);

  if (totalPages <= 1) return null;

  const pageHref = (page: number): string => {
    const params = new URLSearchParams(searchParams.toString());
    if (page <= 1) {
      // Omit offset on page 1 so the canonical /articles URL is preserved.
      params.delete("offset");
    } else {
      params.set("offset", String((page - 1) * limit));
    }
    const qs = params.toString();
    return qs ? `${pathname}?${qs}` : pathname;
  };

  const pages: (number | "...")[] = [];
  if (totalPages <= 7) {
    for (let i = 1; i <= totalPages; i++) pages.push(i);
  } else {
    pages.push(1);
    if (currentPage > 3) pages.push("...");
    for (
      let i = Math.max(2, currentPage - 1);
      i <= Math.min(totalPages - 1, currentPage + 1);
      i++
    ) {
      pages.push(i);
    }
    if (currentPage < totalPages - 2) pages.push("...");
    pages.push(totalPages);
  }

  const isFirst = currentPage === 1;
  const isLast = currentPage === totalPages;

  const navButtonClasses =
    "inline-flex items-center justify-center h-8 w-8 rounded-md border border-input bg-background hover:bg-muted text-foreground transition-colors disabled:opacity-50 disabled:pointer-events-none";

  return (
    <nav
      aria-label="Pagination"
      className={cn("flex items-center justify-center gap-1", className)}
    >
      {/* Prev */}
      {isFirst ? (
        <span
          className={cn(navButtonClasses, "opacity-50 pointer-events-none")}
          aria-disabled="true"
          aria-label="Previous page"
        >
          <ChevronLeft className="h-4 w-4" />
        </span>
      ) : (
        <Link
          href={pageHref(currentPage - 1)}
          rel="prev"
          className={navButtonClasses}
          aria-label="Previous page"
        >
          <ChevronLeft className="h-4 w-4" />
        </Link>
      )}

      {/* Page numbers */}
      {pages.map((page, idx) =>
        page === "..." ? (
          <span
            key={`ellipsis-${idx}`}
            className="px-2 text-muted-foreground text-body-sm"
            aria-hidden="true"
          >
            …
          </span>
        ) : page === currentPage ? (
          <span
            key={page}
            className={cn(
              "inline-flex items-center justify-center h-8 w-8 rounded-md text-body-sm font-medium",
              "bg-ink-900 text-white dark:bg-white dark:text-ink-900",
            )}
            aria-label={`Page ${page}`}
            aria-current="page"
          >
            {page}
          </span>
        ) : (
          <Link
            key={page}
            href={pageHref(page)}
            className={cn(
              "inline-flex items-center justify-center h-8 w-8 rounded-md text-body-sm font-medium",
              "hover:bg-muted text-foreground transition-colors",
            )}
            aria-label={`Page ${page}`}
          >
            {page}
          </Link>
        ),
      )}

      {/* Next */}
      {isLast ? (
        <span
          className={cn(navButtonClasses, "opacity-50 pointer-events-none")}
          aria-disabled="true"
          aria-label="Next page"
        >
          <ChevronRight className="h-4 w-4" />
        </span>
      ) : (
        <Link
          href={pageHref(currentPage + 1)}
          rel="next"
          className={navButtonClasses}
          aria-label="Next page"
        >
          <ChevronRight className="h-4 w-4" />
        </Link>
      )}
    </nav>
  );
}
