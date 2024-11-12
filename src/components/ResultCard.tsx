import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ResultCardProps {
  text: string;
  delay: string;
}

export function ResultCard({ text, delay }: ResultCardProps) {
  return (
    <li 
      className={`flex items-center gap-3 text-emerald-700 bg-white p-6 rounded-lg shadow-sm 
        hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 animate-slideRight`}
      style={{ animationDelay: delay }}
    >
      <ArrowRight className="w-6 h-6 text-emerald-500 flex-shrink-0" />
      <span className="font-medium">{text}</span>
    </li>
  );
}