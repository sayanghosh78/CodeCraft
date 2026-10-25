import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

import { privacyPolicy } from "../data/privacyPolicy";
import { useState } from "react";

const PrivacyPolicy = () => {
  const [hoveredSection, setHoveredSection] = useState(null);

  return (
    <main className="min-h-screen bg-slate-50 text-slate-800">
      {/* Main Content */}
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1fr)_280px] px-5 py-10 sm:px-8 lg:px-12 lg:py-14">
        <article className="min-w-0 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8 lg:p-10">
          <div className="mb-10 rounded-xl border border-cyan-100 bg-cyan-50/70 p-5">
            <h2 className="font-semibold text-slate-900">
              Your privacy, explained simply
            </h2>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              This policy describes our intended data practices. The details
              must accurately reflect the features, tools, and services actually
              used by Coder's Stack.
            </p>
          </div>

          <div className="space-y-12">
            {privacyPolicy.map((privacy) => (
              <section key={privacy.id} id={privacy.id} className="scroll-mt-8">
                <h2 className="border-b border-slate-100 pb-8 text-xl font-bold tracking-tight text-slate-950 sm:text-2xl">
                  {privacy.title}
                </h2>

                <div className="mt-5 space-y-4 text-sm leading-7 text-slate-600 sm:text-base">
                  {privacy.paragraphs?.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}

                  {privacy.bullets && (
                    <ul className="space-y-3 pl-5">
                      {privacy.bullets.map((bullet, index) => (
                        <li
                          key={index}
                          className="list-disc pl-1 marker:text-cyan-500"
                        >
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  )}

                  {privacy.after && <p>{privacy.after}</p>}
                </div>
              </section>
            ))}
          </div>

          <div className="mt-12 border-t border-slate-200 p-6">
            <Link
              to={"/"}
              className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-600 transition hover:text-indigo-800"
            >
              <span aria-hidden="true">
                <ArrowLeft width={18} height={18} />
              </span>
              Back to Home
            </Link>
          </div>
        </article>

        {/* Table of Contents */}
        <aside className="hidden h-fit rounded-2xl border border-slate-200 bg-white p-5 shadow-sm lg:sticky lg:top-8 lg:block">
          <h2 className="text-base font-bold text-slate-950">On this page</h2>

          <nav
            aria-label="Privacy policy sections"
            className="mt-4"
            onMouseLeave={() => setHoveredSection(null)}
          >
            <ul className="space-y-1">
              {privacyPolicy.map((privacy) => (
                <li key={privacy.id}>
                  <motion.a
                    href={`#${privacy.id}`}
                    onMouseEnter={() => setHoveredSection(privacy.id)}
                    onFocus={() => setHoveredSection(privacy.id)}
                    className={`relative isolate block rounded-lg px-3 py-2.5
            text-sm transition-colors duration-200
            ${
              hoveredSection === privacy.id
                ? "text-indigo-700"
                : "text-slate-600"
            }`}
                  >
                    {hoveredSection === privacy.id && (
                      <motion.span
                        layoutId="sidebar-highlight"
                        className="absolute inset-0 z-0 rounded-lg bg-slate-100"
                        transition={{
                          type: "spring",
                          stiffness: 450,
                          damping: 40,
                        }}
                      />
                    )}

                    <span className="relative z-10">{privacy.title}</span>
                  </motion.a>
                </li>
              ))}
            </ul>
          </nav>
        </aside>
      </div>
    </main>
  );
};

export default PrivacyPolicy;
