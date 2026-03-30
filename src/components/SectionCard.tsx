import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface SectionCardProps {
  title: string;
  subtitle: string;
  heading: string;
  description: string;
  image: string;
  href: string;
  linkText?: string;
  reverse?: boolean;
}

export default function SectionCard({
  title,
  subtitle,
  heading,
  description,
  image,
  href,
  linkText = "Learn More",
  reverse = false,
}: SectionCardProps) {
  return (
    <section className="py-16 md:py-24">
      <div className={`max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center ${reverse ? "md:flex-row-reverse" : ""}`}>
        {/* Image */}
        <div className={`relative aspect-[4/3] overflow-hidden ${reverse ? "md:order-2" : ""}`}>
          <img
            src={image}
            alt={heading}
            className="w-full h-full object-cover"
          />
          {/* Maroon overlay on hover */}
          <div className="absolute inset-0 bg-[var(--maroon)] opacity-0 hover:opacity-20 transition-opacity duration-300" />
        </div>

        {/* Content */}
        <div className={reverse ? "md:order-1" : ""}>
          <span className="text-sm font-medium text-[var(--gray-light)] uppercase tracking-wider">
            {title}
          </span>
          <p className="text-[var(--gray-text)] italic mt-1 mb-3 font-serif">{subtitle}</p>
          <h3 className="text-[var(--maroon)] text-2xl md:text-3xl font-serif mb-4">{heading}</h3>
          <p className="text-[var(--gray-text)] leading-relaxed mb-6">{description}</p>
          <Link
            href={href}
            className="inline-flex items-center gap-3 text-[var(--maroon)] hover:text-[var(--maroon-dark)] transition-colors"
          >
            <span className="font-medium">{linkText}</span>
            <span className="w-10 h-10 rounded-full border border-[var(--maroon)] flex items-center justify-center">
              <ArrowRight size={16} />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
