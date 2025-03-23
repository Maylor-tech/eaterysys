import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import PricingCard from "@/components/pricing-card";
import Footer from "@/components/footer";
import { createClient } from "../../supabase/server";
import {
  ArrowUpRight,
  CheckCircle2,
  Utensils,
  ClipboardList,
  Clock,
  ShieldCheck,
  Users,
  BarChart4,
  Smartphone,
} from "lucide-react";
import Image from "next/image";

export default async function Home() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { data: plans, error } = await supabase.functions.invoke(
    "supabase-functions-get-plans",
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Navbar />
      <Hero />

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              Comprehensive Restaurant Management
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              EaterySys centralizes all your restaurant operations in one
              powerful, AI-driven platform.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="flex flex-col space-y-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0 bg-blue-100 p-3 rounded-lg">
                  <Utensils className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Menu Management Hub
                  </h3>
                  <p className="text-gray-600">
                    Digital menu creation with AI optimization, ingredient
                    tracking, and version control to keep your offerings fresh
                    and profitable.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 bg-blue-100 p-3 rounded-lg">
                  <ClipboardList className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Real-time Inventory Tracking
                  </h3>
                  <p className="text-gray-600">
                    Automated stock levels with predictive ordering and waste
                    analytics to minimize costs and prevent shortages.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 bg-blue-100 p-3 rounded-lg">
                  <Clock className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Staff Scheduling Module
                  </h3>
                  <p className="text-gray-600">
                    Dynamic shift optimization with mobile confirmations and
                    AI-powered no-show prediction to keep your team running
                    smoothly.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col space-y-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0 bg-blue-100 p-3 rounded-lg">
                  <ShieldCheck className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Compliance Monitoring
                  </h3>
                  <p className="text-gray-600">
                    Automated health code tracking with real-time alerts and
                    audit reporting to ensure your restaurant stays compliant.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 bg-blue-100 p-3 rounded-lg">
                  <Users className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Role-based Access Control
                  </h3>
                  <p className="text-gray-600">
                    Secure, tiered permissions system from owner to staff levels
                    ensuring the right people have the right access.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 bg-blue-100 p-3 rounded-lg">
                  <BarChart4 className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Analytics Dashboard
                  </h3>
                  <p className="text-gray-600">
                    Comprehensive reporting on all aspects of your restaurant
                    with actionable insights to drive business growth.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dashboard Preview Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Powerful Dashboard</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Everything you need to manage your restaurant, all in one place.
            </p>
          </div>

          <div className="relative max-w-5xl mx-auto rounded-xl overflow-hidden shadow-2xl">
            <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-xl">
              <div className="w-full h-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white text-xl font-semibold">
                Restaurant Dashboard Preview
              </div>
            </div>
          </div>

          <div className="mt-12 grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
              <span className="text-gray-700">Real-time inventory updates</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
              <span className="text-gray-700">Staff management tools</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
              <span className="text-gray-700">Menu performance analytics</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
              <span className="text-gray-700">Compliance tracking</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
              <span className="text-gray-700">Supplier management</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
              <span className="text-gray-700">Financial reporting</span>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile App Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-4">Manage On The Go</h2>
              <p className="text-gray-600 mb-6">
                Access your restaurant management system from anywhere with our
                mobile app. Keep track of inventory, staff, and sales even when
                you're not on-site.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Smartphone className="w-5 h-5 text-blue-600 mt-1" />
                  <div>
                    <h4 className="font-semibold">Mobile Notifications</h4>
                    <p className="text-gray-600">
                      Get real-time alerts about inventory levels, staff
                      call-outs, and more.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Smartphone className="w-5 h-5 text-blue-600 mt-1" />
                  <div>
                    <h4 className="font-semibold">Remote Management</h4>
                    <p className="text-gray-600">
                      Approve orders, adjust schedules, and manage your team
                      from anywhere.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Smartphone className="w-5 h-5 text-blue-600 mt-1" />
                  <div>
                    <h4 className="font-semibold">Performance Insights</h4>
                    <p className="text-gray-600">
                      View key metrics and reports on your restaurant's
                      performance.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:w-1/2 flex justify-center">
              <div className="w-64 h-[500px] bg-gray-200 rounded-3xl overflow-hidden shadow-xl flex items-center justify-center">
                <div className="text-gray-700 font-medium">
                  Mobile App Preview
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-blue-100">Restaurants Using EaterySys</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">30%</div>
              <div className="text-blue-100">Average Cost Reduction</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">25%</div>
              <div className="text-blue-100">Increase in Staff Efficiency</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">99.9%</div>
              <div className="text-blue-100">Uptime Guaranteed</div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 bg-white" id="pricing">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Choose the perfect plan for your restaurant. Scale as you grow
              with no hidden fees.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {plans?.map((item: any) => (
              <PricingCard key={item.id} item={item} user={user} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Transform Your Restaurant?
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Join hundreds of successful restaurants already using EaterySys to
            streamline their operations.
          </p>
          <a
            href="/dashboard"
            className="inline-flex items-center px-6 py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Start Your Free Trial
            <ArrowUpRight className="ml-2 w-4 h-4" />
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
