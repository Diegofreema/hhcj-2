'use client';

import { useState } from 'react';

interface CalendarProps {
  selectedDate: Date | null;
  onDateChange: (date: Date) => void;
}

export default function CalendarDatePicker({
  selectedDate,
  onDateChange,
}: CalendarProps) {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [showYearPicker, setShowYearPicker] = useState(false);
  const [showMonthPicker, setShowMonthPicker] = useState(false);

  const currentYear = currentMonth.getFullYear();

  // Generate years: 20 years back, current, 10 years forward
  const years = Array.from({ length: 31 }, (_, i) => currentYear - 50 + i);

  const getDaysInMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };

  const handlePrevMonth = () => {
    setCurrentMonth(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1)
    );
  };

  const handleNextMonth = () => {
    setCurrentMonth(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1)
    );
  };

  const handleYearSelect = (year: number) => {
    setCurrentMonth(new Date(year, currentMonth.getMonth()));
    setShowYearPicker(false);
  };
  const handleMonthSelect = (monthIndex: number) => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), monthIndex));

    setShowMonthPicker(false);
  };

  const days = [];
  const firstDay = getFirstDayOfMonth(currentMonth);
  const daysInMonth = getDaysInMonth(currentMonth);

  for (let i = 0; i < firstDay; i++) {
    days.push(null);
  }

  for (let i = 1; i <= daysInMonth; i++) {
    days.push(new Date(currentMonth.getFullYear(), currentMonth.getMonth(), i));
  }

  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const handleShowYear = () => {
    setShowYearPicker(true);
    setShowMonthPicker(false);
  };
  const handleShowMonth = () => {
    setShowMonthPicker(true);
    setShowYearPicker(false);
  };
  return (
    <div className="relative bg-muted/50 border border-primary/20 rounded-lg p-4 w-full  mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <button
          onClick={handlePrevMonth}
          className="px-3 py-1 text-sm font-medium bg-primary/10 hover:bg-primary/20 text-primary rounded transition-smooth"
        >
          ←
        </button>

        <div className="space-x-4">
          <button
            onClick={handleShowMonth}
            className="text-sm font-semibold text-foreground hover:text-primary transition-colors cursor-pointer"
          >
            {monthNames[currentMonth.getMonth()]}
          </button>
          <button
            onClick={handleShowYear}
            className="text-sm font-semibold text-foreground hover:text-primary transition-colors cursor-pointer"
          >
            {currentMonth.getFullYear()}
          </button>
        </div>

        <button
          onClick={handleNextMonth}
          className="px-3 py-1 text-sm font-medium bg-primary/10 hover:bg-primary/20 text-primary rounded transition-smooth"
        >
          →
        </button>
      </div>

      {/* Year Picker Dropdown */}
      {showYearPicker && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-background border border-primary/20 rounded-lg shadow-lg z-50 p-3 max-h-60 overflow-y-auto">
          <div className="grid grid-cols-3 gap-2">
            {years.map((year) => (
              <button
                key={year}
                onClick={() => handleYearSelect(year)}
                className={`p-2 text-xs font-medium rounded transition-smooth ${
                  year === currentYear
                    ? 'bg-primary text-white'
                    : 'bg-muted hover:bg-primary/10 text-foreground'
                }`}
              >
                {year}
              </button>
            ))}
          </div>
        </div>
      )}
      {showMonthPicker && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-background border border-primary/20 rounded-lg shadow-lg z-50 p-3 max-h-60 overflow-y-auto">
          <div className="grid grid-cols-3 gap-2">
            {monthNames.map((month, i) => (
              <button
                key={month}
                onClick={() => handleMonthSelect(i)}
                className={`p-2 text-xs font-medium rounded transition-smooth ${
                  i === currentMonth.getMonth()
                    ? 'bg-primary text-white'
                    : 'bg-muted hover:bg-primary/10 text-foreground'
                }`}
              >
                {month}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Day Headers */}
      <div className="grid grid-cols-7 gap-1 mb-2">
        {dayNames.map((day) => (
          <div
            key={day}
            className="text-center text-xs font-semibold text-muted-foreground py-1"
          >
            {day}
          </div>
        ))}
      </div>

      {/* Days Grid */}
      <div className="grid grid-cols-7 gap-1">
        {days.map((day, index) => {
          const isSelected =
            day &&
            selectedDate &&
            day.toDateString() === selectedDate.toDateString();
          const isToday =
            day && day.toDateString() === new Date().toDateString();

          return (
            <button
              key={index}
              onClick={() => day && onDateChange(day)}
              disabled={!day}
              className={`p-2 text-xs font-medium rounded transition-smooth disabled:cursor-default ${
                !day
                  ? 'text-transparent'
                  : isSelected
                  ? 'bg-primary text-white'
                  : isToday
                  ? 'bg-primary/20 text-primary border border-primary'
                  : 'bg-muted hover:bg-primary/10 text-foreground'
              }`}
            >
              {day?.getDate()}
            </button>
          );
        })}
      </div>

      {/* Close dropdown when clicking outside */}
      {showYearPicker && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setShowYearPicker(false)}
        />
      )}
    </div>
  );
}
