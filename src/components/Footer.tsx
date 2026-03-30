import Link from "next/link";
import { Instagram, Twitter, Facebook, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer>
      {/* Social Media Bar */}
      <div className="bg-white border-t border-[var(--orange)] py-6">
        <div className="max-w-7xl mx-auto px-6 flex justify-center items-center gap-4">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full border border-[var(--orange)] flex items-center justify-center text-[var(--orange)] hover:bg-[var(--orange)] hover:text-white transition-colors"
          >
            <Instagram size={18} />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full border border-[var(--orange)] flex items-center justify-center text-[var(--orange)] hover:bg-[var(--orange)] hover:text-white transition-colors"
          >
            <Twitter size={18} />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full border border-[var(--orange)] flex items-center justify-center text-[var(--orange)] hover:bg-[var(--orange)] hover:text-white transition-colors"
          >
            <Facebook size={18} />
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full border border-[var(--orange)] flex items-center justify-center text-[var(--orange)] hover:bg-[var(--orange)] hover:text-white transition-colors"
          >
            <Youtube size={18} />
          </a>
        </div>
      </div>

      {/* Main Footer */}
      <div className="bg-[var(--maroon)] relative overflow-hidden">
        {/* Large W Watermark */}
        <div className="absolute inset-0 flex items-center justify-center opacity-20 pointer-events-none">
        
      <svg
  width="500"
  height="400"
  viewBox="0 0 500 400"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  
  <path
    d="M50 50L50 350H110V230H170V180H110V100H180V50H50Z"
    fill="#6a1e2a"
    stroke="#9a3040"
    strokeWidth="2"
  />
  
 
  <path
    d="M230 50C220 50 210 55 202 63C194 71 190 83 190 95V305C190 317 194 329 202 337C210 345 220 350 230 350H310C320 350 330 345 338 337C346 329 350 317 350 305V280H290V300H230V100H290V120H350V95C350 83 346 71 338 63C330 55 320 50 310 50H230Z"
    fill="#6a1e2a"
    stroke="#9a3040"
    strokeWidth="2"
  />
  
 
 <path
    d="M380 50H480V100H420L480 170V350H380V300H440L380 230V50Z"
    fill="#6a1e2a"
    stroke="#9a3040"
    strokeWidth="2"
  />
</svg>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 py-16 text-center">
          {/* Small W Logo */}
          <div className="flex justify-center mb-6">
            <img src="images/toplogo.png" width="50" height="50" />
          </div>

          {/* Divider Line */}
          <div className="w-16 h-0.5 bg-[var(--orange)] mx-auto mb-8" />

          {/* Contact Info */}
          <div className="text-white/90 font-serif italic space-y-1">
            <p className="text-xl">Fountainhead Christian School</p>
            <p>By Jubail Hospital Sarkumono Estates</p>

            <p className="mt-2">
              <a
                href="tel:508-754-5302"
                className="hover:text-[var(--orange)] transition-colors"
              >
                508-754-5302
              </a>
            </p>
          </div>

          {/* Copyright */}
          <div className="mt-10 text-white/70 text-sm flex flex-wrap justify-center gap-4">
            <span>&copy; Copyright Fountainhead Christian School 2026</span>
            {/* <Link href="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link> */}
          </div>

          {/* Inclusivity Statement */}
        </div>
      </div>
    </footer>
  );
}
