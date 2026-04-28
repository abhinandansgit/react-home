import React, { useState } from 'react';

export function ExpandableText({ text, limit = 60, className = "" }) {
  const [isExpanded, setIsExpanded] = useState(false);
  
  if (text.length <= limit) {
    return <p className={className}>{text}</p>;
  }

  return (
    <div className={className}>
      <p className="inline">
        {isExpanded ? text : `${text.substring(0, limit)}...`}
      </p>
      <button 
        onClick={() => setIsExpanded(!isExpanded)}
        className="ml-1 text-indigo-400 font-bold hover:text-indigo-300 transition-colors text-[10px] uppercase tracking-wider"
      >
        {isExpanded ? 'Read Less' : 'Read More'}
      </button>
    </div>
  );
}
