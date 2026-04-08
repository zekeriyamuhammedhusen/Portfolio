import React from 'react';
import { socialLinks } from '../data/portfolioData';

const iconProps = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: '1.8',
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': 'true',
};

const renderIcon = (name) => {
  switch (name) {
    case 'GitHub':
      return (
        <svg {...iconProps}>
          <path d="M9 19c-4.5 1.5-4.5-2.1-6-2.4" />
          <path d="M15 22v-3.2c0-.9.3-1.5.9-2-3.1-.4-6.4-1.5-6.4-7.1 0-1.6.6-2.9 1.6-4-.2-.5-.7-2.2.2-4 0 0 1.3-.4 4.2 1.6 1.2-.3 2.5-.4 3.7-.4s2.5.1 3.7.4c2.9-2 4.2-1.6 4.2-1.6.9 1.8.4 3.5.2 4 1 1.1 1.6 2.4 1.6 4 0 5.6-3.3 6.7-6.4 7.1.6.5 1 1.2 1 2.3V22" />
        </svg>
      );
    case 'LinkedIn':
      return (
        <svg {...iconProps}>
          <rect x="3.5" y="3.5" width="17" height="17" rx="3" />
          <path d="M8 10v6" />
          <path d="M8 8.2h.01" />
          <path d="M12 16v-3.6c0-1.2.8-2.1 2-2.1s2 .9 2 2.1V16" />
          <path d="M12 12.5V16" />
        </svg>
      );
    case 'Facebook':
      return (
        <svg {...iconProps}>
          <path d="M14 4h2.5c.6 0 1 .4 1 1V8H14v3h3.5l-.5 3H14v7h-3v-7H9V11h2V8.7C11 6.1 12.5 4 14 4Z" />
        </svg>
      );
    case 'Instagram':
      return (
        <svg {...iconProps}>
          <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17" cy="7" r="1" fill="currentColor" stroke="none" />
        </svg>
      );
    default:
      return null;
  }
};

const SocialLinks = ({ compact = false, className = '' }) => {
  return (
    <div className={`social-links ${compact ? 'is-compact' : ''} ${className}`.trim()}>
      {socialLinks.map((item) => {
        const sharedProps = {
          className: `social-link ${item.href ? '' : 'is-disabled'}`.trim(),
          title: item.href ? item.name : `${item.name} link not provided`,
          'aria-label': item.name,
        };

        const content = (
          <>
            {renderIcon(item.name)}
            <span className="sr-only">{item.name}</span>
          </>
        );

        return item.href ? (
          <a key={item.name} href={item.href} target="_blank" rel="noreferrer" {...sharedProps}>
            {content}
          </a>
        ) : (
          <span key={item.name} {...sharedProps}>
            {content}
          </span>
        );
      })}
    </div>
  );
};

export default SocialLinks;