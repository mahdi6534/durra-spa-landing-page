import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Phone, ShieldCheck, Star, MapPin, Clock, Sparkles, Crown,
  Check, Gift, BadgeCheck, CalendarCheck, CreditCard, Leaf,
  Lock, Users, Award, ChevronDown, X, Timer, Home, Moon,
  Gem, HandHeart, Flame, Briefcase, Brain, Zap, Sofa, CarFront, Quote
} from "lucide-react";

const PHONE_DISPLAY = "0501262512";
const PHONE_LINK = "tel:+966501262512";
const WA_NUMBER = "966501262512";
const FRESHA_LINK = "https://www.fresha.com/ar/a/dorh-spa-home-services-riyadh-home-business-dammam-rd-al-yarmuk-riyadh-13251-saudi-arabia-hbmh8w2q";
const waLink = (msg: string) => `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;

/* ---------------- LOGO — لوجو دره سبا الرسمي ---------------- */
function DorhLogo({ dark = false }: { dark?: boolean }) {
  const ink = dark ? "#161616" : "#f7f1e3";
  const sub = dark ? "#161616" : "#f7f1e3";
  return (
    <div className="flex items-center gap-3">
      {/* مربع اللوجو الرسمي مثل صورتكم تماماً */}
      <div
        className={`shrink-0 w-[62px] h-[62px] rounded-2xl flex flex-col items-center justify-center border shadow-sm ${
          dark ? "bg-[#efe6d0] border-[#161616]/10" : "bg-white/[0.06] border-white/15"
        }`}
      >
        <svg viewBox="0 0 64 40" className="w-[38px] h-[24px]">
          {/* حجارة اللوجو الرسمي */}
          <ellipse cx="32" cy="32" rx="22" ry="6.5" fill={ink} />
          <ellipse cx="32" cy="22" rx="15.5" ry="5.8" fill={ink} />
          <ellipse cx="33" cy="13.5" rx="10" ry="5" fill={ink} />
          <path d="M32 1.5 C35.5 5 36.5 7.5 32 10.5 C27.5 7.5 28.5 5 32 1.5Z" fill={ink} />
        </svg>
        <div className="leading-none text-center mt-[2px]" style={{ color: ink }}>
          <div className="font-display tracking-[0.32em] text-[13px] pr-[2px]">DORH</div>
          <div className="text-[8px] tracking-[0.5em] font-bold pr-[3px] mt-[1px] opacity-80">SPA</div>
        </div>
      </div>
      <div className="leading-none">
        <div className="font-display text-[19px]" style={{ color: sub }}>
          دره سبا المنزلي
        </div>
        <div className="flex items-center gap-1.5 mt-1.5">
          <span className="h-[2px] w-6 rounded-full bg-[#c9a227]" />
          <span className="text-[10px] tracking-[0.35em] font-extrabold text-[#c9a227]">DORH SPA</span>
        </div>
      </div>
    </div>
  );
}

function WhatsIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M17.5 14.4c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.5 0 1.47 1.07 2.9 1.22 3.1.15.2 2.11 3.22 5.1 4.51.71.31 1.27.49 1.7.63.72.23 1.37.2 1.88.12.57-.09 1.76-.72 2.01-1.42.25-.7.25-1.29.17-1.42-.07-.13-.27-.2-.57-.35M12.05 21.79h-.01a9.87 9.87 0 0 1-5.03-1.38l-.36-.21-3.74.98 1-3.65-.24-.37a9.86 9.86 0 0 1-1.51-5.26c0-5.45 4.44-9.88 9.9-9.88a9.83 9.83 0 0 1 9.88 9.89c0 5.45-4.44 9.88-9.89 9.88m8.42-18.3A11.82 11.82 0 0 0 12.05 0C5.5 0 .16 5.34.16 11.9c0 2.1.55 4.14 1.59 5.95L.06 24l6.3-1.65a11.9 11.9 0 0 0 5.68 1.45h.01c6.55 0 11.89-5.34 11.89-11.9 0-3.18-1.24-6.16-3.47-8.41" />
    </svg>
  );
}

function GoogleG({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className}>
      <path fill="#4285F4" d="M23.5 12.3c0-.9-.1-1.5-.3-2.3H12v4.5h6.5c0 1.1-.7 2.7-2.1 3.8l-.1.1 3 2.4h.2c1.9-1.8 3-4.4 3-8.5z" />
      <path fill="#34A853" d="M12 24c3.2 0 5.9-1.1 7.9-2.9l-3.8-2.9c-1 .7-2.4 1.2-4.1 1.2-3.1 0-5.8-2.1-6.8-5l-.1.1-3.1 2.4v.1C3.9 21.3 7.7 24 12 24z" />
      <path fill="#FBBC05" d="M5.2 14.4c-.2-.7-.4-1.5-.4-2.4s.1-1.7.4-2.4l-.1-.1-3.1-2.4H1.9C.7 9.5 0 10.7 0 12s.7 2.5 1.9 3.9l3.3-1.5z" />
      <path fill="#EA4335" d="M12 4.6c1.8 0 3 .8 3.7 1.4l3.3-3.2C17.9 1.1 15.2 0 12 0 7.7 0 3.9 2.7 1.9 7.1l3.3 2.5c1-2.9 3.7-5 6.8-5z" />
    </svg>
  );
}

/* ---------------- REAL GOOGLE REVIEWS ---------------- */
const REVIEWS = [
  {
    name: "Waleed Dosari", initial: "W", color: "from-[#7c4a12] to-[#3d250a]",
    meta: "مرشد محلي • 52 مراجعة • 5 صور", time: "قبل 3 أشهر",
    text: "بدون مبالغة شي خيال.. أنا راجع من انتداب والمنتدب يعرف كيف يبي يتنظّف. ولازم طالع من الحمام المغربي قسم بالله كني عريس من الاهتمام اللي شفته، المشخمخ فيه عن الحق نورالدين يجهزك خير بذمة وضمير. الاستقبال والضيافة ميه ميه.",
  },
  {
    name: "Aziz Mohammed", initial: "A", color: "from-[#0f7b4d] to-[#0a4a2f]",
    meta: "مرشد محلي • 135 مراجعة • 129 صورة", time: "قبل 5 أيام", isNew: true,
    text: "إذا تبي مساج قوي وعلى أصوله، لا تعدّي هالمكان وبالتحديد اسأل عن نور! جيتهم بالصدفة قبل أمسك خط الشرقية، وبصراحة انبهرت بالتجربة. 140 ريال لمساج ساعة كاملة مع الأحجار والزيت بسعر أقوى! أنصح بالمكان وبقوة، شكراً نور على المساج الممتاز وشكر خاص لموظف الاستقبال على الترحيب والأسلوب الراقي. أكيد لي رجعة!",
  },
  {
    name: "KHALID A.M", initial: "K", color: "from-[#b03a48] to-[#6e1f2a]",
    meta: "مرشد محلي • 310 مراجعات • 175 صورة", time: "قبل يوم واحد", isNew: true,
    text: "مساج رائع مع الهندي محمد نور يعطيكم العافية.. المركز هذا من أفضل مراكز المساج بالرياض أسعار وجودة خدمة.",
  },
  {
    name: "محمد الجمادي", initial: "م", color: "from-[#3f7d6b] to-[#1e4a3f]",
    meta: "مرشد محلي • 17 مراجعة • صورة واحدة", time: "قبل أسبوع", isNew: true,
    text: "تجربة ممتازة جداً. المكان راقٍ والخدمة رائعة، والأخصائي كارلا ممتاز ومحترف جداً في المساج. تعامل راقٍ واهتمام بالتفاصيل، وبالتأكيد سأكرر الزيارة وأنصح بها بشدة.",
  },
  {
    name: "Ahmad JA", initial: "A", color: "from-[#5b5bd6] to-[#2c2c7a]",
    meta: "7 مراجعات • صورة واحدة", time: "قبل 5 أيام", isNew: true,
    text: "جربت المساج والحمام المغربي ممتاز جداً وتستحق التجربة، وأشكر الأخ يوسف بالحمام المغربي رهيب.",
  },
  {
    name: "Riyadh Abdullah", initial: "R", color: "from-[#8a6a24] to-[#4a3a12]",
    meta: "مرشد محلي • 15 مراجعة • 3 صور", time: "قبل شهرين",
    text: "أقسم بالله دخلت متكسّر وطلعت وكالة.. مساج وراحة وشي من الآخر.",
  },
];

/* ---------------- PACKAGES ---------------- */
const BOX_NOTE = "علبة نظافة خاصة فيك — استخدام مرة واحدة: شامبو + شاور جل + شوت + فوطة مغلفة تفتح أمامك";
const PACKAGES = [
  {
    id: "dawam", icon: Briefcase, badge: "الأكثر طلباً للموظفين",
    name: "باقة تعب الدوام", tagline: "راحة وتجديد بعد يوم عمل طويل وإجهاد الدوام",
    discount: "48%", oldPrice: "382", newPrice: "199", count: "5 خدمات", duration: "50 دقيقة",
    image: "/images/pkg-dawam.jpg", imgLabel: "أخصائي رجالي محترف يخدمك وين ما كنت",
    desc: "جبنا لك السبا لحد بيتك مع أمهر الأخصائيين الرجال! افصل عن تعب الدوام وجدد طاقتك بجلسة مساج سويدي احترافية 50 دقيقة وكاسات هواء تفكك كل توترك — باحترافية فندقية كاملة. ولأنك تستاهل، دلعناك بـ 3 خدمات مجانية بـ 199 ريال بس وتقدر تقسطها براحتك مع تابي وتمارا.",
    includes: ["مساج سويدي احترافي 50 دقيقة — يفك التشنجات وينشط الدورة الدموية", "كاسات الهواء — تسحب التوتر العميق من الظهر والأكتاف"],
    freebies: ["جاكوزي أقدام", "ماسك للوجه", "كمادات عيون دافئة"],
    suitable: "للموظف المجهد الذي يبحث عن «ريسترت» حقيقي لجسمه ومزاجه بعد يوم طويل، بخدمة احترافية تأتيه لحد بابه بكل خصوصية.",
    waMsg: "اهلا فريق دره سبا اريد طلب باقة تعب الدوام المنزلية",
  },
  {
    id: "aasab", icon: Brain, badge: "لهداة الأعصاب والروقان",
    name: "باقة تعب الأعصاب", tagline: "راحة مهدئة لتعب الأعصاب والإجهاد الذهني",
    discount: "38%", oldPrice: "319", newPrice: "199", count: "4 خدمات", duration: "50 دقيقة",
    image: "/images/pkg-aasab.jpg", imgLabel: "عناية اليدين والقدمين بخصوصية بيتك",
    desc: "«تحس وكأن جبل انزاح عنك.. هدوء داخلي، أعصاب رايقة، وخفة تخليك ترجع لمودك الصافي» — جلسة احترافية 50 دقيقة مساج لليدين والقدمين على يد أخصائي رجالي محترف تفكك أعصابك المشدودة، مدعومة بجاكوزي ومقشر مجاناً لتصفية ذهنك وتجديد إشراقتك.",
    includes: ["مساج القدمين الاحترافي 25 دقيقة — يسحب الإرهاق ويرخي الأعصاب", "مساج اليدين 25 دقيقة — يفك شد الأعصاب المتراكم"],
    freebies: ["جاكوزي الأقدام", "مقشر الوجه والرقبة"],
    suitable: "لمن يعاني الضغط الذهني والشد العصبي ويبحث عن «فاصل إجباري» من الهدوء العميق بخدمة احترافية لحد بيته.",
    waMsg: "اهلا فريق دره سبا اريد طلب باقة تعب الاعصاب المنزلية",
  },
  {
    id: "abhar", icon: Zap, badge: "الحل الجذري للأبهر",
    name: "باقة تعب الأبهر", tagline: "راحة مهدئة لتعب الأبهر وإجهاد أعلى الظهر",
    discount: "48%", oldPrice: "403", newPrice: "209", count: "5 خدمات", duration: "50 دقيقة",
    image: "/images/pkg-abhar.jpg", imgLabel: "جلسة علاجية احترافية بخصوصية تامة",
    desc: "فكّ عقدة الأبهر اللي كاتمة أنفاسك وطيّر ثقل أكتافك! جلسة احترافية 50 دقيقة مساج تايلاندي وكاسات هواء على يد أخصائي رجالي محترف ومدرب، تفكك تيبس ظهرك وترجع لك خفتك وأنت مرتاح ببيتك. وضفنا لك 4 مجانيات بـ 209 ريال بس.",
    includes: ["المساج التايلاندي الاحترافي 50 دقيقة — يستهدف العقد العضلية المستعصية", "كاسات الهواء — تفك ألم الأبهر وترخي تيبس الأكتاف"],
    freebies: ["جاكوزي أقدام", "ماسك للوجه", "كمادات عيون", "شاي أعشاب ضيافة"],
    suitable: "لمن يعاني آلام الرقبة وأعلى الظهر من الجلوس الطويل أو القيادة، ويبحث عن معالجة احترافية فورية تعيد المرونة والنشاط.",
    waMsg: "اهلا فريق دره سبا اريد طلب باقة تعب الابهر",
  },
  {
    id: "daght", icon: Flame, badge: "ريستارت عميق",
    name: "باقة ضغط الحياة", tagline: "استرخاء علاجي يخفف ضغوط الحياة",
    discount: "52%", oldPrice: "603", newPrice: "289", count: "5 خدمات", duration: "50 دقيقة",
    image: "/images/pkg-daght.jpg", imgLabel: "أخصائي رجالي محترف — جلسة بمعايير إعلانية راقية",
    desc: "ارمي مسؤولياتك وراك وافصل عن ضجة العالم! جلسة «ريستارت» احترافية عميقة تصفي ذهنك وتذيب التوتر على يد أخصائي رجالي محترف. 50 دقيقة مساج علاجي وأحجار دافئة تأتيك لحد بيتك، مدعومة بـ 3 هدايا مجانية بـ 289 ريال بس.. عِش الدلال وقسطها بدون هم.",
    includes: ["المساج العلاجي الاحترافي 25 دقيقة — يذيب التيبس ويطرد الطاقة السلبية", "الأحجار الدافئة 25 دقيقة — حرارة تتغلغل وترخي الأعصاب"],
    freebies: ["جهاز تدليك العيون", "ماسك للوجه", "جاكوزي أقدام"],
    suitable: "لكل من «شايل هموم جبل» — ملاذك الآمن الذي يفرغ شحنات التوتر ويعيد توازنك النفسي والجسدي بخبرة احترافية.",
    waMsg: "اهلا فريق دره سبا اريد طلب باقة ضغط الحياة",
  },
  {
    id: "lamsa", icon: Gem, badge: "دلع وأناقة متكاملة",
    name: "باقة لمسة", tagline: "لمسة فاخرة من العناية والاسترخاء",
    discount: "31%", oldPrice: "593", newPrice: "409", count: "5 خدمات", duration: "50 دقيقة",
    image: "/images/pkg-lamsa.jpg", imgLabel: "جلسة مساج احترافية داخل بيتك — راحة وأناقة",
    desc: "دلع نفسك بـ «لمسة» فخامة تجدد روحك وتعيد لك هيبتك! جلسة احترافية 50 دقيقة مساج سيجنتشر علاجي مع بديكير متكامل على يد أخصائي رجالي محترف داخل بيتك، وكملنا دلعك بـ 4 مجانيات بـ 409 ريال بس.. اطلبها الآن وقسطها بدون حوسة.",
    includes: ["مساج السيجنتشر الاحترافي 50 دقيقة — خلطة مدروسة ترفع هرمون السعادة", "بديكير اليدين والقدمين — عناية فائقة وأناقة كاملة"],
    freebies: ["جاكوزي أقدام", "ماسك", "كمادات عيون", "شاي أعشاب ضيافة"],
    suitable: "للرجل الأنيق الذي يجمع بين الاسترخاء العميق والعناية الشخصية — «مكافأة استثنائية» بعد إنجاز كبير أو استعداد لمناسبة مهمة.",
    waMsg: "اهلا فريق دره سبا اريد طلب باقة لمسة",
  },
  {
    id: "vip", icon: Crown, badge: "باقة العرسان والنخبة — 7 خدمات",
    name: "باقة دره سبا VIP", tagline: "تجربة العريس الملكية المتكاملة للعناية والاسترخاء",
    discount: "31%", oldPrice: "1087", newPrice: "749", count: "7 خدمات", duration: "90 دقيقة",
    image: "/images/pkg-vip.jpg", imgLabel: "ركن السبا الملكي نجهزه لك وين ما كنت",
    desc: "عيش دور «الملك» في بيتك — الباقة المخصصة للعرسان والنخبة! تجديد شامل يغسل همومك بـ 7 خدمات ملكية احترافية. 90 دقيقة مساج VIP وكاسات هواء على يد نخبة الأخصائيين الرجال، مع حمام مغربي فاخر وبديكير متكامل.. ولأنك VIP دلعناك بـ 3 مجانيات بـ 749 ريال بس!",
    includes: ["مساج دره سبا VIP الاحترافي 90 دقيقة + كاسات هواء — تدليك عميق يرسّت مزاجك", "حمام مغربي فاخر + بديكير — عناية ملكية تجدد خلايا جسمك"],
    freebies: ["تنظيف بشرة", "كمادات عيون دافئة", "جاكوزي أقدام"],
    suitable: "مصممة خصيصاً للعريس قبل ليلته الكبيرة، وللنخبة والقياديين — «عَمرة» كاملة للجسم والمزاج باحترافية وخصوصية منزلك.",
    waMsg: "اهلا فريق دره سبا اريد طلب باقة دره VIP",
  },
];

const FAQS = [
  { q: "كيف تتم الخدمة المنزلية؟ هل أحتاج أجهز شيء؟", a: "لا تجهز أي شيء. أخصائي رجالي محترف يجيك لحد باب بيتك — بيت، شقة أو استراحة — بسرير مساج متنقل وتجهيز احترافي كامل: زيوت طبيعية، جهاز جاكوزي الأقدام وشاي الأعشاب. ولكل عميل علبة خاصة استخدام مرة واحدة (شامبو + شاور جل + شوت + فوطة مغلفة تفتح أمامك). نحتاج فقط مساحة 2×2 متر. نوصلك خلال 30-60 دقيقة من تأكيد الحجز، وبعد الجلسة نرتب المكان وكأننا ما كنا." },
  { q: "هل الخدمة للرجال فقط؟ ومن هم الأخصائيون؟", a: "نعم، دره سبا المنزلي مخصص للرجال فقط 100% — لا يوجد لدينا أخصائيات إطلاقاً. جميع الأخصائيين رجال محترفون ومعتمدون من فروع دره المساج بخبرة تتجاوز 5 سنوات، ويخضعون لتقييم مستمر من العملاء. الخدمة احترافية بالكامل بمعايير فندقية." },
  { q: "كم مدة الوصول؟ وما مناطق التغطية؟", a: "نوصلك خلال 30-60 دقيقة فقط من تأكيد الحجز! نغطي كامل مدينة الرياض: الشمال (العليا، النرجس، الياسمين)، الشرق (اليرموك، الروضة، الحمراء)، الوسط والغرب والجنوب — بيتك، شقتك أو استراحتك وين ما كنت." },
  { q: "هل يمكن التقسيط عبر تابي وتمارا؟", a: "نعم! جميع الباقات قابلة للتقسيط على 4 دفعات بدون فوائد عبر تابي وتمارا عند الحجز عبر الواتساب أو الرابط. اطلب الآن وقسّطها براحتك." },
  { q: "ما سياسة الإلغاء وإعادة الجدولة؟", a: "يمكنك الإلغاء أو التأجيل مجاناً قبل 4 ساعات من الموعد. رضاك أولويتنا دائماً." },
  { q: "هل الأدوات نظيفة ومعقمة؟ وش علبة الاستخدام الواحد؟", a: "بالتأكيد — خدمة احترافية ببروتوكول فنادق 5 نجوم: لكل عميل علبة مخصصة استخدام مرة واحدة فيها شامبو + شاور جل + شوت + فوطة استخدام مرة واحدة مغلفة تفتح أمامك، إضافة لتعقيم كامل للسرير والأجهزة قبل وبعد كل عميل." },
];

function useCountdown() {
  const [t, setT] = useState({ h: "07", m: "42", s: "18" });
  useEffect(() => {
    const tick = () => {
      const now = new Date();
      const end = new Date();
      end.setHours(23, 59, 59, 999);
      const diff = Math.max(0, end.getTime() - now.getTime());
      setT({
        h: String(Math.floor(diff / 3600000)).padStart(2, "0"),
        m: String(Math.floor((diff % 3600000) / 60000)).padStart(2, "0"),
        s: String(Math.floor((diff % 60000) / 1000)).padStart(2, "0"),
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);
  return t;
}

export default function App() {
  const [modal, setModal] = useState<null | "privacy" | "about">(null);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [activePkg, setActivePkg] = useState(0);
  const [waOpen, setWaOpen] = useState(false);
  const [waBadge, setWaBadge] = useState(true);
  const cd = useCountdown();

  useEffect(() => {
    const id = setTimeout(() => setWaOpen(true), 90000);
    return () => clearTimeout(id);
  }, []);

  return (
    <div dir="rtl" className="min-h-screen bg-[#faf7f1] text-[#1b2a44] overflow-x-hidden">
      {/* ===== TOP BAR : 3 items ===== */}
      <div className="bg-[#0b1a30] text-[12.5px] relative z-50">
        <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-center sm:justify-between gap-4">
          <div className="hidden sm:flex items-center gap-2 text-[#e8d5a8]/90 font-bold">
            <MapPin className="w-3.5 h-3.5 text-[#c9a227]" />
            <span>الرياض • نوصلك خلال 30-60 دقيقة — بيتك، شقتك، استراحتك وين ما كنت</span>
          </div>
          <div className="flex items-center gap-1 text-white">
            <a href={PHONE_LINK} className="flex items-center gap-1.5 px-3 py-1.5 rounded-full hover:bg-white/10 transition font-extrabold">
              <Phone className="w-3.5 h-3.5 text-[#d9b64a]" /> اتصل بنا
            </a>
            <span className="text-white/20">|</span>
            <button onClick={() => setModal("privacy")} className="flex items-center gap-1.5 px-3 py-1.5 rounded-full hover:bg-white/10 transition font-bold text-white/90">
              <ShieldCheck className="w-3.5 h-3.5 text-[#d9b64a]" /> سياسة الخصوصية
            </button>
            <span className="text-white/20">|</span>
            <button onClick={() => setModal("about")} className="flex items-center gap-1.5 px-3 py-1.5 rounded-full hover:bg-white/10 transition font-bold text-white/90">
              <Users className="w-3.5 h-3.5 text-[#d9b64a]" /> من نحن
            </button>
          </div>
        </div>
      </div>

      {/* ===== URGENCY ===== */}
      <div className="bg-gradient-to-l from-[#8a6a24] via-[#d9b64a] to-[#8a6a24] text-[#0b1a30] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-center gap-3 text-[13px] sm:text-sm font-extrabold">
          <Timer className="w-4 h-4 animate-pulse shrink-0" />
          <span className="truncate">خصومات حتى 52% لفترة محدودة — الأسعار ترجع الليلة</span>
          <span className="hidden sm:flex items-center gap-1 bg-[#0b1a30] text-white rounded-lg px-2.5 py-0.5 text-[12px] tabular-nums" dir="ltr">{cd.h}:{cd.m}:{cd.s}</span>
        </div>
      </div>

      {/* ===== HEADER ===== */}
      <header className="sticky top-0 z-40 bg-[#faf7f1]/92 backdrop-blur-xl border-b border-[#0f2340]/10">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between gap-3">
          <DorhLogo dark />
          <nav className="hidden lg:flex items-center gap-7 text-[14px] font-extrabold text-[#0f2340]/70">
            <a href="#packages" className="hover:text-[#a97e3f] transition">الباقات</a>
            <a href="#reviews" className="hover:text-[#a97e3f] transition">تقييمات جوجل</a>
            <a href="#team" className="hover:text-[#a97e3f] transition">فريقنا وتجهيزنا</a>
            <a href="#how" className="hover:text-[#a97e3f] transition">كيف نجيك؟</a>
            <a href="#faq" className="hover:text-[#a97e3f] transition">الأسئلة الشائعة</a>
          </nav>
          <div className="flex items-center gap-2">
            <a href={PHONE_LINK} className="hidden sm:flex items-center gap-2 rounded-full border-2 border-[#0f2340]/15 px-4 py-2 text-sm font-extrabold text-[#0f2340] hover:border-[#c9a227] hover:bg-[#c9a227]/10 transition">
              <Phone className="w-4 h-4" /> {PHONE_DISPLAY}
            </a>
            <a href={waLink("اهلا فريق دره سبا اريد الاستفسار عن الباقات المنزلية")} className="flex items-center gap-2 rounded-full bg-[#22c15e] px-4 sm:px-5 py-2.5 text-sm font-extrabold text-white shadow-lg hover:brightness-110 transition">
              <WhatsIcon className="w-4 h-4" /> احجز الآن
            </a>
          </div>
        </div>
      </header>

      {/* ===== HERO ===== */}
      <section className="relative overflow-hidden sand-pattern islamic-pattern">
        <div className="max-w-7xl mx-auto px-4 pt-8 pb-6 sm:pt-12 sm:pb-10">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-8 items-center">
            <div>
              <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 rounded-full bg-[#0f2340] text-white px-4 py-2 text-[12px] font-bold mb-4 shadow-lg">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                دره سبا المنزلي • خدمة فروع دره المساج بالرياض
              </motion.div>

              <motion.h1 initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 }} className="font-display text-[30px] leading-[1.3] sm:text-[44px] sm:leading-[1.25] text-[#0f2340]">
                زحمة الطريق وتعب الدوام
                <span className="block text-[#7c6a1e]">سحبوا طاقتك؟</span>
                <span className="block mt-2 text-[21px] sm:text-[28px] font-extrabold text-[#1b2a44]">
                  لا تطلع من بيتك.. جبنا <span className="gold-text">«السبا الفندقي»</span> لحد غرفتك!
                </span>
              </motion.h1>

              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.15 }} className="mt-4 text-[14.5px] sm:text-[15.5px] leading-8 text-[#3c4c64] max-w-2xl">
                دره سبا المنزلي: نحن خدمة السبا المنزلية لفروع دره المساج بالرياض — فهل تعرف من نحن؟
                جودة فندقية فاخرة بأسعار تكسر القاعدة.. وستلمس هذا الفرق وتراه بأم عينيك!
              </motion.p>

              <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="mt-5 grid grid-cols-3 max-w-xl rounded-2xl overflow-hidden border border-[#0f2340]/10 bg-white card-shadow">
                {[
                  { n: "+5", l: "فروع بالرياض", i: MapPin },
                  { n: "+20K", l: "عميل يثق فينا", i: Users },
                  { n: "+5000", l: "تقييم ذهبي بجوجل", i: Star },
                ].map((s, k) => (
                  <div key={k} className={`px-2 py-3 sm:py-4 text-center ${k !== 2 ? "border-l border-[#0f2340]/10" : ""}`}>
                    <s.i className="w-4 h-4 mx-auto text-[#a97e3f] mb-1" />
                    <div className="font-display text-lg sm:text-2xl text-[#0f2340] tabular-nums" dir="ltr">{s.n}</div>
                    <div className="text-[11px] sm:text-[12.5px] text-[#5b6b82] font-bold">{s.l}</div>
                  </div>
                ))}
              </motion.div>

              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.25 }} className="mt-5 flex flex-col sm:flex-row gap-3 max-w-xl">
                <a href="#packages" className="flex-1 flex items-center justify-center gap-2 rounded-2xl bg-[#0f2340] text-white font-display text-[16px] py-4 shadow-xl hover:bg-[#16325e] transition">
                  <Sparkles className="w-5 h-5 text-[#d9b64a]" /> شوف الباقات والخصومات
                </a>
                <a href={waLink("اهلا فريق دره سبا اريد حجز موعد منزلي")} className="flex-1 flex items-center justify-center gap-2 rounded-2xl bg-[#22c15e] text-white font-extrabold py-4 animate-wa">
                  <WhatsIcon /> واتساب مباشر
                </a>
              </motion.div>

              <div className="mt-4 flex flex-wrap items-center gap-2 text-[12px] font-bold text-[#3c4c64]">
                <span className="flex items-center gap-1.5 rounded-full bg-white border border-[#0f2340]/10 px-3 py-1.5 card-shadow"><Lock className="w-3.5 h-3.5 text-[#3f7d6b]" /> خصوصية تامة</span>
                <span className="flex items-center gap-1.5 rounded-full bg-white border border-[#0f2340]/10 px-3 py-1.5 card-shadow"><Leaf className="w-3.5 h-3.5 text-[#3f7d6b]" /> منتجات طبيعية</span>
                <span className="flex items-center gap-1.5 rounded-full bg-white border border-[#0f2340]/10 px-3 py-1.5 card-shadow"><CreditCard className="w-3.5 h-3.5 text-[#3f7d6b]" /> قسّطها تابي وتمارا</span>
                <span className="flex items-center gap-1.5 rounded-full bg-[#0f2340] text-white px-3 py-1.5">♂ للرجال فقط</span>
              </div>
            </div>

            {/* hero visual — Saudi client white thobe + ghutra, therapist official uniform */}
            <motion.div initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.15 }} className="relative">
              <div className="relative bg-white p-3 rounded-[30px] border border-[#c9a227]/40 card-shadow-lg">
                <div className="overflow-hidden arch-img border border-[#0f2340]/10">
                  <img src="/images/hero-white-thobe.jpg" alt="عميل سعودي بالثوب الأبيض والغترة يستقبل خدمة دره سبا المنزلية ببيته" className="h-[380px] sm:h-[480px] w-full object-cover" />
                </div>
                <div className="absolute top-6 right-6 flex flex-col gap-2">
                  <span className="rounded-full bg-white/95 backdrop-blur px-3 py-1.5 text-[12px] font-extrabold text-[#0f2340] border border-[#c9a227]/40 card-shadow flex items-center gap-1.5"><GoogleG className="w-4 h-4" /> 4.9 من 5000+ تقييم حقيقي</span>
                  <span className="rounded-full bg-[#22c15e] px-3 py-1.5 text-[12px] font-extrabold text-white shadow-lg">متاح الآن بالرياض • 30-60 دقيقة</span>
                </div>
                <div className="absolute bottom-6 right-6 left-6 flex flex-col gap-2">
                  <div className="rounded-2xl bg-[#0f2340]/94 backdrop-blur border border-[#c9a227]/40 p-4 flex items-center justify-between gap-3 text-white">
                    <div>
                      <div className="text-[11.5px] text-[#d9b64a] font-bold flex items-center gap-1"><Sofa className="w-3.5 h-3.5" /> لحد باب بيتك — يبدأ من</div>
                      <div className="font-display text-3xl mt-0.5">199 <span className="text-sm font-bold">ر.س</span></div>
                    </div>
                    <a href={PHONE_LINK} className="flex items-center gap-2 rounded-xl bg-[#d9b64a] text-[#0b1a30] px-4 py-3 font-extrabold text-sm hover:brightness-110"><Phone className="w-4 h-4" /> <span dir="ltr">{PHONE_DISPLAY}</span></a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-2 text-[12px]">
            <span className="text-[#5b6b82] font-bold">دفع مرن وآمن:</span>
            {["تابي Tabby", "تمارا Tamara", "مدى", "Visa", "Apple Pay", "حجز موثق Fresha"].map((p) => (
              <span key={p} className="rounded-lg bg-white border border-[#0f2340]/10 px-3 py-1.5 font-bold text-[#0f2340]/75 card-shadow">{p}</span>
            ))}
          </div>
        </div>

        <div className="relative bg-[#0f2340] py-3 overflow-hidden" dir="ltr">
          <div className="flex gap-8 whitespace-nowrap animate-marquee w-max" dir="rtl">
            {[0, 1].map((r) => (
              <div key={r} className="flex gap-8 text-[13px] font-bold text-[#e8d5a8]">
                {["مساج سويدي احترافي", "كاسات هواء", "أحجار دافئة", "حمام مغربي", "بديكير رجالي", "تنظيف بشرة", "جاكوزي أقدام", "نوصلك وين ما كنت 30-60 دقيقة", "أخصائيون رجال محترفون", "علبة استخدام واحد لكل عميل"].map((t) => (
                  <span key={t + r} className="flex items-center gap-2">✦ {t}</span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== REAL GOOGLE REVIEWS ===== */}
      <section id="reviews" className="bg-[#f1e9d9]/60 border-b border-[#0f2340]/10">
        <div className="max-w-7xl mx-auto px-4 py-9 sm:py-12">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 mb-6">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-white border border-[#0f2340]/10 px-4 py-2 text-[12.5px] font-extrabold text-[#0f2340] card-shadow">
                <GoogleG className="w-5 h-5" />
                تقييمات حقيقية 100% من صفحة فروعنا على Google Maps
                <BadgeCheck className="w-4 h-4 text-[#4285F4]" />
              </div>
              <h2 className="font-display text-[26px] sm:text-[36px] mt-3 text-[#0f2340]">وش قالوا عنا <span className="gold-text">بجوجل؟</span> كلامهم.. مو كلامنا</h2>
              <p className="text-[#5b6b82] text-[13.5px] mt-1.5 font-bold">نفس الأخصائيين الرجال اللي قيّموهم بالفروع — هم اللي يجونك لحد باب بيتك بالخدمة المنزلية الاحترافية.</p>
            </div>
            <div className="flex items-center gap-3 rounded-2xl bg-[#0f2340] text-white px-5 py-3.5 card-shadow shrink-0">
              <GoogleG className="w-8 h-8 bg-white rounded-full p-1" />
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="font-display text-2xl">4.9</span>
                  <span className="flex text-[#fbbc05]">{[0, 1, 2, 3, 4].map((i) => <Star key={i} className="w-4 h-4 fill-current" />)}</span>
                </div>
                <div className="text-[11.5px] text-white/70 font-bold">+5000 تقييم ذهبي موثق</div>
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
            {REVIEWS.map((r, i) => (
              <motion.figure key={i} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: (i % 3) * 0.07 }} className="relative rounded-2xl bg-white border border-[#0f2340]/10 p-5 card-shadow hover:border-[#c9a227]/50 hover:-translate-y-1 transition-all">
                <Quote className="absolute top-4 left-4 w-7 h-7 text-[#c9a227]/20" />
                <figcaption className="flex items-center gap-3 mb-2.5">
                  <span className={`w-11 h-11 rounded-full bg-gradient-to-br ${r.color} flex items-center justify-center font-display text-white text-lg shrink-0`}>{r.initial}</span>
                  <span className="min-w-0">
                    <span className="block font-extrabold text-[14px] text-[#0f2340] truncate" dir="auto">{r.name}</span>
                    <span className="block text-[11px] text-[#5b6b82] font-bold truncate">{r.meta}</span>
                  </span>
                  <GoogleG className="w-5 h-5 mr-auto shrink-0" />
                </figcaption>
                <div className="flex items-center gap-2 mb-2.5">
                  <span className="flex text-[#fbbc05]">{[0, 1, 2, 3, 4].map((k) => <Star key={k} className="w-4 h-4 fill-current" />)}</span>
                  <span className="text-[11px] text-[#5b6b82] font-bold">{r.time}</span>
                  {r.isNew && <span className="text-[10px] font-extrabold text-[#1a73e8] border border-[#1a73e8]/30 bg-[#1a73e8]/5 rounded-md px-1.5 py-0.5">جديد</span>}
                </div>
                <blockquote className="text-[13px] leading-[1.95] text-[#2c3d57]">“{r.text}”</blockquote>
              </motion.figure>
            ))}
          </div>
          <p className="mt-4 text-center text-[12px] text-[#5b6b82] font-bold">لقطات نصية منشورة بإذن أصحابها من تقييمات Google — الأسماء والتواريخ كما ظهرت تماماً.</p>
        </div>
      </section>

      {/* ===== PACKAGES NAV ===== */}
      <div className="sticky top-[68px] z-30 bg-[#faf7f1]/94 backdrop-blur-xl border-b border-[#0f2340]/10">
        <div className="max-w-7xl mx-auto px-4 py-2.5 flex gap-2 overflow-x-auto scrollbar-hide">
          {PACKAGES.map((p, i) => (
            <button key={p.id} onClick={() => { setActivePkg(i); document.getElementById(`pkg-${p.id}`)?.scrollIntoView({ behavior: "smooth", block: "center" }); }} className={`shrink-0 flex items-center gap-1.5 rounded-full px-4 py-2 text-[12.5px] font-extrabold border transition ${activePkg === i ? "bg-[#0f2340] text-white border-[#0f2340]" : "bg-white text-[#0f2340]/65 border-[#0f2340]/12 hover:border-[#c9a227]"}`}>
              <p.icon className="w-3.5 h-3.5 text-[#a97e3f]" /> {p.name}
            </button>
          ))}
        </div>
      </div>

      {/* ===== PACKAGES ===== */}
      <section id="packages" className="max-w-7xl mx-auto px-4 py-9 sm:py-12">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#0f2340] text-white px-4 py-2 text-[12.5px] font-bold"><Crown className="w-4 h-4 text-[#d9b64a]" /> باقات دره سبا المنزلية الفاخرة — خدمة احترافية لحد بيتك</div>
          <h2 className="font-display text-[30px] sm:text-[42px] leading-tight mt-3 text-[#0f2340]">اختر <span className="gold-text">باقتك</span>.. والباقي علينا</h2>
          <p className="text-[#5b6b82] text-[14px] mt-2 font-bold">6 باقات احترافية مدروسة للرجال — نوصلك خلال 30-60 دقيقة وين ما كنت + تقسيط تابي وتمارا</p>
          <div className="mt-4 rounded-2xl bg-[#0f2340] text-white p-4 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-center border border-[#c9a227]/40">
            <span className="flex items-center gap-2 font-extrabold text-[13.5px]"><Gift className="w-5 h-5 text-[#d9b64a]" /> {BOX_NOTE}</span>
            <span className="hidden sm:block w-1 h-1 rounded-full bg-[#d9b64a]" />
            <span className="flex items-center gap-1.5 text-[12.5px] font-bold text-[#f3e6c3]"><BadgeCheck className="w-4 h-4 text-emerald-400" /> خدمة احترافية 100% — أخصائيون رجال فقط</span>
          </div>
          <div className="tick-line mt-5 max-w-xs mx-auto" />
        </div>

        <div className="space-y-6">
          {PACKAGES.map((p, idx) => {
            const Icon = p.icon;
            const isVip = p.id === "vip";
            const flip = idx % 2 === 1;
            return (
              <motion.article id={`pkg-${p.id}`} key={p.id} initial={{ opacity: 0, y: 26 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.5 }} className={`relative rounded-[26px] overflow-hidden bg-white border ${isVip ? "border-[#c9a227]/70 card-shadow-lg" : "border-[#0f2340]/10 card-shadow"}`}>
                {isVip && <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-l from-[#8a6a24] via-[#f3e6c3] to-[#8a6a24] z-10" />}
                <div className="flex flex-wrap items-center justify-between gap-2 px-5 sm:px-7 pt-5">
                  <span className={`inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-[12px] font-extrabold ${isVip ? "bg-gradient-to-l from-[#0f2340] to-[#274a7d] text-[#f3e6c3] border border-[#c9a227]/50" : "bg-[#0f2340]/5 border border-[#0f2340]/10 text-[#0f2340]"}`}>
                    <Icon className="w-3.5 h-3.5 text-[#c9a227]" /> {p.badge}
                  </span>
                  <span className="flex items-center gap-1.5 text-[12px] font-bold text-[#5b6b82]"><Clock className="w-3.5 h-3.5 text-[#a97e3f]" /> {p.duration} مساج • {p.count}</span>
                </div>

                <div className={`grid lg:grid-cols-[1fr_1.05fr] gap-0 mt-4 ${flip ? "lg:[&>*:first-child]:order-2" : ""}`}>
                  <div className="relative min-h-[300px] lg:min-h-[500px] bg-[#eef2ee]">
                    <img src={p.image} alt={p.name + " - خدمة منزلية احترافية لحد بيتك"} loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0b1a30]/70 via-transparent to-transparent" />
                    <div className="absolute top-4 right-4">
                      <div className="relative w-[88px] h-[88px] sm:w-[102px] sm:h-[102px] flex flex-col items-center justify-center text-center rotate-[-6deg]">
                        <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full drop-shadow-xl">
                          <path d="M50 2 L58 12 L70 8 L73 20 L85 22 L83 34 L94 40 L88 50 L94 60 L83 66 L85 78 L73 80 L70 92 L58 88 L50 98 L42 88 L30 92 L27 80 L15 78 L17 66 L6 60 L12 50 L6 40 L17 34 L15 22 L27 20 L30 8 L42 12 Z" fill="#0b1a30" stroke="#d9b64a" strokeWidth="2.5" />
                        </svg>
                        <span className="relative font-display text-2xl sm:text-[28px] text-[#f3e6c3] leading-none" dir="ltr">-{p.discount}</span>
                        <span className="relative text-[10px] font-bold text-[#d9b64a]">لفترة محدودة</span>
                      </div>
                    </div>
                    <div className="absolute bottom-4 right-4 left-4 flex flex-col gap-2">
                      <span className="self-start rounded-full bg-white/95 px-3 py-1.5 text-[11.5px] font-extrabold text-[#0f2340] border border-[#c9a227]/40 flex items-center gap-1.5"><Home className="w-3.5 h-3.5 text-[#3f7d6b]" /> {p.imgLabel}</span>
                      <div className="rounded-2xl bg-white/97 backdrop-blur border border-[#0f2340]/10 p-3.5 flex items-center justify-between gap-3">
                        <div>
                          <div className="text-[11.5px] text-[#5b6b82] font-bold">السعر قبل: <span className="line-through text-red-500">{p.oldPrice} ر.س</span></div>
                          <div className="flex items-baseline gap-1.5 mt-0.5">
                            <span className="font-display text-[34px] sm:text-[40px] leading-none text-[#0f2340]">{p.newPrice}</span>
                            <span className="font-bold text-[13px] text-[#a97e3f]">ر.س</span>
                          </div>
                          <div className="text-[10.5px] text-emerald-700 font-extrabold">شامل الضريبة والتوصيل والتجهيز</div>
                        </div>
                        <div className="text-left shrink-0">
                          <div className="text-[11px] font-bold text-[#0f2340]">قسّطها على 4 دفعات</div>
                          <div className="flex gap-1 mt-1.5">
                            <span className="rounded-md bg-[#3aef8b]/20 border border-[#1da851]/40 text-[#0f7b4d] text-[11px] font-extrabold px-2 py-1">tabby</span>
                            <span className="rounded-md bg-[#ff7ab8]/15 border border-[#ff7ab8]/40 text-[#c2437f] text-[11px] font-extrabold px-2 py-1">tamara</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-5 sm:p-7">
                    <h3 className="font-display text-[26px] sm:text-[32px] leading-tight text-[#0f2340]">{p.name}</h3>
                    <p className="text-[#a97e3f] font-extrabold text-[13.5px] mt-1">{p.tagline}</p>
                    <p className="text-[14px] leading-8 text-[#2c3d57] mt-3">{p.desc}</p>

                    <div className="mt-4 rounded-2xl bg-[#f6f1e5] border border-[#c9a227]/25 p-4">
                      <div className="text-[12.5px] font-extrabold text-[#0f2340] mb-2 flex items-center gap-1.5"><HandHeart className="w-4 h-4 text-[#a97e3f]" /> وش تشمل الجلسة؟</div>
                      <ul className="space-y-2">
                        {p.includes.map((b) => (
                          <li key={b} className="flex gap-2 text-[13.5px] leading-7 text-[#1b2a44] font-bold"><span className="mt-1.5 w-5 h-5 shrink-0 rounded-full bg-[#0f2340] flex items-center justify-center"><Check className="w-3 h-3 text-[#f3e6c3]" strokeWidth={3} /></span>{b}</li>
                        ))}
                      </ul>
                      <div className="mt-3 pt-3 border-t border-dashed border-[#a97e3f]/30">
                        <div className="text-[12.5px] font-extrabold text-[#0f7b4d] mb-2 flex items-center gap-1.5"><Gift className="w-4 h-4" /> هداياك المجانية</div>
                        <div className="flex flex-wrap gap-1.5">
                          {p.freebies.map((f) => (
                            <span key={f} className="rounded-full bg-emerald-600/10 border border-emerald-600/25 text-emerald-800 text-[12px] font-extrabold px-3 py-1.5">+ {f} مجاناً</span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="mt-3 rounded-2xl bg-[#eef3f0] border border-[#3f7d6b]/25 p-3.5">
                      <p className="text-[12.5px] leading-7 text-[#23403a]"><span className="font-extrabold text-[#0f2340]">من تناسب:</span> {p.suitable}</p>
                    </div>

                    <div className="mt-4 grid gap-2.5">
                      <a href={waLink(p.waMsg)} target="_blank" rel="noreferrer" className="group flex items-center justify-center gap-2 rounded-2xl bg-[#22c15e] hover:bg-[#1aa851] transition text-white font-extrabold text-[15px] py-4 shadow-lg">
                        <WhatsIcon className="w-5 h-5 group-hover:scale-110 transition" />
                        اطلب الآن عبر الواتساب.. وقسّطها براحتك
                      </a>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        <a href={PHONE_LINK} className="flex items-center justify-center gap-2 rounded-2xl border-2 border-[#0f2340]/20 hover:border-[#0f2340] hover:bg-[#0f2340] hover:text-white transition font-extrabold text-[13px] py-3.5 text-[#0f2340]">
                          <Phone className="w-4 h-4" /> اتصل للحجز: <span dir="ltr">{PHONE_DISPLAY}</span>
                        </a>
                        <a href={FRESHA_LINK} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 rounded-2xl bg-[#0f2340] hover:bg-[#1a3a68] transition text-white font-extrabold text-[13.5px] py-3.5">
                          <CalendarCheck className="w-4 h-4 text-[#d9b64a]" /> احجز عبر فريشا
                        </a>
                      </div>
                      <div className="rounded-xl bg-[#0f2340]/5 border border-[#0f2340]/10 px-3 py-2.5 flex items-start gap-2">
                        <Gift className="w-4 h-4 shrink-0 text-[#a97e3f] mt-0.5" />
                        <p className="text-[11.5px] leading-6 font-bold text-[#0f2340]/80">{BOX_NOTE}</p>
                      </div>
                      <p className="text-center text-[11.5px] text-[#5b6b82] font-bold">✓ تأكيد فوري واتساب • ✓ نوصلك خلال 30-60 دقيقة • ✓ كاش / شبكة / تقسيط</p>
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </section>

      {/* ===== HOW ===== */}
      <section id="how" className="bg-[#0f2340] islamic-pattern">
        <div className="max-w-7xl mx-auto px-4 py-10 sm:py-14">
          <div className="text-center mb-8">
            <h2 className="font-display text-2xl sm:text-4xl text-white">كيف يجيك <span className="gold-text">السبا لحد باب بيتك؟</span></h2>
            <p className="text-white/60 text-[14px] mt-2 font-bold">4 خطوات فقط وتتحول غرفتك لفندق 5 نجوم — نوصلك خلال 30-60 دقيقة وين ما كنت</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {[
              { i: CalendarCheck, t: "1. احجز بضغطة", d: "واتساب أو اتصال أو فريشا — اختر باقتك ووقتك المناسب" },
              { i: CarFront, t: "2. نجيك خلال 30-60 دقيقة", d: "أخصائي رجالي بالزي البني الرسمي DORH SPA + سرير متنقل وتجهيز معقم لبيتك أو استراحتك" },
              { i: Sofa, t: "3. نجهز أجواءك", d: "شموع، روائح، جاكوزي وشاي أعشاب + علبتك الخاصة استخدام مرة واحدة" },
              { i: Moon, t: "4. افصل واسترخي", d: "50-90 دقيقة احترافية ونسيان تام.. ونرتب ونمشي بهدوء" },
            ].map((s, k) => (
              <div key={k} className="rounded-2xl bg-white/[0.06] border border-[#c9a227]/25 p-5 backdrop-blur">
                <s.i className="w-8 h-8 text-[#d9b64a] mb-3" />
                <div className="font-display text-[16px] text-white">{s.t}</div>
                <p className="text-[13px] leading-7 text-white/65 mt-1.5">{s.d}</p>
              </div>
            ))}
          </div>
          <div className="mt-4 rounded-2xl bg-[#faf7f1] border border-[#c9a227]/40 p-4 flex flex-col sm:flex-row items-center justify-center gap-2 text-center">
            <span className="flex items-center gap-2 font-extrabold text-[14px] text-[#0f2340]"><Gift className="w-5 h-5 text-[#a97e3f]" /> {BOX_NOTE}</span>
          </div>
          <div className="mt-4 grid sm:grid-cols-3 gap-3">
            {[
              { i: ShieldCheck, t: "احترافية وتعقيم 5 نجوم", d: "علبة استخدام واحد لكل عميل + أدوات معقمة تفتح أمامك" },
              { i: Lock, t: "خصوصية رجالية تامة", d: "أخصائيون رجال فقط — خدمة احترافية باحترام كامل لبيتك" },
              { i: Award, t: "وصول 30-60 دقيقة", d: "نوصلك وين ما كنت — بيت، شقة أو استراحة بكل الرياض" },
            ].map((g, k) => (
              <div key={k} className="flex gap-3 rounded-2xl bg-[#faf7f1] p-4">
                <span className="w-11 h-11 shrink-0 rounded-xl bg-[#0f2340] flex items-center justify-center"><g.i className="w-5 h-5 text-[#d9b64a]" /></span>
                <div><div className="font-extrabold text-[14px] text-[#0f2340]">{g.t}</div><div className="text-[12.5px] text-[#5b6b82] leading-6 mt-0.5">{g.d}</div></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TEAM & TOOLS — زيّنا الرسمي وتجهيزنا الاحترافي ===== */}
      <section id="team" className="bg-[#f1e9d9]/60 border-b border-[#0f2340]/10">
        <div className="max-w-7xl mx-auto px-4 py-10 sm:py-14">
          <div className="text-center max-w-2xl mx-auto mb-7">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#0f2340] text-white px-4 py-2 text-[12.5px] font-bold"><BadgeCheck className="w-4 h-4 text-[#d9b64a]" /> فريق محترف.. وتجهيز يشرّف</div>
            <h2 className="font-display text-[26px] sm:text-[36px] mt-3 text-[#0f2340]">تعرف على <span className="gold-text">أخصائييك وتجهيزك</span> قبل ما نطرق بابك</h2>
            <p className="text-[#5b6b82] text-[13.5px] mt-2 font-bold">نفس الزي البني الرسمي بشعار DORH SPA اللي شفته بصور فريقنا — ونفس الشنط والأدوات المعقمة — هي اللي توصلك لحد بيتك</p>
          </div>
          <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-4 items-stretch">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="relative rounded-[26px] overflow-hidden bg-white border border-[#c9a227]/40 card-shadow-lg min-h-[380px]">
              <img src="/images/team-uniform.jpg" alt="أخصائي دره سبا بالزي البني الرسمي بشعار DORH SPA على الصدر" className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b1a30]/85 via-transparent to-transparent" />
              <div className="absolute top-4 right-4 flex flex-col gap-2">
                <span className="rounded-full bg-white/95 px-3 py-1.5 text-[11.5px] font-extrabold text-[#0f2340] border border-[#c9a227]/40">🦺 الزي الرسمي: أوفرول بني + تيشيرت أبيض + شعار DORH SPA على الصدر</span>
                <span className="self-start rounded-full bg-[#22c15e] px-3 py-1.5 text-[11.5px] font-extrabold text-white">أخصائيون رجال محترفون فقط</span>
              </div>
              <div className="absolute bottom-4 right-4 left-4 rounded-2xl bg-white/96 backdrop-blur border border-[#0f2340]/10 p-3.5 flex items-center justify-between gap-2">
                <div className="text-[12px] font-bold text-[#0f2340] leading-6">تعرفه من أول نظرة: نفس اللبس البني، شعار DORH SPA،<br />وبطاقة تعريفية + تأكيد واتساب قبل الوصول</div>
                <a href={waLink("اهلا فريق دره سبا اريد التأكد من موعد وصول الأخصائي")} className="shrink-0 rounded-xl bg-[#0f2340] text-white text-[12px] font-extrabold px-4 py-2.5 hover:bg-[#1a3a68]">تأكيد موعدي</a>
              </div>
            </motion.div>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                { t: "شنط DORH SPA الرسمية", d: "سرير متنقل + شنط قماشية بشعارنا فيها كل التجهيز — تدخل بيتك مرتبة وتطلع مرتبة", e: "🧳" },
                { t: "سرير + مناشف مغلفة", d: "سرير مساج فندقي ومناشف بشعار دره سبا تُفرش أمامك وتُستبدل بعد كل عميل", e: "🛏️" },
                { t: "جاكوزي + جهاز عيون", d: "جاكوزي أقدام متنقل وجهاز تدليك العيون — معقمة قبل وبعد كل جلسة", e: "♨️" },
                { t: "زيوت وأدوات خشبية", d: "زيوت طبيعية مغلقة + أدوات مساج خشبية + أحجار دافئة وكاسات هواء", e: "🌿" },
                { t: "شاي أعشاب وضيافة", d: "علبة شاي أعشاب فاخرة تُحضّر لك أثناء الجلسة — ضيافة تليق فيك", e: "🍵" },
                { t: "علبتك الخاصة", d: "شامبو + شاور جل + شوت + فوطة — استخدام مرة واحدة وتفتح أمامك", e: "🎁" },
              ].map((c, k) => (
                <motion.div key={c.t} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: k * 0.05 }} className="rounded-2xl bg-white border border-[#0f2340]/10 p-4 card-shadow hover:border-[#c9a227]/50 transition">
                  <div className="text-2xl">{c.e}</div>
                  <div className="mt-2 font-display text-[14px] text-[#0f2340]">{c.t}</div>
                  <p className="mt-1 text-[12px] leading-6 text-[#5b6b82] font-bold">{c.d}</p>
                </motion.div>
              ))}
            </div>
          </div>
          <p className="mt-4 text-center text-[12px] text-[#5b6b82] font-bold">📸 صور فريقنا وأدواتنا الحقيقية أرسلها العميل — والمعروض أعلاه توثيق مطابق لزيّنا وتجهيزنا الرسمي</p>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section id="faq" className="max-w-4xl mx-auto px-4 py-10 sm:py-14">
        <h2 className="font-display text-2xl sm:text-3xl text-center text-[#0f2340]">عندك سؤال؟ <span className="gold-text">عندنا الجواب</span></h2>
        <div className="mt-6 space-y-2.5">
          {FAQS.map((f, i) => (
            <div key={i} className={`rounded-2xl border overflow-hidden transition bg-white ${openFaq === i ? "border-[#c9a227]/60 card-shadow" : "border-[#0f2340]/10"}`}>
              <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full flex items-center justify-between gap-3 p-4 text-right font-extrabold text-[14px] sm:text-[15px] text-[#0f2340]">
                {f.q}
                <span className={`w-8 h-8 shrink-0 rounded-full flex items-center justify-center border transition ${openFaq === i ? "bg-[#0f2340] text-[#f3e6c3] border-[#0f2340] rotate-180" : "border-[#0f2340]/15 text-[#a97e3f]"}`}><ChevronDown className="w-4 h-4" /></span>
              </button>
              <AnimatePresence>
                {openFaq === i && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                    <p className="px-4 pb-5 text-[13.5px] leading-8 text-[#3c4c64]">{f.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </section>

      {/* ===== FINAL CTA ===== */}
      <section className="max-w-7xl mx-auto px-4 pb-10">
        <div className="relative rounded-[28px] overflow-hidden border border-[#c9a227]/40 card-shadow-lg">
          <img src="/images/pkg-vip.jpg" alt="" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-l from-[#0b1a30]/97 via-[#0b1a30]/90 to-[#0b1a30]/55" />
          <div className="relative p-6 sm:p-12 grid lg:grid-cols-2 gap-6 items-center">
            <div>
              <div className="font-ruqaa text-[26px] sm:text-4xl leading-snug text-white">الليلة.. <span className="text-[#f3e6c3]">نام خفيف</span> بدون هموم بكرا</div>
              <p className="mt-3 text-white/70 text-[14px] leading-8">احجز الآن — أخصائيونا الرجال المحترفون متوزعون الآن في أحياء الرياض وجاهزون للوصول إليك خلال 30-60 دقيقة وين ما كنت. الخصومات تنتهي الليلة والمواعيد المسائية تخلص بسرعة.</p>
              <div className="mt-4 flex flex-wrap items-center gap-2 text-[13px] font-bold">
                <span className="flex items-center gap-1.5 text-emerald-300"><span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" /> 3 أخصائيين رجال متاحين الآن قربك</span>
                <span className="text-white/30">•</span>
                <span className="text-[#f3e6c3] tabular-nums" dir="ltr">ينتهي العرض: {cd.h}:{cd.m}:{cd.s}</span>
              </div>
            </div>
            <div className="grid gap-2.5">
              <a href={waLink("اهلا فريق دره سبا اريد حجز موعد الليلة")} className="flex items-center justify-center gap-2 rounded-2xl bg-[#22c15e] py-4 font-extrabold text-[16px] text-white animate-wa"><WhatsIcon /> احجز موعدك الآن واتساب</a>
              <div className="grid grid-cols-2 gap-2.5">
                <a href={PHONE_LINK} className="flex items-center justify-center gap-2 rounded-2xl bg-white text-[#0b1a30] py-3.5 font-extrabold"><Phone className="w-4 h-4" /> <span dir="ltr">{PHONE_DISPLAY}</span></a>
                <a href={FRESHA_LINK} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 rounded-2xl border-2 border-[#d9b64a]/60 text-[#f3e6c3] py-3.5 font-extrabold hover:bg-[#d9b64a]/10"><CalendarCheck className="w-4 h-4" /> حجز فريشا</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="bg-[#080f1f] text-white">
        <div className="max-w-7xl mx-auto px-4 py-10 grid md:grid-cols-3 gap-8">
          <div>
            <DorhLogo />
            <p className="mt-4 text-[13px] leading-7 text-white/55">دره سبا المنزلي — امتداد فروع دره المساج بالرياض. سبا فندقي فاخر للرجال يصلك لحد باب البيت: مساج احترافي، حمام مغربي، عناية شخصية، بخصوصية تامة ومنتجات طبيعية.</p>
            <div className="mt-4 flex flex-wrap gap-1.5 text-[11.5px] font-bold">
              <span className="rounded-full bg-white/5 border border-white/10 px-3 py-1.5">♂ للرجال فقط</span>
              <span className="rounded-full bg-white/5 border border-white/10 px-3 py-1.5">🛡️ خصوصية تامة</span>
              <span className="rounded-full bg-white/5 border border-white/10 px-3 py-1.5">🌿 منتجات طبيعية</span>
            </div>
          </div>
          <div>
            <div className="font-display text-[15px] mb-3 text-[#f3e6c3]">روابط سريعة</div>
            <div className="grid gap-2 text-[13.5px] text-white/65 font-bold">
              <a href="#packages" className="hover:text-[#d9b64a]">باقات السبا المنزلي</a>
              <a href="#reviews" className="hover:text-[#d9b64a]">تقييمات جوجل الحقيقية</a>
              <a href="#how" className="hover:text-[#d9b64a]">كيف نخدمك؟</a>
              <button onClick={() => setModal("about")} className="text-right hover:text-[#d9b64a]">من نحن</button>
              <button onClick={() => setModal("privacy")} className="text-right hover:text-[#d9b64a]">سياسة الخصوصية</button>
            </div>
          </div>
          <div>
            <div className="font-display text-[15px] mb-3 text-[#f3e6c3]">تواصل واحجز</div>
            <a href={PHONE_LINK} className="flex items-center gap-3 rounded-2xl bg-white/[0.05] border border-white/10 p-3.5 hover:border-[#d9b64a]/50 transition">
              <span className="w-10 h-10 rounded-xl bg-[#d9b64a] flex items-center justify-center"><Phone className="w-5 h-5 text-[#0b1a30]" /></span>
              <span><span className="block text-[11.5px] text-white/50 font-bold">اتصل بنا الآن</span><span className="font-display text-lg tabular-nums" dir="ltr">{PHONE_DISPLAY}</span></span>
            </a>
            <div className="mt-2.5 flex items-center gap-2 text-[12px] text-white/50 font-bold"><MapPin className="w-4 h-4 text-[#d9b64a]" /> اليرموك، الرياض — ونغطي كامل المدينة منزلياً</div>
            <div className="mt-1.5 flex items-center gap-2 text-[12px] text-white/50 font-bold"><Clock className="w-4 h-4 text-[#d9b64a]" /> يومياً من 10 صباحاً حتى 2 بعد منتصف الليل</div>
          </div>
        </div>
        <div className="border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-[11.5px] text-white/40 font-bold text-center">
            <span>© 2026 دره سبا — جميع الحقوق محفوظة</span>
            <span>خدمات مساج احترافية للرجال فقط • صور تعبيرية محتشمة متوافقة مع سياسات الإعلان</span>
          </div>
        </div>
      </footer>

      {/* ===== STICKY MOBILE ===== */}
      <div className="fixed bottom-0 inset-x-0 z-40 sm:hidden bg-white/96 backdrop-blur-xl border-t border-[#0f2340]/10 px-3 pt-2 pb-[max(0.6rem,env(safe-area-inset-bottom))] shadow-[0_-10px_30px_rgba(15,35,64,0.12)]">
        <div className="grid grid-cols-2 gap-2">
          <button onClick={() => { setWaOpen(true); setWaBadge(false); }} className="flex items-center justify-center gap-1.5 rounded-xl bg-[#22c15e] text-white font-extrabold text-[13.5px] py-3"><WhatsIcon className="w-4 h-4" /> واتساب • قسّطها</button>
          <a href={PHONE_LINK} className="flex items-center justify-center gap-1.5 rounded-xl bg-[#0f2340] text-white font-extrabold text-[13.5px] py-3"><Phone className="w-4 h-4" /> اتصال فوري</a>
        </div>
      </div>
      <div className="h-[70px] sm:hidden" />

      {/* ===== WHATSAPP POPUP — خدمة العملاء | يمين الشاشة ===== */}
      <div className="fixed z-50 right-3 sm:right-6 bottom-[86px] sm:bottom-6 flex flex-col items-end gap-3">
        <AnimatePresence>
          {waOpen && (
            <motion.div
              initial={{ opacity: 0, y: 24, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 24, scale: 0.96 }}
              transition={{ type: "spring", stiffness: 320, damping: 28 }}
              className="w-[340px] max-w-[calc(100vw-24px)] max-h-[calc(100dvh-170px)] overflow-y-auto scrollbar-hide rounded-[22px] bg-white border border-[#0f2340]/10 shadow-[0_30px_70px_-15px_rgba(11,26,48,0.45)]"
            >
              {/* header */}
              <div className="relative bg-[#0b1a30] px-4 pt-4 pb-5 overflow-hidden">
                <div className="absolute inset-0 islamic-pattern opacity-60" />
                <div className="absolute -left-10 -top-10 w-36 h-36 rounded-full bg-[#c9a227]/15 blur-2xl" />
                <div className="relative flex items-start gap-3">
                  <div className="relative shrink-0">
                    <div className="w-12 h-[52px] rounded-xl bg-[#efe6d0] flex flex-col items-center justify-center border border-black/10">
                      <svg viewBox="0 0 64 40" className="w-[30px] h-[19px]">
                        <ellipse cx="32" cy="32" rx="22" ry="6.5" fill="#161616" />
                        <ellipse cx="32" cy="22" rx="15.5" ry="5.8" fill="#161616" />
                        <ellipse cx="33" cy="13.5" rx="10" ry="5" fill="#161616" />
                        <path d="M32 1.5 C35.5 5 36.5 7.5 32 10.5 C27.5 7.5 28.5 5 32 1.5Z" fill="#161616" />
                      </svg>
                      <div className="leading-none text-center mt-[1px] text-[#161616]">
                        <div className="font-display tracking-[0.3em] text-[9px] pr-[1px]">DORH</div>
                        <div className="text-[6px] tracking-[0.45em] font-bold pr-[2px] opacity-70">SPA</div>
                      </div>
                    </div>
                    <span className="absolute -bottom-0.5 -left-0.5 w-3.5 h-3.5 rounded-full bg-emerald-400 border-2 border-[#0b1a30]" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-display text-[15px] text-white leading-tight">دره سبا | خدمة العملاء</div>
                    <div className="mt-1 flex items-center gap-1.5 text-[11.5px] font-bold text-emerald-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      متصل الآن • يرد عادة خلال دقائق
                    </div>
                    <div className="mt-0.5 text-[11px] font-bold text-white/50" dir="ltr">{PHONE_DISPLAY}</div>
                  </div>
                  <button onClick={() => setWaOpen(false)} aria-label="إغلاق" className="w-8 h-8 shrink-0 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 flex items-center justify-center text-white transition">
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>
              {/* body */}
              <div className="bg-[#efe7d8] px-3.5 py-4 islamic-pattern">
                <div className="max-w-[85%] rounded-2xl rounded-tr-md bg-white p-3 shadow-sm border border-black/5">
                  <p className="text-[12.5px] leading-7 text-[#1b2a44] font-bold">هلا وغلا فيك حياك الله في <span className="text-[#0f2340] font-display">دره سبا المنزلي</span> 🌟</p>
                  <p className="mt-1 text-[12px] leading-6 text-[#3c4c64]">أخصائيونا الرجال جاهزون يوصلوك خلال <b>30-60 دقيقة</b> وين ما كنت بالرياض. اختر باقتك من الأزرار بالأسفل 👇 وبتفتح لك محادثة جاهزة.</p>
                  <div className="mt-1.5 flex items-center justify-end gap-1 text-[10px] text-black/40 font-bold">الآن <span className="text-[#53bdeb] text-[12px] leading-none">✓✓</span></div>
                </div>
                <div className="mt-2.5">
                  <div className="mb-1.5 flex items-center gap-1.5 text-[11.5px] font-extrabold text-[#0f2340]">
                    <span className="w-5 h-5 rounded-full bg-[#0f2340] flex items-center justify-center text-[10px] text-[#f3e6c3]">✦</span>
                    اختر باقتك واضغطها — توصلك محادثة جاهزة
                  </div>
                  <div className="grid gap-1.5 max-h-[248px] overflow-y-auto pl-0.5 scrollbar-hide">
                    {PACKAGES.map((p) => (
                      <a key={p.id} href={waLink(p.waMsg)} target="_blank" rel="noreferrer" className="group flex items-center gap-2.5 rounded-2xl bg-white border border-[#0f2340]/10 p-2 pr-2.5 shadow-sm hover:bg-[#0f2340] hover:border-[#0f2340] transition">
                        <span className="w-9 h-9 shrink-0 rounded-xl bg-[#f6f1e5] border border-[#c9a227]/30 flex items-center justify-center group-hover:bg-white/10 group-hover:border-white/15 transition">
                          <p.icon className="w-4 h-4 text-[#a97e3f] group-hover:text-[#d9b64a]" />
                        </span>
                        <span className="flex-1 min-w-0 text-right">
                          <span className="block truncate text-[12px] font-extrabold text-[#0f2340] group-hover:text-white leading-tight">{p.name}</span>
                          <span className="mt-0.5 flex items-center gap-1.5 text-[11px] font-bold">
                            <span className="text-[#0f7b4d] group-hover:text-emerald-300">{p.newPrice} ر.س</span>
                            <span className="line-through text-black/30 group-hover:text-white/40">{p.oldPrice}</span>
                            <span className="rounded-md bg-red-500/10 border border-red-500/20 text-red-600 group-hover:text-red-200 group-hover:border-red-200/30 px-1 py-px text-[10px] font-extrabold" dir="ltr">-{p.discount}</span>
                          </span>
                        </span>
                        <span className="w-8 h-8 shrink-0 rounded-full bg-[#22c15e] flex items-center justify-center text-white shadow group-hover:scale-110 transition">
                          <WhatsIcon className="w-4 h-4" />
                        </span>
                      </a>
                    ))}
                  </div>
                  <p className="mt-1.5 text-center text-[10.5px] font-bold text-[#5b6b82]">كل الباقات شاملة التوصيل + علبة الاستخدام الواحد + تقسيط تابي وتمارا</p>
                </div>
              </div>
              {/* footer */}
              <div className="bg-[#f7f2e7] border-t border-[#0f2340]/10 p-3">
                <a href={waLink("اهلا فريق دره سبا عندي استفسار")} target="_blank" rel="noreferrer" className="flex items-center gap-2 rounded-full bg-white border border-black/10 p-1.5 pr-4 shadow-sm hover:border-[#22c15e]/50 transition">
                  <span className="flex-1 text-[12px] font-bold text-black/35">اكتب استفسارك هنا...</span>
                  <span className="w-10 h-10 rounded-full bg-[#22c15e] flex items-center justify-center text-white shrink-0 shadow-md">
                    <WhatsIcon className="w-5 h-5 -scale-x-100" />
                  </span>
                </a>
                <p className="mt-2 text-center text-[10.5px] font-bold text-black/40">اضغط زر الإرسال وبتفتح معك محادثة واتساب مباشرة 🔒</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* distinctive button */}
        <motion.button
          onClick={() => { setWaOpen(!waOpen); setWaBadge(false); }}
          whileTap={{ scale: 0.94 }}
          aria-label="تواصل واتساب"
          className="group relative flex items-center gap-2.5 rounded-full bg-[#0b1a30] border-2 border-[#c9a227]/60 p-1.5 pl-4 sm:pl-5 shadow-[0_18px_45px_-10px_rgba(11,26,48,0.6)] hover:bg-[#12294d] transition"
        >
          {waBadge && !waOpen && (
            <span className="absolute -top-1.5 -left-1.5 min-w-[22px] h-[22px] px-1 rounded-full bg-red-500 text-white text-[11px] font-extrabold flex items-center justify-center border-2 border-white shadow">1</span>
          )}
          <span className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-[#2fe07a] to-[#12a94e] flex items-center justify-center text-white shrink-0">
            <span className="absolute inset-0 rounded-full bg-[#22c15e]/40 animate-ping" />
            {waOpen ? <X className="relative w-5 h-5" /> : <WhatsIcon className="relative w-6 h-6" />}
          </span>
          <span className="text-right leading-tight">
            <span className="block text-[13px] font-display text-white">واتساب دره سبا</span>
            <span className="flex items-center gap-1 text-[10.5px] font-bold text-emerald-300">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              متصل الآن — رد فوري
            </span>
          </span>
        </motion.button>
      </div>

      {/* ===== MODALS ===== */}
      <AnimatePresence>
        {modal && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[60] bg-[#0b1a30]/70 backdrop-blur-sm flex items-end sm:items-center justify-center p-0 sm:p-6" onClick={() => setModal(null)}>
            <motion.div initial={{ y: 60, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 60, opacity: 0 }} onClick={(e) => e.stopPropagation()} className="w-full max-w-2xl max-h-[88vh] overflow-y-auto rounded-t-[26px] sm:rounded-[26px] bg-[#faf7f1] border border-[#c9a227]/40">
              <div className="sticky top-0 bg-[#faf7f1]/95 backdrop-blur border-b border-[#0f2340]/10 px-5 py-4 flex items-center justify-between">
                <div className="font-display text-lg flex items-center gap-2 text-[#0f2340]">
                  {modal === "privacy" ? <><ShieldCheck className="w-5 h-5 text-[#a97e3f]" /> سياسة الخصوصية — دره سبا</> : <><Users className="w-5 h-5 text-[#a97e3f]" /> من نحن — دره سبا المنزلي</>}
                </div>
                <button onClick={() => setModal(null)} className="w-9 h-9 rounded-full bg-[#0f2340]/5 border border-[#0f2340]/10 flex items-center justify-center hover:bg-[#0f2340]/10"><X className="w-4 h-4" /></button>
              </div>
              <div className="p-5 sm:p-7 text-[13.5px] leading-8 text-[#2c3d57]">
                {modal === "privacy" ? (
                  <>
                    <h3 className="font-display text-[17px] sm:text-[19px] text-[#0f2340] leading-9">سياسة الخصوصية لمركز دره سبا (Dora SPA) لخدمات السبا المنزلية</h3>
                    <p className="mt-2">نرحّب بك في موقع وتطبيق "دره سبا". نحن نقدر ثقتك بنا، ونلتزم التزاماً كاملاً بحماية بياناتك الشخصية واحترام خصوصيتك وفقاً للأنظمة والقوانين المعمول بها في المملكة العربية السعودية. توضح هذه السياسة كيفية جمعنا للمعلومات واستخدامها وحمايتها.</p>
                    <div className="mt-4 space-y-3.5">
                      <div className="rounded-2xl bg-white border border-[#0f2340]/10 p-4">
                        <div className="font-display text-[14.5px] text-[#0f2340]">1. المعلومات التي نقوم بجمعها</div>
                        <p className="mt-1">لتقديم خدماتنا الفندقية والمنزلية بكفاءة، قد نطلب منك بعض المعلومات الأساسية، وتشمل:</p>
                        <ul className="mt-2 space-y-1.5">
                          <li className="flex gap-2"><Check className="w-4 h-4 mt-1.5 shrink-0 text-emerald-600" strokeWidth={3} /> الاسم ورقم الهاتف للتواصل وتأكيد الحجوزات.</li>
                          <li className="flex gap-2"><Check className="w-4 h-4 mt-1.5 shrink-0 text-emerald-600" strokeWidth={3} /> العنوان والموقع الجغرافي (لتقديم خدمات السبا المنزلي بدقة).</li>
                          <li className="flex gap-2"><Check className="w-4 h-4 mt-1.5 shrink-0 text-emerald-600" strokeWidth={3} /> بيانات الدفع (تتم معالجتها عبر بوابات دفع إلكترونية آمنة ومعتمدة مثل تابي وتمارا، ولا نقوم بتخزينها على خوادمنا).</li>
                        </ul>
                      </div>
                      <div className="rounded-2xl bg-white border border-[#0f2340]/10 p-4">
                        <div className="font-display text-[14.5px] text-[#0f2340]">2. كيف نستخدم معلوماتك؟</div>
                        <p className="mt-1">يقتصر استخدام بياناتك على الأغراض المهنية التالية:</p>
                        <ul className="mt-2 space-y-1.5">
                          <li className="flex gap-2"><Check className="w-4 h-4 mt-1.5 shrink-0 text-emerald-600" strokeWidth={3} /> إتمام حجوزاتك وإرسال الأخصائيين إلى موقعك في الوقت المحدد.</li>
                          <li className="flex gap-2"><Check className="w-4 h-4 mt-1.5 shrink-0 text-emerald-600" strokeWidth={3} /> تحسين جودة خدماتنا وتخصيص العروض التي تناسب احتياجاتك للاسترخاء والعناية.</li>
                          <li className="flex gap-2"><Check className="w-4 h-4 mt-1.5 shrink-0 text-emerald-600" strokeWidth={3} /> التواصل معك لتقديم دعم العملاء، أو إرسال فواتير الشراء، أو إشعارات بالباقات الجديدة.</li>
                        </ul>
                      </div>
                      <div className="rounded-2xl bg-[#0f2340] text-white p-4 border border-[#c9a227]/40">
                        <div className="font-display text-[14.5px] text-[#f3e6c3]">3. التزامنا بالمهنية والخصوصية</div>
                        <p className="mt-1 text-white/80">يؤكد مركز "دره سبا" (المرخص رسمياً) أن جميع بيانات العملاء تُستخدم حصرياً لتقديم خدمات الاسترخاء والعناية الشخصية المعتمدة. نحن نضمن سرية تامة لعملائنا، وتُقدم جميع جلساتنا في بيئة احترافية وآمنة تماماً.</p>
                      </div>
                      <div className="rounded-2xl bg-white border border-[#0f2340]/10 p-4">
                        <div className="font-display text-[14.5px] text-[#0f2340]">4. حماية البيانات ومشاركتها</div>
                        <ul className="mt-2 space-y-1.5">
                          <li className="flex gap-2"><Lock className="w-4 h-4 mt-1.5 shrink-0 text-[#a97e3f]" /> نتخذ كافة الإجراءات التقنية والأمنية الصارمة لحماية بياناتك من الوصول غير المصرح به أو الفقدان.</li>
                          <li className="flex gap-2"><ShieldCheck className="w-4 h-4 mt-1.5 shrink-0 text-[#a97e3f]" /> لا نقوم ببيع، أو تأجير، أو مشاركة بياناتك الشخصية مع أي أطراف خارجية لأغراض تسويقية دون موافقتك الصريحة، باستثناء مزودي الخدمات المعتمدين الذين يعاونوننا في تشغيل الموقع (مثل شركات الشحن السريع أو بوابات الدفع)، والذين يلتزمون بدورهم بسياسات سرية صارمة.</li>
                        </ul>
                      </div>
                      <div className="rounded-2xl bg-white border border-[#0f2340]/10 p-4">
                        <div className="font-display text-[14.5px] text-[#0f2340]">5. التعديلات على سياسة الخصوصية</div>
                        <p className="mt-1">نحتفظ بالحق في تحديث سياسة الخصوصية هذه من وقت لآخر بما يتوافق مع التطورات التقنية أو التغييرات القانونية. سيتم نشر أي تعديلات على هذه الصفحة.</p>
                      </div>
                      <div className="rounded-2xl bg-[#f6f1e5] border border-[#c9a227]/30 p-4">
                        <div className="font-display text-[14.5px] text-[#0f2340]">6. تواصل معنا</div>
                        <p className="mt-1">إذا كان لديك أي أسئلة أو استفسارات حول سياسة الخصوصية، يسعدنا تواصلك معنا عبر قنواتنا الرسمية المتاحة على الموقع، أو بزيارة فرعنا في (حي اليرموك، الرياض) — هاتف: <span className="font-extrabold" dir="ltr">{PHONE_DISPLAY}</span>.</p>
                        <p className="mt-2 font-extrabold text-[#0f2340]">باستخدامك لموقعنا وخدماتنا، فإنك توافق على الشروط والأحكام الواردة في سياسة الخصوصية هذه.</p>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="flex justify-center mb-4 bg-[#0f2340] rounded-2xl py-5 islamic-pattern"><DorhLogo /></div>
                    <h3 className="font-display text-[17px] sm:text-[19px] text-center text-[#0f2340] leading-9">مرحباً بك في دره سبا (Dora SPA)<br />بوابتك للاسترخاء وتجديد النشاط</h3>
                    <div className="mt-4 space-y-3">
                      <p>نحن في "دره سبا" مركز استرخاء وعناية شخصية للرجال، مرخص ومعتمد رسمياً، نتخذ من حي اليرموك بمدينة الرياض مقراً لنا، لنقدم تجربة فندقية فاخرة تلبي احتياجات الرجل العصري للراحة والاستشفاء بعد ضغوط العمل والحياة اليومية.</p>
                      <div className="rounded-2xl bg-white border border-[#0f2340]/10 p-4">
                        <div className="font-display text-[14.5px] text-[#0f2340]">رؤيتنا ورسالتنا</div>
                        <p className="mt-1">نؤمن بأن العناية بالصحة البدنية والصفاء الذهني ليست رفاهية، بل ضرورة. لذا، نلتزم بتقديم خدمات استرخاء، وعناية بالبشرة، واستشفاء عضلي وفق أعلى المعايير الصحية العالمية، سواء داخل مركزنا باليرموك أو عبر خدماتنا المنزلية الفاخرة التي تأتيك أينما كنت — ونوصلك خلال 30-60 دقيقة.</p>
                      </div>
                      <div className="rounded-2xl bg-[#0f2340] text-white p-4 border border-[#c9a227]/40">
                        <div className="font-display text-[14.5px] text-[#f3e6c3]">لماذا تختار "دره سبا"؟</div>
                        <ul className="mt-2 space-y-2 text-white/85">
                          <li className="flex gap-2"><BadgeCheck className="w-5 h-5 shrink-0 text-[#d9b64a] mt-1" /> <span><b className="text-white">احترافية تامة وعمالة معتمدة:</b> جميع خدماتنا تُقدم حصرياً على يد طاقم من الأخصائيين الرجال المحترفين والمدربين على أعلى مستوى في مجالات العناية البدنية والاسترخاء.</span></li>
                          <li className="flex gap-2"><ShieldCheck className="w-5 h-5 shrink-0 text-[#d9b64a] mt-1" /> <span><b className="text-white">خدمات صحية وشرعية 100%:</b> نلتزم التزاماً تاماً بتقديم خدمات العناية الشخصية والاسترخاء العضلي ضمن إطار مهني، صحي، وأخلاقي صارم يتوافق مع قيم مجتمعنا وتراخيصنا الرسمية.</span></li>
                          <li className="flex gap-2"><Lock className="w-5 h-5 shrink-0 text-[#d9b64a] mt-1" /> <span><b className="text-white">خصوصية مطلقة:</b> نضمن لعملائنا بيئة آمنة وخصوصية تامة خلال جميع الجلسات، سواء في المركز أو في الزيارات المنزلية.</span></li>
                          <li className="flex gap-2"><Sparkles className="w-5 h-5 shrink-0 text-[#d9b64a] mt-1" /> <span><b className="text-white">جودة لا تُضاهى:</b> نستخدم أفضل المنتجات الطبيعية وأحدث الأدوات — ولكل عميل علبة خاصة استخدام مرة واحدة (شامبو + شاور جل + شوت + فوطة) — لضمان نتائج ملموسة تعيد لجسمك نشاطه وحيويته.</span></li>
                        </ul>
                      </div>
                      <p>في "دره سبا"، نحن لسنا مجرد مركز عناية، بل وجهتك الموثوقة لاستعادة توازنك الجسدي والنفسي بكل رقي واحترافية.</p>
                      <div className="grid grid-cols-3 gap-2 text-center">
                        {[["+5", "فروع"], ["+20K", "عميل"], ["4.9★", "تقييم جوجل"]].map(([n, l]) => (
                          <div key={l} className="rounded-xl bg-[#0f2340] text-white py-3"><div className="font-display text-xl" dir="ltr">{n}</div><div className="text-[11px] font-bold text-[#d9b64a]">{l}</div></div>
                        ))}
                      </div>
                      <div className="flex gap-2 pt-2">
                        <a href={waLink("اهلا فريق دره سبا اريد الحجز")} className="flex-1 text-center rounded-xl bg-[#22c15e] text-white font-extrabold py-3">احجز واتساب</a>
                        <a href={PHONE_LINK} className="flex-1 text-center rounded-xl bg-[#0f2340] text-white font-extrabold py-3">اتصل {PHONE_DISPLAY}</a>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
