// In the name of ALLAH!
// Mahdi Salehi


import telegramIcon from "../../../assets/images/telegram.svg"
import instagramIcon from "../../../assets/images/instagram.svg"
import whatsappIcon from "../../../assets/images/whatsapp.svg"
import youtubeIcon from "../../../assets/images/youtube.svg"
import threadsIcon from "../../../assets/images/threads.svg"


interface Icon {
  src: string
  alt: string
  href: string
}

const icons : Icon[] = [
  {src: telegramIcon, alt: "telegram-icon", href: "#"},
  {src: whatsappIcon, alt: "whatsapp-icon", href: "#"},
  {src: threadsIcon, alt: "threads-icon", href: "#"},
  {src: youtubeIcon, alt: "youtube-icon", href: "#"},
  {src: instagramIcon, alt: "instagram-icon", href: "#"},
]

function ContactUs() {
  return (
    <div className="fixed left-40 top-1/2 translate-y-[-50%] rounded-full bg-c-blue px-2 py-4">
      {
        icons.map(({ src, alt, href } : Icon, index) => 
          <div className="w-[40px] mb-4 last:mb-0" key={index}>
            <a href={href}>
              <img src={src} alt={alt} className="rounded-full" />
            </a>
          </div>
        )
      }
    </div>
  )
}

export default ContactUs