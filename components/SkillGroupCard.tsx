"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { SkillGroup } from "@/lib/data";
import { SkillBall } from "./SkillBall";

const PAGE_SIZE = 4;

/**
 * One skill category on a single row of balls. Groups with more than PAGE_SIZE skills get
 * prev/next buttons. Only the current page's balls are mounted, so the shared canvas in
 * <SkillsStage> never draws balls that are paged out of view.
 */
export function SkillGroupCard({ group }: { group: SkillGroup }) {
  const [page, setPage] = useState(0);
  const pages = Math.ceil(group.items.length / PAGE_SIZE);
  const items = group.items.slice(page * PAGE_SIZE, (page + 1) * PAGE_SIZE);

  const arrow =
    "flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-pink-soft text-pink transition-colors hover:border-pink hover:bg-pink-soft disabled:pointer-events-none disabled:opacity-30";

  return (
    <div className="card h-full p-6">
      <h3 className="font-display text-xl font-semibold text-forest">{group.title}</h3>
      <div className="mt-5 flex items-center gap-2">
        {pages > 1 ? (
          <button type="button" aria-label="Previous skills" className={arrow} disabled={page === 0} onClick={() => setPage(page - 1)}>
            <ChevronLeft size={20} />
          </button>
        ) : null}
        <ul className="grid flex-1 grid-cols-4 gap-2 sm:gap-4">
          {items.map((item) => (
            <li key={item.name} className="flex min-w-0 flex-col items-center">
              <div className="aspect-square w-full max-w-24">
                <SkillBall icon={item.icon} />
              </div>
              <span className="mt-1 text-center text-xs font-medium text-ink-muted sm:text-sm">{item.name}</span>
            </li>
          ))}
        </ul>
        {pages > 1 ? (
          <button type="button" aria-label="Next skills" className={arrow} disabled={page === pages - 1} onClick={() => setPage(page + 1)}>
            <ChevronRight size={20} />
          </button>
        ) : null}
      </div>
      {pages > 1 ? (
        <p className="mt-3 text-center text-xs text-ink-muted">
          {page + 1} / {pages}
        </p>
      ) : null}
    </div>
  );
}
