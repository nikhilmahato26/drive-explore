import React, { useState, useMemo } from "react";
import { VehicleCard } from "../components/VehicleCard";
import { VehicleFilters } from "../components/VehicleFilters";
import { vehicles } from "../data/vehicles";

export const VehicleFleet: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("ALL");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredVehicles = useMemo(() => {
    return vehicles.filter((v) => {
      // Category filter
      const matchesCategory =
        selectedCategory === "ALL" || v.category === selectedCategory;

      // Name search filter
      const matchesSearch =
        !searchQuery.trim() ||
        v.name.toLowerCase().includes(searchQuery.toLowerCase().trim()) ||
        v.category.toLowerCase().includes(searchQuery.toLowerCase().trim());

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section id="vehicles" className="py-16 sm:py-24 bg-warm-50 scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <span className="inline-block px-3 py-1 rounded-full bg-forest-100 text-forest-800 text-xs font-bold uppercase tracking-widest">
            Complete Fleet
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display text-charcoal-950 tracking-tight">
            CHOOSE YOUR RIDE
          </h2>
          <p className="text-base sm:text-lg text-charcoal-700 leading-relaxed font-medium">
            From SUVs and family vehicles to motorcycles and scooters, choose the ride that matches your journey.
          </p>
        </div>

        {/* Filters and Search Bar */}
        <VehicleFilters
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          resultCount={filteredVehicles.length}
        />

        {/* Vehicle Cards Grid */}
        {filteredVehicles.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 sm:gap-8">
            {filteredVehicles.map((vehicle) => (
              <VehicleCard key={vehicle.id} vehicle={vehicle} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-3xl border border-warm-200 p-8 max-w-md mx-auto space-y-4">
            <p className="text-base font-bold text-charcoal-800">
              No vehicle found matching your search.
            </p>
            <p className="text-xs text-charcoal-600">
              Try searching for Scorpio, Thar, Bolero, Ertiga, Scram, NS, or Scooty.
            </p>
            <button
              type="button"
              onClick={() => {
                setSelectedCategory("ALL");
                setSearchQuery("");
              }}
              className="px-5 py-2 rounded-xl bg-forest-900 text-white text-xs font-bold"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
