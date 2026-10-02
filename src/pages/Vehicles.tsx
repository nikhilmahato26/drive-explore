import React, { useState, useMemo, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { VehicleCard } from "../components/VehicleCard";
import { VehicleFilters } from "../components/VehicleFilters";
import { vehicles } from "../data/vehicles";
import { CTASection } from "../components/CTASection";

export const VehiclesPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get("category");

  const [selectedCategory, setSelectedCategory] = useState<string>("ALL");
  const [searchQuery, setSearchQuery] = useState<string>("");

  useEffect(() => {
    if (categoryParam) {
      setSelectedCategory(categoryParam);
    } else {
      setSelectedCategory("ALL");
    }
  }, [categoryParam]);

  const handleCategoryChange = (cat: string) => {
    setSelectedCategory(cat);
    if (cat === "ALL") {
      searchParams.delete("category");
      setSearchParams(searchParams);
    } else {
      setSearchParams({ category: cat });
    }
  };

  const filteredVehicles = useMemo(() => {
    return vehicles.filter((v) => {
      const matchesCategory =
        selectedCategory === "ALL" || v.category === selectedCategory;

      const matchesSearch =
        !searchQuery.trim() ||
        v.name.toLowerCase().includes(searchQuery.toLowerCase().trim()) ||
        v.category.toLowerCase().includes(searchQuery.toLowerCase().trim());

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <>
      <Helmet>
        <title>Vehicle Fleet | Drive Explore Northeast &amp; Tours</title>
        <meta
          name="description"
          content="Explore our complete fleet of cars, SUVs, bikes and scooty available for rent in Hojai, Assam. 24×7 service."
        />
      </Helmet>

      {/* Header Banner */}
      <section className="bg-forest-900 text-warm-50 py-16 sm:py-20 border-b-4 border-gold-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <span className="text-xs font-bold text-gold-400 uppercase tracking-widest block">
            Fleet Discovery
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-display text-white tracking-tight">
            OUR VEHICLE FLEET
          </h1>
          <p className="text-sm sm:text-base text-warm-200 max-w-2xl mx-auto font-medium">
            From SUVs and family vehicles to motorcycles and scooters, choose the ride that matches your Northeast journey.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="py-12 sm:py-16 bg-warm-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <VehicleFilters
            selectedCategory={selectedCategory}
            onSelectCategory={handleCategoryChange}
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            resultCount={filteredVehicles.length}
          />

          {filteredVehicles.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {filteredVehicles.map((vehicle) => (
                <VehicleCard key={vehicle.id} vehicle={vehicle} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-white rounded-3xl border border-warm-200 p-8 max-w-md mx-auto space-y-4">
              <p className="text-base font-bold text-charcoal-800">
                No vehicles found matching your criteria.
              </p>
              <button
                type="button"
                onClick={() => handleCategoryChange("ALL")}
                className="px-5 py-2 rounded-xl bg-forest-900 text-white text-xs font-bold"
              >
                Show All Vehicles
              </button>
            </div>
          )}
        </div>
      </div>

      <CTASection />
    </>
  );
};
