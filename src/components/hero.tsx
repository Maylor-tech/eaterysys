import Link from "next/link";
import {
  ArrowUpRight,
  Check,
  Utensils,
  ClipboardList,
  Clock,
  ShieldCheck,
} from "lucide-react";

export default function Hero() {
  return (
    <div className="relative overflow-hidden bg-white">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 opacity-70" />

      <div className="relative pt-24 pb-32 sm:pt-32 sm:pb-40">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-8 tracking-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                EaterySys
              </span>{" "}
              AI-Powered Restaurant Management
            </h1>

            <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
              A comprehensive platform that centralizes menu management,
              inventory tracking, staff scheduling, and compliance monitoring in
              one powerful interface.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/dashboard"
                className="inline-flex items-center px-8 py-4 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors text-lg font-medium"
              >
                Start Free Trial
                <ArrowUpRight className="ml-2 w-5 h-5" />
              </Link>

              <Link
                href="#pricing"
                className="inline-flex items-center px-8 py-4 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors text-lg font-medium"
              >
                View Pricing
              </Link>
            </div>

            <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
              <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <Utensils className="w-8 h-8 text-blue-600 mb-2" />
                <h3 className="font-semibold text-gray-900">Menu Management</h3>
                <p className="text-sm text-gray-600 text-center">
                  Digital menu creation with AI optimization
                </p>
              </div>
              <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <ClipboardList className="w-8 h-8 text-blue-600 mb-2" />
                <h3 className="font-semibold text-gray-900">
                  Inventory Tracking
                </h3>
                <p className="text-sm text-gray-600 text-center">
                  Automated stock levels with predictive ordering
                </p>
              </div>
              <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <Clock className="w-8 h-8 text-blue-600 mb-2" />
                <h3 className="font-semibold text-gray-900">
                  Staff Scheduling
                </h3>
                <p className="text-sm text-gray-600 text-center">
                  Dynamic shift optimization with mobile alerts
                </p>
              </div>
              <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <ShieldCheck className="w-8 h-8 text-blue-600 mb-2" />
                <h3 className="font-semibold text-gray-900">
                  Compliance Monitoring
                </h3>
                <p className="text-sm text-gray-600 text-center">
                  Automated health code tracking with alerts
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
