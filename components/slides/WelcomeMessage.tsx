"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

type TabKey = "welcome" | "mission" | "vision";

export default function WelcomeMessage({ isActive }: { isActive: boolean }) {
  const [loaded, setLoaded] = useState(false);
  const [tab, setTab] = useState<TabKey>("welcome");

  useEffect(() => {
    if (isActive) {
      const t = setTimeout(() => setLoaded(true), 100);
      return () => clearTimeout(t);
    }
    setLoaded(false);
  }, [isActive]);

  const tabs: { key: TabKey; label: string }[] = [
    { key: "welcome", label: "Welcome Message" },
    { key: "mission", label: "Our Mission" },
    { key: "vision", label: "Our Vision" },
  ];

  const content: Record<
    TabKey,
    {
      headline: string;
      image: string;
      paragraphs: string[];
      href: string;
      cta: string;
    }
  > = {
    welcome: {
      headline: "Message From President",
      image: "images/headmaster.png",
      paragraphs: [
        "Welcome to the website of Fountainhead Christian School (FCS). As you read through the pages on this site, you will learn about our brilliant students, our School, and get a feel of the enthusiasm and strength of our wider FCS community.",
        'We aim to give every student the best possible education in order to prepare them for life beyond school. We are a "Learning Community" which encourages staff, students, past and present students and parents to involve themselves fully in all aspects of school life and to identify themselves with its corresponding values of Respect, Responsibility, Integrity, Cooperation and Achievement.',
        "Fountainhead Christian School (FCS) has a very strong and supportive School Council that ensures that the school continues to excel magnificently. We encourage our students to achieve their personal best and pursue their interests and strengths to the best of their ability.",
        "We are proud of our success in helping students achieve their dreams. Our vision extends far beyond the classroom — we encourage our students to involve themselves in co-curricular activities, to work hard and be sensitive to the rights and needs of others.",
        "I warmly welcome you to visit our School and discover firsthand what makes education at Fountainhead Christian School so special.",
      ],

        href: "/admission",
      cta: "Admission Overview",
    },
    mission: {
      headline: "Our Mission",
      image:
        "images/fcs_mission_img.jpg",
      paragraphs: [
        "We seek to exemplify the principles of the bible in an atmosphere of discipline.",
        "Our goal is to offer an outstanding academic curriculum as well as develop the child wholly: Spiritually, Mentally, Emotionally,",
        "Physically and Socially",
      ],
         href: "/admission-policy",
      cta: "Our Admission Policy",
    },
    vision: {
      headline: "Our Vision",
      image:
        "images/fcs_vision_img.jpg",
      paragraphs: [
        "Fountainhead Christian School is committed to raising a generation of pupils with Godly moral standards,",
        "coupled with academic excellence so they can grow",
        "up to be reliable, dependable and successful leaders",
        "who will transform their environment, nation and the",
        "world at large.",
      ],
  
            href: "/school-activities",
      cta: "Student Zone",
    },
  };

  const active = content[tab];

  return (
    <div className="slide bg-navy-dark overflow-hidden">
      {/* Full-bleed image with overlay */}
      <div className="absolute inset-0 z-0">
        <img
          key={tab}
          src={active.image}
          alt={tab}
          className="w-full h-full object-cover transition-opacity duration-700"
          style={{ opacity: 0.22 }}
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).src =
              "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=900&q=80";
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, rgba(10,14,92,0.97) 40%, rgba(10,14,92,0.75) 100%)",
          }}
        />
      </div>

      <div className="relative z-10 h-full flex flex-col justify-center px-10 md:px-20 lg:px-28 py-24">
        {/* Tab switcher — 3 tabs */}
        <div
          className={`flex gap-0 mb-10 w-fit border border-white/15 transition-all duration-700 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-6"
          }`}
        >
          {tabs.map((t) => (
            <button
              key={t.key}
              onClick={() => setTab(t.key)}
              className={`px-6 py-3 text-[10px] tracking-widest uppercase font-body transition-all duration-300 whitespace-nowrap ${
                tab === t.key
                  ? "bg-gold text-navy font-semibold"
                  : "text-white/50 hover:text-white border-l border-white/10 first:border-l-0"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: text content */}
          <div
            className={`transition-all duration-600 ${
              loaded ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <span className="gold-rule" />
            <h2
              className="font-display font-semibold text-white leading-tight mb-8"
              style={{ fontSize: "clamp(1.6rem, 3.5vw, 3.8rem)" }}
            >
              {active.headline}
            </h2>

            {/* Scrollable paragraphs */}
            <div
              className="space-y-4 mb-10 pr-2"
              style={{
                maxHeight: "38vh",
                overflowY: "auto",
                scrollbarWidth: "thin",
                scrollbarColor: "rgba(201,168,76,0.3) transparent",
              }}
            >
              {active.paragraphs.map((para, i) => (
                <p
                  key={i}
                  className={`text-white/65 font-body font-light text-sm leading-relaxed transition-all duration-500 ${
                    loaded
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 -translate-x-4"
                  }`}
                  style={{ transitionDelay: `${200 + i * 80}ms` }}
                >
                  {para}
                </p>
              ))}
            </div>

            <Link
              href={active.href}
              className="inline-flex items-center gap-3 px-8 py-4 bg-gold text-navy font-body font-semibold text-xs tracking-widest uppercase hover:bg-gold-light transition-colors"
            >
              {active.cta}
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          {/* Right: image card */}
          <div
            className={`transition-all duration-700 delay-200 ${
              loaded ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
          >
            <div
              className="relative overflow-hidden"
              style={{ aspectRatio: "4/3" }}
            >
              <img
                key={`card-${tab}`}
                src={active.image}
                alt={tab}
                className="w-full h-full object-cover transition-all duration-700"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src =
                    "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=900&q=80";
                }}
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to top, rgba(10,14,92,0.7) 0%, transparent 50%)",
                }}
              />
              {/* Corner accents */}
              <div className="absolute top-4 right-4 w-12 h-12 border border-gold/40" />
              <div className="absolute bottom-4 left-4 w-12 h-12 border border-gold/40" />

              {/* Tab label badge */}
              <div
                className="absolute bottom-6 right-6 px-3 py-1.5 text-[9px] tracking-[0.3em] uppercase font-body"
                style={{
                  background: "rgba(201,168,76,0.15)",
                  border: "1px solid rgba(201,168,76,0.35)",
                  color: "#c9a84c",
                }}
              >
                {tabs.find((t) => t.key === tab)?.label}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
