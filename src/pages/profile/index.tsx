import { useState } from "react";
import { useNavigate } from "react-router-dom";
import type { Address, ProfileData } from "@/types";
import { MOCK_ADDRESSES } from "@/constants";
import {
  User,
  Mail,
  Phone,
  Shield,
  Store,
  LogOut,
  Trash2,
  ChevronRight,
  Check,
  X,
  Home,
  Briefcase,
  MapPin,
  Plus,
} from "lucide-react";

function getMockUser(): ProfileData {
  try {
    const raw = sessionStorage.getItem("mock_user");
    if (raw) {
      const user = JSON.parse(raw);
      return {
        name: user.name ?? "Sandeep K A",
        email: user.email ?? "buyer@vendora.in",
        phone: user.phone ?? "+91 98765 43210",
      };
    }
  } catch {}
  return {
    name: "Sandeep K A",
    email: "buyer@vendora.in",
    phone: "+91 98765 43210",
  };
}

function getLabelIcon(label: string) {
  if (label === "Home") return <Home size={13} strokeWidth={2} />;
  if (label === "Work") return <Briefcase size={13} strokeWidth={2} />;
  return <MapPin size={13} strokeWidth={2} />;
}

export default function ProfilePage() {
  const navigate = useNavigate();
  const [profile, setProfile] = useState<ProfileData>(getMockUser);
  const [editing, setEditing] = useState(false);
  const [draft, setDraft] = useState<ProfileData>(profile);
  const [addresses, setAddresses] = useState<Address[]>(MOCK_ADDRESSES);

  function handleEdit() {
    setDraft(profile);
    setEditing(true);
  }

  function handleSave() {
    setProfile(draft);
    setEditing(false);
  }

  function handleCancel() {
    setDraft(profile);
    setEditing(false);
  }

  function handleSignOut() {
    sessionStorage.removeItem("mock_user");
    navigate("/login");
  }

  function handleSetDefault(id: string) {
    setAddresses((prev) => prev.map((a) => ({ ...a, isDefault: a.id === id })));
  }

  function handleDeleteAddress(id: string) {
    setAddresses((prev) => prev.filter((a) => a.id !== id));
  }

  const initials = profile.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

  return (
    <div className="max-w-[860px] mx-auto px-4 lg:px-8 py-6">
      {/* ── Profile header ── */}
      <div className="bg-white border border-line rounded-2xl p-6 mb-6 flex items-center gap-5">
        <div className="w-16 h-16 rounded-2xl bg-forest-xxl border border-forest-xl flex items-center justify-center flex-shrink-0">
          <span className="font-head text-[1.25rem] font-bold text-forest">
            {initials}
          </span>
        </div>
        <div className="min-w-0">
          <h1 className="font-head text-[1.25rem] font-bold text-ink tracking-[-0.02em]">
            {profile.name}
          </h1>
          <p className="text-[13.5px] text-ink-3 mt-0.5">{profile.email}</p>
          <p className="text-[12px] text-ink-3 mt-1">
            Member since{" "}
            <span className="text-ink-2 font-medium">June 2025</span>
          </p>
        </div>
      </div>

      {/* ── Two column layout ── */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-5">
        {/* ── Left — Personal info ── */}
        <div className="bg-white border border-line rounded-2xl overflow-hidden">
          <div className="flex items-center justify-between px-5 py-4 border-b border-line">
            <h2 className="font-head text-[14px] font-bold text-ink">
              Personal information
            </h2>
            {!editing ? (
              <button
                onClick={handleEdit}
                className="text-[13px] font-semibold text-forest hover:underline"
              >
                Edit
              </button>
            ) : (
              <div className="flex items-center gap-2">
                <button
                  onClick={handleCancel}
                  className="w-7 h-7 rounded-lg flex items-center justify-center hover:bg-bg text-ink-3 hover:text-ink transition-colors"
                >
                  <X size={15} strokeWidth={2} />
                </button>
                <button
                  onClick={handleSave}
                  className="flex items-center gap-1.5 px-3 py-1.5 bg-forest text-white text-[12.5px] font-semibold rounded-lg hover:bg-forest-2 transition-colors"
                >
                  <Check size={13} strokeWidth={2.5} />
                  Save
                </button>
              </div>
            )}
          </div>

          <div className="p-5 flex flex-col gap-4">
            {/* Name */}
            <div className="flex flex-col gap-1.5">
              <label className="flex items-center gap-1.5 text-[12px] font-bold text-ink-3 uppercase tracking-[0.06em]">
                <User size={12} strokeWidth={2.5} />
                Full name
              </label>
              {editing ? (
                <input
                  type="text"
                  value={draft.name}
                  onChange={(e) =>
                    setDraft((prev) => ({ ...prev, name: e.target.value }))
                  }
                  className="h-10 px-3.5 text-[14px] text-ink border border-line rounded-xl outline-none focus:border-forest-light transition-colors bg-bg"
                  autoFocus
                />
              ) : (
                <p className="text-[14px] text-ink py-2">{profile.name}</p>
              )}
            </div>

            {/* Email */}
            <div className="flex flex-col gap-1.5">
              <label className="flex items-center gap-1.5 text-[12px] font-bold text-ink-3 uppercase tracking-[0.06em]">
                <Mail size={12} strokeWidth={2.5} />
                Email address
              </label>
              {editing ? (
                <input
                  type="email"
                  value={draft.email}
                  onChange={(e) =>
                    setDraft((prev) => ({ ...prev, email: e.target.value }))
                  }
                  className="h-10 px-3.5 text-[14px] text-ink border border-line rounded-xl outline-none focus:border-forest-light transition-colors bg-bg"
                />
              ) : (
                <p className="text-[14px] text-ink py-2">{profile.email}</p>
              )}
            </div>

            {/* Phone */}
            <div className="flex flex-col gap-1.5">
              <label className="flex items-center gap-1.5 text-[12px] font-bold text-ink-3 uppercase tracking-[0.06em]">
                <Phone size={12} strokeWidth={2.5} />
                Phone number
              </label>
              {editing ? (
                <input
                  type="tel"
                  value={draft.phone}
                  onChange={(e) =>
                    setDraft((prev) => ({ ...prev, phone: e.target.value }))
                  }
                  className="h-10 px-3.5 text-[14px] text-ink border border-line rounded-xl outline-none focus:border-forest-light transition-colors bg-bg"
                />
              ) : (
                <p className="text-[14px] text-ink py-2">{profile.phone}</p>
              )}
            </div>
          </div>
        </div>

        {/* ── Right — Account settings ── */}
        <div className="flex flex-col gap-4">
          {/* Account actions */}
          <div className="bg-white border border-line rounded-2xl overflow-hidden">
            <div className="px-5 py-4 border-b border-line">
              <h2 className="font-head text-[14px] font-bold text-ink">
                Account
              </h2>
            </div>
            <div className="divide-y divide-line">
              {/* Change password */}
              <button className="w-full flex items-center justify-between px-5 py-3.5 hover:bg-bg transition-colors group">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-bg-2 flex items-center justify-center flex-shrink-0 group-hover:bg-bg-3 transition-colors">
                    <Shield size={15} strokeWidth={2} className="text-ink-2" />
                  </div>
                  <span className="text-[13.5px] font-medium text-ink">
                    Change password
                  </span>
                </div>
                <ChevronRight
                  size={15}
                  strokeWidth={2}
                  className="text-ink-3"
                />
              </button>

              {/* Seller account */}
              <button className="w-full flex items-center justify-between px-5 py-3.5 hover:bg-bg transition-colors group">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-forest-xxl flex items-center justify-center flex-shrink-0">
                    <Store size={15} strokeWidth={2} className="text-forest" />
                  </div>
                  <div className="text-left">
                    <p className="text-[13.5px] font-medium text-ink">
                      Start selling
                    </p>
                    <p className="text-[12px] text-ink-3">
                      Open your store on Vendora
                    </p>
                  </div>
                </div>
                <ChevronRight
                  size={15}
                  strokeWidth={2}
                  className="text-ink-3"
                />
              </button>
            </div>
          </div>

          {/* Danger zone */}
          <div className="bg-white border border-line rounded-2xl overflow-hidden">
            <div className="px-5 py-4 border-b border-line">
              <h2 className="font-head text-[14px] font-bold text-ink">
                Danger zone
              </h2>
            </div>
            <div className="divide-y divide-line">
              {/* Sign out */}
              <button
                onClick={handleSignOut}
                className="w-full flex items-center gap-3 px-5 py-3.5 hover:bg-bg transition-colors group"
              >
                <div className="w-8 h-8 rounded-lg bg-bg-2 flex items-center justify-center flex-shrink-0 group-hover:bg-bg-3 transition-colors">
                  <LogOut size={15} strokeWidth={2} className="text-ink-2" />
                </div>
                <span className="text-[13.5px] font-medium text-ink">
                  Sign out
                </span>
              </button>

              {/* Delete account */}
              <button className="w-full flex items-center gap-3 px-5 py-3.5 hover:bg-red-50 transition-colors group">
                <div className="w-8 h-8 rounded-lg bg-red-50 flex items-center justify-center flex-shrink-0 group-hover:bg-red-100 transition-colors">
                  <Trash2 size={15} strokeWidth={2} className="text-red-500" />
                </div>
                <span className="text-[13.5px] font-medium text-red-500">
                  Delete account
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ── Addresses — full width ── */}
      <div className="bg-white border border-line rounded-2xl overflow-hidden mt-8">
        <div className="flex items-center justify-between px-5 py-4 border-b border-line">
          <h2 className="font-head text-[14px] font-bold text-ink">
            Saved addresses
          </h2>
          <button className="flex items-center gap-1.5 text-[13px] font-semibold text-forest hover:underline">
            <Plus size={14} strokeWidth={2.5} />
            Add address
          </button>
        </div>

        {addresses.length === 0 ? (
          <div className="flex flex-col items-center gap-3 py-12 text-center">
            <div className="w-12 h-12 rounded-2xl bg-bg-2 flex items-center justify-center">
              <MapPin size={22} strokeWidth={1.5} className="text-ink-3" />
            </div>
            <p className="text-[13.5px] text-ink-3">No saved addresses yet</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 divide-y md:divide-y-0 md:divide-x divide-line">
            {addresses.map((address) => (
              <div key={address.id} className="p-5 flex flex-col gap-3">
                {/* Label + default badge */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1.5 text-[12.5px] font-semibold text-ink-2">
                      {getLabelIcon(address.label)}
                      {address.label}
                    </div>
                    {address.isDefault && (
                      <span className="text-[10.5px] font-bold text-forest bg-forest-xxl px-2 py-0.5 rounded-full">
                        Default
                      </span>
                    )}
                  </div>
                </div>

                {/* Address details */}
                <div className="text-[13.5px] text-ink-2 leading-relaxed">
                  <p className="font-semibold text-ink">{address.name}</p>
                  <p>{address.line1}</p>
                  {address.line2 && <p>{address.line2}</p>}
                  <p>
                    {address.city}, {address.state} — {address.pincode}
                  </p>
                  <p className="mt-1 text-ink-3">{address.phone}</p>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-2 pt-1">
                  {!address.isDefault && (
                    <button
                      onClick={() => handleSetDefault(address.id)}
                      className="text-[12.5px] font-medium text-forest hover:underline"
                    >
                      Set as default
                    </button>
                  )}
                  <button className="text-[12.5px] font-medium text-ink-2 hover:text-ink hover:underline">
                    Edit
                  </button>
                  {!address.isDefault && (
                    <button
                      onClick={() => handleDeleteAddress(address.id)}
                      className="text-[12.5px] font-medium text-red-400 hover:text-red-500 hover:underline"
                    >
                      Delete
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
