import Image from 'next/image';
import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface JobEntryProps {
  company: string;
  tagline: string;
  role: string;
  date: string;
  details: string[];
  imageUrl: string;
}

const skillKeywords = [
  'React',
  'TypeScript',
  'Redux',
  'Next.js',
  'Recharts',
  'Cypress',
  'Webpack',
  'RESTful API',
  'Nginx',
  'SaaS',
  'react-i18next',
];

function highlightSkills(text: string) {
  const parts = text.split(new RegExp(`(${skillKeywords.join('|')})`, 'gi'));
  return parts.map((part, idx) =>
    skillKeywords.includes(part) ? (
      <strong key={idx} className="font-medium text-gray-800 dark:text-gray-100">
        {part}
      </strong>
    ) : (
      <span key={idx}>{part}</span>
    )
  );
}

function JobEntry({ company, tagline, role, date, details, imageUrl }: JobEntryProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      role="button"
      aria-expanded={isOpen}
      onClick={() => setIsOpen(!isOpen)}
      className="mb-4 flex cursor-pointer flex-col rounded-lg p-4 transition-colors duration-300 hover:bg-gray-200 md:flex-row dark:hover:bg-gray-700"
    >
      {/* Image */}
      <Image
        width={48}
        height={48}
        src={imageUrl}
        alt={`${company} logo`}
        className="mr-4 mb-2 h-12 w-12 rounded-full object-cover md:mb-0"
      />

      <div className="flex-1">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h3 className="flex flex-wrap items-center gap-2 text-sm font-semibold sm:text-base">
              {company}
              <span className="rounded-md border border-transparent bg-gray-100 px-2 py-0.5 text-xs text-gray-600">
                {tagline}
              </span>
            </h3>
            <p className="mt-1 text-sm text-gray-700 dark:text-gray-100">{role}</p>
          </div>
          <div className="mt-2 text-sm text-gray-500 sm:mt-0 dark:text-gray-100">{date}</div>
        </div>

        {/* Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="mt-4 flex items-center gap-2 rounded-lg border border-neutral-300 px-3 py-1.5 text-sm text-black transition hover:bg-neutral-100 md:hidden dark:border-neutral-600 dark:text-white dark:hover:bg-neutral-800"
        >
          {isOpen ? 'Hide details' : 'Show details'}
          {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </button>
        {/* Collapsible Content */}
        <div
          className={`overflow-hidden transition-all duration-500 ease-in-out ${
            isOpen ? 'mt-4 max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <ul className="list-disc pl-5 text-sm text-gray-600 dark:text-gray-100">
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
