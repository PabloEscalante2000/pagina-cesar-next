import { faInstagram, faSpotify, faYoutube, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"


const arrayMedia = [
    {
        icon:faSpotify,
        link:"https://open.spotify.com/show/4DBExpbyHvEpeA5bhxM5M9?si=RyJKdhG6QxyZfe_B-9Wsag"
    },
    {
        icon:faYoutube,
        link:"https://www.youtube.com/@C%C3%A9sarEscalante-k7w"
    },
    {
        icon:faInstagram,
        link:"https://www.instagram.com/escantesifuentescesar?igsh=MXhidXVjeGdiaHo4cw=="
    },
    {
        icon:faLinkedin,
        link:"https://pe.linkedin.com/in/cesar-escalante-sifuentes-948389347"
    }
]

export default function Footer() {
  return (
    <footer className="py-20 px-5 flex justify-center items-center font-poppins-light bg-marron-oscuro text-beige">
        <div className="w-[1200px] max-w-full flex justify-between items-center gap-5 pb-10">
            <p>© 2025. Todos los derechos reservados.</p>
            <div className="flex gap-5 ">
            {
                    arrayMedia.map((val,i) => (
                        <a key={i} href={val.link} target="_blank" rel="noopener noreferrer" className=" h-12 p-3 aspect-square flex justify-center items-center rounded-full border border-beige transition-all duration-300 hover:bg-beige hover:text-marron-oscuro">
                            <FontAwesomeIcon icon={val.icon}/>
                        </a>
                    ))
                }
            </div>
        </div>
    </footer>
  )
}
