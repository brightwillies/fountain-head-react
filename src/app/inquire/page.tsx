"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function InquirePage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    studentGrade: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    alert("Thank you for your inquiry! We will be in touch soon.");
  };

  return (
    <>
      <Header />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-24 bg-[var(--maroon)]">
          <div className="max-w-4xl mx-auto px-6 text-center text-white">
            <h1 className="text-4xl md:text-5xl font-serif mb-4">Inquire</h1>
            <p className="text-lg text-white/80">
              Take the first step toward becoming a Hilltopper
            </p>
          </div>
        </section>

        {/* Form Section */}
        <section className="py-16 md:py-24">
          <div className="max-w-2xl mx-auto px-6">
            <p className="text-[var(--gray-text)] text-center mb-12">
              Fill out the form below and a member of our Admission Team will
              be in touch to answer your questions and help you learn more about
              Worcester Academy.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium text-[var(--gray-text)] mb-2"
                  >
                    First Name *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    required
                    value={formData.firstName}
                    onChange={(e) =>
                      setFormData({ ...formData, firstName: e.target.value })
                    }
                    className="w-full px-4 py-3 border border-gray-300 focus:border-[var(--maroon)] focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-medium text-[var(--gray-text)] mb-2"
                  >
                    Last Name *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    required
                    value={formData.lastName}
                    onChange={(e) =>
                      setFormData({ ...formData, lastName: e.target.value })
                    }
                    className="w-full px-4 py-3 border border-gray-300 focus:border-[var(--maroon)] focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-[var(--gray-text)] mb-2"
                >
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-4 py-3 border border-gray-300 focus:border-[var(--maroon)] focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-[var(--gray-text)] mb-2"
                >
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className="w-full px-4 py-3 border border-gray-300 focus:border-[var(--maroon)] focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label
                  htmlFor="studentGrade"
                  className="block text-sm font-medium text-[var(--gray-text)] mb-2"
                >
                  Student's Current Grade
                </label>
                <select
                  id="studentGrade"
                  value={formData.studentGrade}
                  onChange={(e) =>
                    setFormData({ ...formData, studentGrade: e.target.value })
                  }
                  className="w-full px-4 py-3 border border-gray-300 focus:border-[var(--maroon)] focus:outline-none transition-colors bg-white"
                >
                  <option value="">Select a grade</option>
                  <option value="5">5th Grade</option>
                  <option value="6">6th Grade</option>
                  <option value="7">7th Grade</option>
                  <option value="8">8th Grade</option>
                  <option value="9">9th Grade</option>
                  <option value="10">10th Grade</option>
                  <option value="11">11th Grade</option>
                  <option value="12">12th Grade</option>
                  <option value="pg">Postgraduate</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-[var(--gray-text)] mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full px-4 py-3 border border-gray-300 focus:border-[var(--maroon)] focus:outline-none transition-colors resize-none"
                  placeholder="Tell us about your student and what interests you about Worcester Academy..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[var(--maroon)] text-white py-4 px-8 hover:bg-[var(--maroon-dark)] transition-colors font-medium"
              >
                Submit Inquiry
              </button>
            </form>

            {/* Contact Info */}
            <div className="mt-12 pt-12 border-t border-gray-200 text-center">
              <p className="text-[var(--gray-text)] mb-4">
                Or contact us directly:
              </p>
              <p className="text-[var(--maroon)]">
                <a href="tel:508-459-5841" className="hover:underline">
                  508-459-5841
                </a>
                {" | "}
                <a
                  href="mailto:admission@worcesteracademy.org"
                  className="hover:underline"
                >
                  admission@worcesteracademy.org
                </a>
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
