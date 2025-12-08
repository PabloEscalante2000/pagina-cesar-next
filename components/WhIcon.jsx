import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function WhIcon() {
  return (
    <a className="fixed bottom-5 right-5 aspect-square h-16 p-5 text-2xl bg-marron-oscuro/70 rounded-3xl  text-beige flex justify-center items-center z-99 border border-white/20 cursor-pointer transition-all ease-in-out duration-300 hover:scale-110 backdrop-blur-sm shadow-md shadow-marron-oscuro"
    href="https://api.whatsapp.com/send?phone=51930509438&text=Buenas%2C%20estoy%20interesad%40%20en%20sus%20servicios%2C%20mi%20nombre%20es..." rel="noopener noreferrer" target="_blank"
    >
        <FontAwesomeIcon icon={faWhatsapp}/>
    </a>
  )
}
