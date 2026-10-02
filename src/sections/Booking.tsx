import React from "react";
import { BookingForm } from "../components/BookingForm";

export const BookingSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-warm-100/50 border-t border-warm-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <BookingForm />
      </div>
    </section>
  );
};
