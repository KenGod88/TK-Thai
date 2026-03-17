import { useEffect, useState, useCallback } from "react";
import api from "../services/api";
import { useAuth } from "../context/useAuth";

import {
  CheckCircle,
  XCircle,
  Calendar,
} from "lucide-react";

type Member = {
  memberId: number;
  name: string;
  monthPaid: boolean;
  boxLicenseValidUntil: string | null;
};

export default function AdminDashboard() {
  const [members, setMembers] = useState<Member[]>([]);
  const [loading, setLoading] = useState(true);

  const [month, setMonth] = useState(new Date().getMonth() + 1);
  const [year, setYear] = useState(new Date().getFullYear());

  const [showUnpaidOnly, setShowUnpaidOnly] = useState(false);

  const { logout } = useAuth();

  // 🔥 Load data
  const load = useCallback(async () => {
    try {
      setLoading(true);

      const res = await api.get(
        `/admin/payment-status?year=${year}&month=${month}`
      );

      setMembers(res.data);
    } catch (err) {
      console.error("Load error:", err);
    } finally {
      setLoading(false);
    }
  }, [month, year]);

  useEffect(() => {
    load();
  }, [load]);

  // 🔥 Actions
  const markAsPaid = async (memberId: number) => {
    try {
      await api.post("/admin/mark-payment", { memberId });
      load();
    } catch (err) {
      console.error("Payment error:", err);
    }
  };

  const updateLicense = async (memberId: number) => {
    const date = prompt("Valid until (YYYY-MM-DD)");
    if (!date) return;

    try {
      await api.put("/admin/license", {
        memberId,
        validUntil: new Date(date).toISOString(),
      });
      load();
    } catch (err) {
      console.error("License error:", err);
    }
  };

  // 🔥 Stats
  const total = members.length;
  const paid = members.filter((m) => m.monthPaid).length;
  const unpaid = total - paid;
  const percentage = total > 0 ? Math.round((paid / total) * 100) : 0;

  // 🔥 Filter
  const filteredMembers = showUnpaidOnly
    ? members.filter((m) => !m.monthPaid)
    : members;

  if (loading)
    return <p className="p-6 text-white">Loading...</p>;

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Admin Dashboard</h1>

          <button
            onClick={logout}
            className="bg-red-500 px-4 py-2 rounded-lg"
          >
            Logout
          </button>
        </div>

        {/* Month selector */}
        <div className="flex items-center gap-4 mb-6">

          <Calendar className="text-orange-500" />

          <select
            value={month}
            onChange={(e) => setMonth(Number(e.target.value))}
            className="bg-gray-900 border border-gray-700 p-2 rounded"
          >
            {[...Array(12)].map((_, i) => (
              <option key={i} value={i + 1}>
                {new Date(0, i).toLocaleString("en", {
                  month: "long",
                })}
              </option>
            ))}
          </select>

          <input
            type="number"
            value={year}
            onChange={(e) => setYear(Number(e.target.value))}
            className="bg-gray-900 border border-gray-700 p-2 rounded w-24"
          />
        </div>

        {/* 🔥 Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">

          <div className="bg-gray-900/80 border border-gray-800 p-4 rounded-xl">
            <p className="text-gray-400 text-xs">Members</p>
            <p className="text-xl font-semibold">{total}</p>
          </div>

          <div className="bg-gray-900/80 border border-gray-800 p-4 rounded-xl">
            <p className="text-gray-400 text-xs">Paid</p>
            <p className="text-green-400 text-xl font-semibold">{paid}</p>
          </div>

          <div className="bg-gray-900/80 border border-gray-800 p-4 rounded-xl">
            <p className="text-gray-400 text-xs">Unpaid</p>
            <p className="text-red-400 text-xl font-semibold">{unpaid}</p>
          </div>

          <div className="bg-gray-900/80 border border-gray-800 p-4 rounded-xl">
            <p className="text-gray-400 text-xs">Completion</p>
            <p className="text-orange-400 text-xl font-semibold">
              {percentage}%
            </p>
          </div>

        </div>

        {/* 🔥 Filter toggle */}
        <div className="flex items-center gap-3 mb-4">

          <input
            type="checkbox"
            checked={showUnpaidOnly}
            onChange={() => setShowUnpaidOnly(!showUnpaidOnly)}
            className="w-4 h-4 accent-orange-500"
          />

          <span className="text-sm text-gray-300">
            Show unpaid only
          </span>

        </div>

        {/* 🔥 Members grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">

          {filteredMembers.map((m) => (
            <div
              key={m.memberId}
              className="bg-gray-900/80 border border-gray-800 p-4 rounded-xl hover:shadow-md transition flex flex-col justify-between"
            >

              {/* Info */}
              <div>
                <p className="font-semibold">{m.name}</p>

                <div className="flex items-center gap-2 mt-2 text-sm">
                  {m.monthPaid ? (
                    <>
                      <CheckCircle className="text-green-400 w-4 h-4" />
                      <span className="text-green-400">Paid</span>
                    </>
                  ) : (
                    <>
                      <XCircle className="text-red-400 w-4 h-4" />
                      <span className="text-red-400">Unpaid</span>
                    </>
                  )}
                </div>

                <p className="text-xs text-gray-400 mt-2">
                  {m.boxLicenseValidUntil
                    ? `Bokslicentie: ${new Date(
                        m.boxLicenseValidUntil
                      ).toLocaleDateString()}`
                    : "Geen bokslicentie"}
                </p>
              </div>

              {/* Actions */}
              <div className="flex gap-2 mt-4">

                {!m.monthPaid && (
                  <button
                    onClick={() => markAsPaid(m.memberId)}
                    className="flex-1 bg-green-500 text-xs py-4 rounded"
                  >
                    Paid
                  </button>
                )}

                <button
                  onClick={() => updateLicense(m.memberId)}
                  className="flex-1 bg-orange-500 text-xs py-4 rounded"
                >
                  Bokslicentie
                </button>

              </div>

            </div>
          ))}

        </div>

        {/* Empty state */}
        {filteredMembers.length === 0 && (
          <p className="text-gray-400 mt-6 text-sm">
            No members found
          </p>
        )}

      </div>
    </div>
  );
}