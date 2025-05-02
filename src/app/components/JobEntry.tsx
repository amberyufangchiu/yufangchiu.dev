import Image from "next/image";
import { useState } from "react";

interface JobEntryProps {
  company: string;
  tagline: string;
  role: string;
  date: string;
  details: string[];
  imageUrl: string;
}

const skillKeywords = [
  "React",
  "TypeScript",
  "Redux",
  "Next.js",
  "Recharts",
  "Cypress",
  "Webpack",
  "RESTful API",
  "Nginx",
  "SaaS",
  "react-i18next",
];

function highlightSkills(text: string) {
  const parts = text.split(new RegExp(`(${skillKeywords.join("|")})`, "gi"));
  return parts.map((part, idx) =>
    skillKeywords.includes(part) ? (
      <strong
        key={idx}
        className="text-gray-800 font-medium dark:text-gray-100"
      >
        {part}
      </strong>
    ) : (
      <span key={idx}>{part}</span>
    )
  );
}

function JobEntry({
  company,
  tagline,
  role,
  date,
  details,
  imageUrl,
}: JobEntryProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      role="button"
      aria-expanded={isOpen}
      onClick={() => setIsOpen(!isOpen)}
      className="flex flex-col md:flex-row p-4 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300 cursor-pointer mb-4"
    >
      {/* Image */}
      <Image
        width={48}
        height={48}
        src={imageUrl}
        alt={`${company} logo`}
        className="w-12 h-12 rounded-full object-cover mr-4 mb-2 md:mb-0"
      />

      {/* Content */}
      <div className="flex-1">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
          <div>
            <h3 className="text-sm sm:text-base font-semibold flex flex-wrap items-center gap-2">
              {company}
              <span className="text-xs px-2 py-0.5 bg-gray-100 rounded-md border border-transparent text-gray-600">
                {tagline}
              </span>
            </h3>
            <p className="text-sm text-gray-700 mt-1 dark:text-gray-100">
              {role}
            </p>
          </div>
          <div className="text-sm text-gray-500 mt-2 sm:mt-0 dark:text-gray-100">
            {date}
          </div>
        </div>

        {/* Collapsible */}
        <div
          className={`transition-all duration-500 ease-in-out overflow-hidden ${
            isOpen ? "max-h-96 mt-4 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <ul className="text-sm text-gray-600 pl-5 list-disc dark:text-gray-100">
            {details.map((item, idx) => (
              <li key={idx} className="pb-3">
                {highlightSkills(item)}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default JobEntry;
