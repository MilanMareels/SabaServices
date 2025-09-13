export default function EmSection() {
  return (
    <div className="bg-gray-100 w-full pl-6 pr-6">
      <div className="mt-16 bg-orange-500 rounded-lg p-8 text-center text-white">
        <div className="flex items-center justify-center mb-4">
          <i className="fas fa-exclamation-triangle text-3xl mr-4"></i>
          <h3 className="text-2xl font-bold">NOODGEVAL?</h3>
        </div>
        <p className="text-lg mb-6">Bij elektrische noodgevallen zijn wij 24/7 bereikbaar voor snelle hulp</p>
        <button className="bg-white text-orange-500 px-8 py-4 rounded rounded-button font-bold text-lg hover:bg-gray-100 transition-colors cursor-pointer whitespace-nowrap">
          <i className="fas fa-phone mr-2"></i>BEL NU: 0800 123 456
        </button>
      </div>
    </div>
  );
}
