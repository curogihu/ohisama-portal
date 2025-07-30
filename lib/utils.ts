import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const sendContentClickEvent = ({
  title,
  categoryFilter,
  memberFilters,
  keyword,
}: {
  title: string
  categoryFilter: string
  memberFilters: string[]
  keyword: string
}) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'content_click', {
      event_category: 'SearchResult',
      event_label: title,
      content_title: title,
      category_filter: categoryFilter,
      member_filters: memberFilters.join(','),
      search_keyword: keyword,
    })
  }
}
