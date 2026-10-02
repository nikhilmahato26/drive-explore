import React from "react";
import { Search, X } from "lucide-react";

interface VehicleFiltersProps {
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  resultCount?: number;
}

export const VehicleFilters: React.FC<VehicleFiltersProps> = ({
  selectedCategory,
  onSelectCategory,
  searchQuery,
  onSearchChange,
  resultCount,
}) => {
  const categories = [
    { key: "ALL", label: "ALL" },
    { key: "SUV", label: "SUV" },
    { key: "Car", label: "CARS" },
    { key: "Family / Utility", label: "FAMILY / UTILITY" },
    { key: "Bike", label: "BIKES" },
    { key: "Scooty", label: "SCOOTY" },
  ];

  return (
    <div className="space-y-4 mb-8">
      {/* Search Input Bar */}
      <div className="relative max-w-xl mx-auto">
        <div className="relative">
          <Search className="w-5 h-5 text-forest-700 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search vehicles... (e.g. Scorpio, Thar, Bolero, Ertiga, Scram, NS, Scooty)"
            className="w-full pl-12 pr-10 py-3 bg-white border-2 border-warm-200 focus:border-forest-800 rounded-2xl text-sm font-semibold text-charcoal-900 placeholder:text-charcoal-400 focus:outline-none shadow-sm transition"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => onSearchChange("")}
              className="absolute right-3.5 top-1/2 -translate-y-1/2 p-1 text-charcoal-400 hover:text-charcoal-700 transition"
              aria-label="Clear search"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      {/* Category Filter Pills */}
      <div className="flex items-center justify-center flex-wrap gap-2 pt-2">
        {categories.map((cat) => {
          const isActive = selectedCategory === cat.key;
          return (
            <button
              key={cat.key}
              type="button"
              onClick={() => onSelectCategory(cat.key)}
              className={`px-4 sm:px-5 py-2 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-200 ${
                isActive
                  ? "bg-forest-900 text-warm-50 shadow-md scale-105"
                  : "bg-white hover:bg-warm-100 text-charcoal-800 border border-warm-200 hover:border-warm-300"
              }`}
            >
              {cat.label}
            </button>
          );
        })}
      </div>

      {/* Filter status & counter */}
      {resultCount !== undefined && (
        <div className="text-center text-xs text-charcoal-600 font-medium">
          Showing {resultCount} vehicle{resultCount === 1 ? "" : "s"}
          {selectedCategory !== "ALL" && ` in ${selectedCategory}`}
          {searchQuery && ` matching "${searchQuery}"`}
        </div>
      )}
    </div>
  );
};
