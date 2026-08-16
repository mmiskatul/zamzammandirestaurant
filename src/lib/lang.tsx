import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

type Lang = "en" | "ar";

const dict = {
  en: {
    viewMenu: "View Menu",
    reserve: "Reserve a Table",
    exploreMenu: "Explore Our Menu",
    directions: "Get Directions",
    call: "Call Restaurant",
    heroLabel: "Authentic Yemeni Cuisine • Dubai",
    heroTitleA: "A Taste of Tradition,",
    heroTitleB: "Served the Zam Zam Way.",
    heroText:
      "Experience authentic Yemeni Mandi, tender meats, aromatic rice, and warm Arabian hospitality in the heart of Nadd Al Hamar, Dubai.",
    scroll: "Scroll to discover",
  },
  ar: {
    viewMenu: "عرض القائمة",
    reserve: "احجز طاولة",
    exploreMenu: "استكشف قائمتنا",
    directions: "الاتجاهات",
    call: "اتصل بالمطعم",
    heroLabel: "مأكولات يمنية أصيلة • دبي",
    heroTitleA: "نكهة الأصالة،",
    heroTitleB: "على طريقة زمزم.",
    heroText:
      "استمتع بالمندي اليمني الأصيل واللحوم الطرية والأرز المعطر وكرم الضيافة العربية في قلب ند الحمر، دبي.",
    scroll: "مرّر للاكتشاف",
  },
} as const;

type Ctx = { lang: Lang; setLang: (l: Lang) => void; t: (k: keyof typeof dict.en) => string };

const LangContext = createContext<Ctx>({ lang: "en", setLang: () => {}, t: (k) => dict.en[k] });

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  }, [lang]);

  return (
    <LangContext.Provider value={{ lang, setLang, t: (k) => dict[lang][k] }}>
      {children}
    </LangContext.Provider>
  );
}

export const useLang = () => useContext(LangContext);