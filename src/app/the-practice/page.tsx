import Navbar from "@/components/Navbar";
import ThePractice from "@/components/ThePractice";
import Footer from "@/components/Footer";

export const metadata = {
  title: "The Practice — Sokara Group",
  description:
    "Four standards we don't negotiate. Principals only. Discretion is the deliverable.",
};

export default function ThePracticePage() {
  return (
    <main>
      <Navbar />
      <div className="pt-20">
        <ThePractice />
      </div>
      <Footer />
    </main>
  );
}
