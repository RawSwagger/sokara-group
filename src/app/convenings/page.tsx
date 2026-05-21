import Navbar from "@/components/Navbar";
import Convenings from "@/components/Convenings";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Convenings — Sokara Group",
  description:
    "Charters, villa boards, single-table dinners. Proximity is the product. The room is the receipt.",
};

export default function ConveningsPage() {
  return (
    <main>
      <Navbar />
      <div className="pt-20">
        <Convenings />
      </div>
      <Footer />
    </main>
  );
}
