import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CtaRow from "./components/CtaRow";
import Pricing from "./components/Pricing";
import VideoEncore from "./components/VideoEncore";
import Objections from "./components/Objections";
import Urgency from "./components/Urgency";
import MiddleHook from "./components/MiddleHook";
import Ribbon from "./components/Ribbon";
import Faq from "./components/Faq";
import SeoArticles from "./components/SeoArticles";
import FinalCta from "./components/FinalCta";
import StickyBar from "./components/StickyBar";
import CursorGlow from "./components/CursorGlow";

export default function App() {
  return (
    <div className="relative min-h-screen overflow-x-clip bg-pearl text-ink">
      <CursorGlow />
      <Navbar />
      <main>
        {/* 1 — الهوك + الفيديو الحيّ جنباً إلى جنب (على الموبايل يظهر الفيديو مباشرة بعد العنوان) */}
        <Hero />
        <CtaRow />

        {/* 2 — الأسعار والباقات في وقتٍ مبكر: قيمة واضحة بلا لفّ ودوران */}
        <Pricing />
        <CtaRow />

        {/* تذكير بالدليل الحيّ */}
        <VideoEncore
          title="شاهدي التحوّل مرةً أخرى.. قبل أن تقرّري"
          note="دقيقة واحدة من المشاهدة تختصر ألف سؤال عن النتيجة"
        />

        {/* 3 — تفكيك المخاوف */}
        <Objections />
        <CtaRow />

        {/* 4 — الندرة وسط الرحلة */}
        <Urgency />
        <CtaRow />

        {/* 5 — البهجة + صورة النتيجة */}
        <MiddleHook />
        <Ribbon />
        <CtaRow compact />

        {/* 6 — الشفافية التامة */}
        <Faq />

        {/* تكرار الفيديو بعد أربعة أقسام */}
        <VideoEncore
          title="نظرة أخيرة على السحر.. قبل خطوة الحجز"
          note="هذه النتيجة بالتحديد.. بانتظار شعركِ"
        />
        <CtaRow />

        {/* 7 — مكتبة درة للجمال (مقالات المعرفة) */}
        <SeoArticles />

        {/* الختام + الخريطة */}
        <FinalCta />
      </main>
      <StickyBar />
    </div>
  );
}
