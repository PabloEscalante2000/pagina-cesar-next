import Footer from "@/components/Footer";
import data from "@/public/data/dataArticulos.json";
import Image from "next/image";


export default function Articulos() {
    return (
      <div className="bg-marroncito min-h-dvh flex flex-col">
          <div className="flex-auto">
              <h1 className="w-[1500px] max-w-full font-poppins-bold text-marron-oscuro text-4xl mx-auto p-5 pt-10">Mis Artículos / My Articles</h1>
              <section className="w-[1500px] max-w-full mx-auto my-10">
                <div className="flex flex-wrap gap-5 p-5">
                  {data.map((val,i) => (
                    <div key={i} className="w-60 border border-marron-oscuro flex flex-col justify-between gap-5 rounded-md shadow-md overflow-hidden">
                      <div className="space-y-5">
                        <Image src={val.img} alt={val.title}
                        width={500} height={500} className="w-full h-40 object-cover"/>
                        <h2 className="font-poppins-bold text-lg text-marron-oscuro px-5">{val.title}</h2>
                      </div>
                      
                      <div className="space-y-5 pb-5">
                        <p className="line-clamp-3 font-open-sans-light px-5">
                          {val.introduction}
                        </p>
                        <a href={val.link} target="_blank" rel="noopener noreferrer" className="px-5 py-2 mx-5 mb-5 bg-marroncito-v2 w-fit rounded-full font-poppins-light text-sm text-marroncito shadow-md">Leer Artículo</a>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
          </div>
          <Footer/>
      </div>
    )
  }