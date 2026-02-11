import { useTranslation } from "react-i18next";

const languages = [
  { code: "en", label: "English" },
  { code: "fa", label: "فارسی" },
];

export function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    void i18n.changeLanguage(e.target.value);
  };

  return (
    <select value={i18n.resolvedLanguage} onChange={handleChange}>
      {languages.map((lng) => (
        <option key={lng.code} value={lng.code}>
          {lng.label}
        </option>
      ))}
    </select>
  );
}
