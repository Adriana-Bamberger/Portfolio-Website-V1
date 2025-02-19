import { SocialIconProps } from './Types'

export default function SocialIcon({ href, src, alt }: SocialIconProps) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <div className="flex items-center justify-center w-11 h-11 mx-1 sm:w-10 sm:h-10">
        <img
          className="object-contain w-full h-full"
          src={src}
          alt={alt}
          loading="lazy"
        />
      </div>
    </a>
  )
}
