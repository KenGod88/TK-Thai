import { useEffect, useState } from "react";
import api from "../services/api";
import { useAuth } from "../context/useAuth";

import {
  CheckCircle,
  XCircle,
  CreditCard,
  IdCard,
} from "lucide-react";

type DashboardData = {
  name: string;
  monthPaid: boolean;
  boxLicenseValidUntil: string | null;
  hasValidLicense: boolean;
};

export default function Dashboard() {
  const [data, setData] = useState<DashboardData | null>(null);
  const [loading, setLoading] = useState(true);

  const { logout } = useAuth();

  useEffect(() => {
    load();
  }, []);

  const load = async () => {
    try {
      const res = await api.get("/member/me");
      setData(res.data);
    } catch (err) {
      console.error("Dashboard error:", err);
    } finally {
      setLoading(false);
    }
  };

  if (loading)
    return <p className="p-6 text-white">Loading...</p>;

  if (!data)
    return <p className="p-6 text-red-500">Error loading dashboard</p>;

  return (
    <div className="min-h-screen bg-black text-white p-6">

      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <div className="flex justify-between items-center mb-10">
          <div>
            <h1 className="text-3xl font-bold tracking-wide">
              Welcome, {data.name}
            </h1>

          </div>

          <button
            onClick={logout}
            className="bg-red-500/90 hover:bg-red-600 px-4 py-2 rounded-lg text-sm font-medium transition"
          >
            Logout
          </button>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-6">

          {/* Payment card */}
          <div className="bg-gray-900/80 border border-gray-800 p-6 rounded-2xl shadow-md hover:shadow-lg transition flex items-center justify-between">

            <div>
              <h2 className="text-sm text-gray-400 uppercase tracking-wider mb-2">
                Monthly Payment
              </h2>

              <div className="flex items-center gap-2">
                {data.monthPaid ? (
                  <>
                    <CheckCircle className="text-green-400 w-5 h-5" />
                    <span className="text-green-400 font-semibold">
                      Paid
                    </span>
                  </>
                ) : (
                  <>
                    <XCircle className="text-red-400 w-5 h-5" />
                    <span className="text-red-400 font-semibold">
                      Not Paid
                    </span>
                  </>
                )}
              </div>
            </div>

            <CreditCard className="text-orange-500 w-10 h-10 opacity-80" />
          </div>

          {/* License card */}
          <div className="bg-gray-900/80 border border-gray-800 p-6 rounded-2xl shadow-md hover:shadow-lg transition flex items-center justify-between">

            <div>
              <h2 className="text-sm text-gray-400 uppercase tracking-wider mb-2">
                Boxing License
              </h2>

              {data.boxLicenseValidUntil ? (
                <>
                  <p className="text-lg font-semibold">
                    {new Date(
                      data.boxLicenseValidUntil
                    ).toLocaleDateString()}
                  </p>

                  <div className="flex items-center gap-2 mt-2">
                    {data.hasValidLicense ? (
                      <>
                        <CheckCircle className="text-green-400 w-5 h-5" />
                        <span className="text-green-400 text-sm">
                          Active
                        </span>
                      </>
                    ) : (
                      <>
                        <XCircle className="text-red-400 w-5 h-5" />
                        <span className="text-red-400 text-sm">
                          Expired
                        </span>
                      </>
                    )}
                  </div>
                </>
              ) : (
                <span className="text-gray-500 text-sm">
                  No license set
                </span>
              )}
            </div>

            <IdCard className="text-orange-500 w-10 h-10 opacity-80" />
          </div>

        </div>

        {/* Refresh */}
        <div className="mt-10 flex justify-end">
          <button
            onClick={load}
            className="bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-lg text-sm transition"
          >
            Refresh
          </button>
        </div>

      </div>
    </div>
  );
}