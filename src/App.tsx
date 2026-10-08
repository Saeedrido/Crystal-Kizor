import { useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Philosophy from "./components/Philosophy";
import Ecosystem from "./components/Ecosystem";
import StudioCoka from "./components/StudioCoka";
import Ideas from "./components/Ideas";
import Impact from "./components/Impact";
import About from "./components/About";
import Pathways from "./components/Pathways";
import Footer from "./components/Footer";

export default function App() {
  useEffect(() => {
    const remaining = new Set(
      document.querySelectorAll<HTMLElement>(".reveal"),
    );
    if (remaining.size === 0) return;

    let frame = 0;
    const check = () => {
      frame = 0;
      remaining.forEach((el) => {
        if (el.getBoundingClientRect().top < window.innerHeight - 40) {
          el.classList.add("is-visible");
          remaining.delete(el);
        }
      });
      if (remaining.size === 0) teardown();
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(check);
    };
    const teardown = () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      window.removeEventListener("hashchange", onScroll);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    window.addEventListener("hashchange", onScroll);
    check();
    return teardown;
  }, []);

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded focus:bg-ink focus:px-4 focus:py-2 focus:text-paper"
      >
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Hero />
        <Philosophy />
        <Ecosystem />
        <StudioCoka />
        <Ideas />
        <Impact />
        <About />
        <Pathways />
      </main>
      <Footer />
    </>
  );
}
