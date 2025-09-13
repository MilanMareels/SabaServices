export default function Header() {
  return (
    <header>
      <section
        className="relative h-screen bg-cover bg-center bg-no-repeat flex items-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 51, 102, 0.7), rgba(0, 51, 102, 0.7)), url(https://readdy.ai/api/search-image?query=professional%20kitchen%20exhaust%20hood%20installation%20in%20commercial%20restaurant%20setting%20with%20modern%20stainless%20steel%20equipment%20clean%20industrial%20background%20professional%20lighting&width=1440&height=1024&seq=hero001&orientation=landscape)",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 text-white">
          <div className="max-w-2xl">
            <h1 className="text-5xl font-bold mb-6 tracking-tight">
              PROFESSIONELE HORECA
              <br />
              <span className="text-[#F37326]">DAMPKAPPEN & ELEKTRICITEITS WERKEN</span>
            </h1>
            <p className="text-xl mb-8 opacity-90 leading-relaxed">Specialist in horeca dampkappen en depannage service. Militaire precisie, betrouwbare kwaliteit.</p>
            <div className="flex space-x-4">
              <button className="bg-[#F37326] hover:bg-[#F37326] text-white px-8 py-4 rounded rounded-button font-bold text-lg transition-colors cursor-pointer whitespace-nowrap">
                <a href="#contact">DIRECT CONTACT</a>
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-[#101860] px-8 py-4 rounded rounded-button font-bold text-lg transition-colors cursor-pointer whitespace-nowrap">
                <a href="tel:+32 476 62 31 12">NOODGEVAL</a>
              </button>
            </div>
          </div>
        </div>
      </section>
    </header>
  );
}
