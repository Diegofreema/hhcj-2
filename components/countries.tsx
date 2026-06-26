'use client';

import React from 'react';
import LogoLoop, { type LogoItem } from './loop-logo';

interface Country {
  name: string;
  code: string;
  flag: string;
}

const countries: Country[] = [
  { name: 'Nigeria', code: 'NG', flag: '🇳🇬' },
  { name: 'Ghana', code: 'GH', flag: '🇬🇭' },
  { name: 'Togo', code: 'TG', flag: '🇹🇬' },
  { name: 'Sierra Leone', code: 'SL', flag: '🇸🇱' },
  { name: 'Cameroon', code: 'CM', flag: '🇨🇲' },
  { name: 'Kenya', code: 'KE', flag: '🇰🇪' },
  { name: 'USA', code: 'US', flag: '🇺🇸' },
  { name: 'UK', code: 'GB', flag: '🇬🇧' },
  { name: 'Canada', code: 'CA', flag: '🇨🇦' },
  { name: 'Germany', code: 'DE', flag: '🇩🇪' },
  { name: 'Italy', code: 'IT', flag: '🇮🇹' },
  { name: 'Grenada', code: 'GD', flag: '🇬🇩' },
  { name: 'Tanzania', code: 'TZ', flag: '🇹🇿' },
];

// Convert countries to LogoItems with node rendering
const countryLogos: LogoItem[] = countries.map((country) => ({
  node: (
    <div className="flex flex-col items-center gap-2">
      <img
        src={`https://flagcdn.com/${country.code.toLowerCase()}.svg`}
        alt={`${country.name} flag`}
        className="h-16 w-auto object-contain"
      />
      <span className="text-sm font-medium text-center whitespace-nowrap">
        {country.name}
      </span>
    </div>
  ),
  ariaLabel: country.name,
}));

export const Countries = () => {
  return (
    <div className="w-full space-y-6 mt-10">
      <h3 className="text-center text-2xl font-bold">Countries we work in</h3>
      <LogoLoop
        logos={countryLogos}
        speed={100}
        direction="left"
        logoHeight={80}
        gap={60}
        hoverSpeed={0}
        scaleOnHover
        fadeOut
        fadeOutColor="#ffffff"
        ariaLabel="Countries we work in"
      />
    </div>
  );
};

export default Countries;
