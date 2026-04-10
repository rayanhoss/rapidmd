import type { Metadata } from "next";
import Link from "next/link";
export const metadata: Metadata = { title: "Privacy Policy", description: "Privacy policy for Rapid Construction & Renovation LLC.", robots: { index: false } };
export default function PrivacyPage() {
  return (
    <div className="pt-32 pb-20 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="font-display text-5xl text-white tracking-wider mb-6">PRIVACY POLICY</h1>
      <p className="text-white/40 text-sm mb-4">Last updated: 2025</p>
      <div className="space-y-5 text-white/50 text-sm leading-relaxed">
        <p>Rapid Construction & Renovation LLC ("we", "us") operates rapidconstructionservices.com. We collect information you voluntarily provide when requesting an estimate (name, email, phone, project details). We use this information solely to respond to your inquiry.</p>
        <p>We do not sell, trade, or transfer your personal information to outside parties. We do not use your information for marketing purposes without consent.</p>
        <p>Our website may use cookies for analytics purposes. You may disable cookies through your browser settings.</p>
        <p>Questions? Contact us at <a href="mailto:rapidconstructinc@gmail.com" className="text-white">rapidconstructinc@gmail.com</a></p>
      </div>
      <div className="mt-8"><Link href="/" className="btn-outline text-sm">← Back to Home</Link></div>
    </div>
  );
}
