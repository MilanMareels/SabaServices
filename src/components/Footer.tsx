export default function FooterSection() {
  const companyName: string = import.meta.env.VITE_COMPANY_NAME!;
  return (
    <footer className="bg-[#101860] text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img src="/logo.JPG" alt="Logo - SabaServices" className="w-14" />
              <h3 className="font-bold tracking-wider nulschock text-sm">{companyName}</h3>
            </div>
            <p className="text-gray-300 mb-4 nulschock text-xs">Professionele horeca-dampkappen, elektriciteitswerken en depannage met militaire precisie en betrouwbaarheid.</p>
          </div>

          <div>
            <h4 className="font-bold mb-4 nulschock text-sm">DIENSTEN</h4>
            <ul className="space-y-2 text-gray-300 nulschock text-xs">
              <li>Horeca Dampkappen</li>
              <li>Elektriciteis werken</li>
              <li>Depannage Service</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 nulschock text-sm">BEDRIJFSGEGEVENS</h4>
            <div className="space-y-2 text-gray-300">
              <p className="nulschock text-sm">BTW: BE0673.814.359</p>
              <p className="text-[#F37326] font-bold nulschock text-xs">
                Bereikbaar: <a href="tel:+32 476 62 31 12">+32 476 62 31 12</a>
              </p>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-4 nulschock text-sm">LEGAL</h4>
            <div className="space-y-2 text-gray-300 nulschock text-xs">
              <a href="/privacy">Privacy Policy</a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400 nulschock text-xs">
          <a href="https://www.lannie.be">
            <p>&copy; {new Date().getFullYear()} SABA Services. Ontworpen en ontwikkeld door Lannie</p>
          </a>
        </div>
      </div>
    </footer>
  );
}
