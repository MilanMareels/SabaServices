import { serviceItems } from "../data/serviceItems";

export default function ServiceSection() {
  return (
    <section className="flex justify-center items-center flex-col bg-gray-100" id="services">
      <div className="pt-10 flex justify-center items-center flex-col gap-5">
        <h1 className="font-semibold text-3xl">Services</h1>
        <div className="max-w-[700px] m-auto text-center p-5">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos ab, similique reprehenderit atque aliquam impedit fuga libero quos vel voluptatem nemo inventore, numquam tempore eum
            ad ut dolorum deleniti quia.
          </p>
        </div>
      </div>
      <section className="grid md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 gap-10 p-10 m-auto">
        {serviceItems.map((i, index) => (
          <div key={index} className="relative cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105">
            <img src={i.src} className=" w-[500px] h-[300px] object-cover" loading="lazy" />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end items-start">
              <h2 className="text-white text-lg font-bold ml-4">{i.title}</h2>
              <p className="text-white text-sm mt-2 ml-4 mb-4 truncate max-w-full pr-4" title={i.description}>
                {i.description}
              </p>
            </div>
          </div>
        ))}
      </section>
    </section>
  );
}
