"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#fdf4f9] text-[#2d1b4e] py-10 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
        <div>
          <h3 className="text-xl font-bold mb-2">Cohort Coaching</h3>
          <p className="text-[#4b3c5a]">
            Empowering students through expert guidance and real-world clarity.
          </p>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-2">Quick Links</h4>
          <ul className="space-y-1">
            <li>
              <Link href="/" className="hover:text-[#6b3fa0] transition-colors duration-200">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-[#6b3fa0] transition-colors duration-200">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-[#6b3fa0] transition-colors duration-200">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-2">Connect with Us</h4>
          <div className="flex justify-center md:justify-start space-x-4">
            <Link href="https://instagram.com" target="_blank">
              <svg
                className="w-6 h-6 hover:text-[#6b3fa0] transition-colors duration-200"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 2 .3 2.4.5.5.2.9.5 1.3.9.4.4.7.8.9 1.3.2.4.4 1.2.5 2.4.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.3 2-.5 2.4-.2.5-.5.9-.9 1.3-.4.4-.8.7-1.3.9-.4.2-1.2.4-2.4.5-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-2-.3-2.4-.5a3.8 3.8 0 0 1-1.3-.9c-.4-.4-.7-.8-.9-1.3-.2-.4-.4-1.2-.5-2.4C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.3-2 .5-2.4.2-.5.5-.9.9-1.3.4-.4.8-.7 1.3-.9.4-.2 1.2-.4 2.4-.5C8.4 2.2 8.8 2.2 12 2.2m0-2.2C8.7 0 8.3 0 7 .1 5.7.2 4.5.5 3.6.9c-.9.4-1.6 1-2.3 1.7a6.3 6.3 0 0 0-1.7 2.3c-.4.9-.7 2.1-.8 3.4C-.1 8.3 0 8.7 0 12c0 3.3-.1 3.7.1 5 .1 1.3.4 2.5.8 3.4.4.9 1 1.6 1.7 2.3a6.3 6.3 0 0 0 2.3 1.7c.9.4 2.1.7 3.4.8 1.3.1 1.7.1 5 .1s3.7 0 5-.1c1.3-.1 2.5-.4 3.4-.8.9-.4 1.6-1 2.3-1.7a6.3 6.3 0 0 0 1.7-2.3c.4-.9.7-2.1.8-3.4.1-1.3.1-1.7.1-5s0-3.7-.1-5c-.1-1.3-.4-2.5-.8-3.4a6.3 6.3 0 0 0-1.7-2.3c-.7-.7-1.4-1.3-2.3-1.7-.9-.4-2.1-.7-3.4-.8C15.7-.1 15.3 0 12 0zM12 5.8a6.2 6.2 0 1 0 0 12.4 6.2 6.2 0 0 0 0-12.4zm0 10.2a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.4-10.6a1.4 1.4 0 1 1-2.8 0 1.4 1.4 0 0 1 2.8 0z" />
              </svg>
            </Link>

            <Link href="https://wa.me/yourwhatsapp" target="_blank">
              <svg
                className="w-6 h-6 hover:text-[#6b3fa0] transition-colors duration-200"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M.057 24l1.687-6.163a11.867 11.867 0 0 1-1.587-5.945C.16 5.281 5.497 0 12.072 0c3.22 0 6.218 1.253 8.476 3.525a11.78 11.78 0 0 1 3.497 8.443c-.003 6.574-5.339 11.908-11.92 11.908a11.9 11.9 0 0 1-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.416 1.593 5.448 0 9.884-4.43 9.887-9.877.002-5.462-4.419-9.89-9.885-9.892-5.452 0-9.881 4.43-9.884 9.887a9.841 9.841 0 0 0 1.532 5.26l-.999 3.648 3.933-.619zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.03-.967-.272-.099-.47-.149-.669.15-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.207-.242-.579-.487-.501-.669-.51-.173-.007-.372-.009-.571-.009-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.29.173-1.414z" />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      <div className="text-center mt-8 text-sm text-[#4b3c5a]">
        &copy; {new Date().getFullYear()} Cohort Coaching. All rights reserved.
      </div>
    </footer>
  );
}

