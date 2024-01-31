import { useLocale } from "next-intl";

export default function Page() {
  const locale = useLocale();

  return <span>Current locale: {locale}</span>;
}
