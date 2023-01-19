export type CalendarEvent = {
  start: string;
  end: string;
  name: string;
  id: string;
};

export type CalendarAPIResponce = {
  items: {
    id: string;
    end: {
      dateTime: string;
    };
    start: {
      dateTime: string;
    };
    summary: string;
  }[];
};
