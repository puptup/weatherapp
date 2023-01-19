export const hoursOptions = { hour: "2-digit" } as const;
export const hourAndMinutesOptions = { hour: "2-digit", minute: "2-digit" } as const;

export const wholeDate = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
} as const;

export const shortWeekDay = { weekday: "short" } as const;
export const longWeekday = { weekday: "long" } as const;
