export interface Experience {
  title: string
  content: string
}

export interface Interest {
  name: string
  content: string
  link?: string
}

export interface SocialLink {
  href: string
  src: string
  alt: string
}

export interface SocialIconProps {
  href: string
  src: string
  alt: string
  className?: string
}

export interface Project {
  id: string
  title: string
  description: string
  image: string
  images?: string[]
}
