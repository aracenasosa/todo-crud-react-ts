export const TODO_FILTERS = {
  ALL: "all",
  ACTIVE: "active",
  COMPLETED: "completed",
} as const;

export const TODO_BUTTONS_FILTER = {
  [TODO_FILTERS.ALL]: {
    literal: "All",
    href: `/?filter=${TODO_FILTERS.ALL}`,
  },
  [TODO_FILTERS.ACTIVE]: {
    literal: "Actives",
    href: `/?filter=${TODO_FILTERS.ACTIVE}`,
  },
  [TODO_FILTERS.COMPLETED]: {
    literal: "Completed",
    href: `/?filter=${TODO_FILTERS.COMPLETED}`,
  },
} as const;
