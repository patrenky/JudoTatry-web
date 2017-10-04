import { format } from "date-fns";

export const formatDate = date => format(date, "DD.MM.YYYY");

export const openLink = name => window.open(name, "_blank");

export const validation = value => (value ? undefined : "*Povinné");
