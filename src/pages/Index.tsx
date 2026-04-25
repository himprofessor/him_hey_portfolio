import { useRef } from "react";
import Navbar from "@/components/portfolio/Navbar";
import Hero from "@/components/portfolio/Hero";
import Skills from "@/components/portfolio/Skills";
import Projects from "@/components/portfolio/Projects";
import Contact from "@/components/portfolio/Contact";
// @ts-ignore - no types shipped
import html2pdf from "html2pdf.js";
import { toast } from "@/hooks/use-toast";

const Index = () => {
  const portfolioRef = useRef<HTMLDivElement>(null);

  const handleDownload = async () => {
    if (!portfolioRef.current) return;
    toast({ title: "Generating PDF…", description: "This takes a few seconds." });

    // Force light text-on-light unfriendly elements; html2pdf will rasterize.
    const opt = {
      margin: [10, 10, 10, 10] as [number, number, number, number],
      filename: "YourName_Final.pdf",
      image: { type: "jpeg" as const, quality: 0.95 },
      html2canvas: {
        scale: 2,
        useCORS: true,
        backgroundColor: "#0a0d18",
        windowWidth: 1280,
      },
      jsPDF: { unit: "mm", format: "a4", orientation: "portrait" as const },
      pagebreak: { mode: ["avoid-all", "css", "legacy"] as string[] },
    };

    try {
      await html2pdf().set(opt).from(portfolioRef.current).save();
      toast({ title: "Resume downloaded ✨", description: "YourName_Final.pdf" });
    } catch (err) {
      console.error(err);
      toast({
        title: "Could not generate PDF",
        description: "Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <>
      <Navbar onDownload={handleDownload} />
      <main ref={portfolioRef}>
        <Hero onDownload={handleDownload} />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </>
  );
};

export default Index;
