import { getCollection, type CollectionEntry } from "astro:content";

export type ReadingList = CollectionEntry<"readingLists">;

export async function getReadingLists(): Promise<ReadingList[]> {
  const lists = await getCollection("readingLists");
  return lists.sort((a, b) => a.data.title.localeCompare(b.data.title));
}

export function readingListHref(list: ReadingList): string {
  const slug = list.data.slug?.trim() || list.id;
  return `/reading-lists/${slug}`;
}

export function normalizeReadingListSlug(raw: string | undefined): string | undefined {
  return raw?.replace(/^\/+|\/+$/g, "");
}
