export default function Header() {
  return (
    <header>
      <section className="relative h-screen bg-cover bg-center bg-no-repeat flex items-center" style={{ backgroundColor: "#101860" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-white">
          <div className="max-w-xl md:max-w-2xl lg:max-w-4xl">
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-6 tracking-tight nulschock leading-snug">
              PROFESSIONELE HORECA
              <br />
              <span className="text-[#F37326]">DAMPKAPPEN & ELEKTRICITEITS WERKEN</span>
            </h1>

            <p className="mb-8 opacity-90 leading-relaxed nulschock text-xs sm:text-sm md:text-base">
              Specialist in horeca dampkappen en depannage service. Militaire precisie, betrouwbare kwaliteit.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="bg-[#F37326] hover:bg-[#d85e17] text-white px-6 py-3 sm:px-8 sm:py-4 rounded font-bold text-sm transition-colors text-center nulschock">
                DIRECT CONTACT
              </a>
              <a
                href="tel:+32 476 62 31 12"
                className="border-2 border-white text-white hover:bg-white hover:text-[#101860] px-6 py-3 sm:px-8 sm:py-4 rounded font-bold text-sm transition-colors text-center nulschock"
              >
                NOODGEVAL
              </a>
            </div>
          </div>
        </div>
      </section>
    </header>
  );
}
