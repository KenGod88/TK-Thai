import { useEffect, useState } from "react";
import api from "../services/api";
import { useAuth } from "../context/useAuth";

type Member = {
  memberId: number;
  name: string;
  monthPaid: boolean;
  boxLicenseValidUntil: string | null;
};

export default function AdminDashboard() {
  const [members, setMembers] = useState<Member[]>([]);
  const [loading, setLoading] = useState(true);

  const { logout } = useAuth();

  useEffect(() => {
    const load = async () => {
      const res = await api.get("/admin/payment-status");
      setMembers(res.data);
      setLoading(false);
    };

    load();
  }, []);

  const markAsPaid = async (memberId: number) => {
  try {
    await api.post("/admin/mark-payment", {
      memberId,
    });

    await refresh();
  } catch (err) {
    console.error("Payment error:", err);
    alert("Failed to mark as paid");
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

    alert("License updated ✅");

    await refresh();
  } catch (err) {
    console.error("License error:", err);
    alert("Failed to update license");
  }
};

  const refresh = async () => {
  try {
    console.log("Refreshing members...");

    const res = await api.get("/admin/payment-status");

    console.log("DATA:", res.data); // 👈 check in console

    setMembers(res.data);
  } catch (err) {
    console.error("Refresh failed:", err);
  }
};

  if (loading) return <p className="p-6 text-white">Loading...</p>;

  return (
    <div className="min-h-screen bg-black text-white p-6">

      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Admin Dashboard</h1>

        <div className="flex gap-4">
          <button
            onClick={refresh}
            className="bg-gray-700 px-4 py-2 rounded"
            >
            Refresh
            </button>

          <button
            onClick={logout}
            className="bg-red-500 px-4 py-2 rounded"
          >
            Logout
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full border border-gray-800 rounded-lg overflow-hidden">

          <thead className="bg-gray-900 text-sm uppercase tracking-widest">
            <tr>
              <th className="p-3 text-left">Member</th>
              <th className="p-3">Payment</th>
              <th className="p-3">Box License</th>
              <th className="p-3">Actions</th>
            </tr>
          </thead>

          <tbody>
            {members.map((m) => (
              <tr
                key={m.memberId}
                className="border-t border-gray-800 hover:bg-gray-900 transition"
              >
                <td className="p-3">{m.name}</td>

                {/* Payment status */}
                <td className="p-3 text-center">
                  {m.monthPaid ? (
                    <span className="bg-green-600 px-3 py-1 rounded-full text-xs">
                      Paid
                    </span>
                  ) : (
                    <span className="bg-red-600 px-3 py-1 rounded-full text-xs">
                      Unpaid
                    </span>
                  )}
                </td>

                {/* License */}
                <td className="p-3 text-center">
                  {m.boxLicenseValidUntil ? (
                    new Date(m.boxLicenseValidUntil).toLocaleDateString()
                  ) : (
                    <span className="text-gray-500">Not set</span>
                  )}
                </td>

                {/* Actions */}
                <td className="p-3 flex justify-center gap-3">

                  {!m.monthPaid && (
                    <button
                      onClick={() => markAsPaid(m.memberId)}
                      className="bg-green-500 px-3 py-1 rounded text-sm"
                    >
                      Mark Paid
                    </button>
                  )}

                  <button
                    onClick={() => updateLicense(m.memberId)}
                    className="bg-orange-500 px-3 py-1 rounded text-sm"
                  >
                    Set License
                  </button>

                </td>
              </tr>
            ))}
          </tbody>

        </table>
      </div>
    </div>
  );
}