import { parseISO, format } from 'date-fns';

type Props = {
  dateString: string;
};

export function FormattedDate({ dateString }: Props) {
  const date = parseISO(dateString);
  const formatted = format(date, 'LLLL d, yyyy');

  return (
    <time dateTime={dateString}>{formatted}</time>
  );
}
