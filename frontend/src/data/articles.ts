export interface Article {
  slug: string
  title: string
  date: string
  excerpt?: string
  image1?: string
  image2?: string
  image3?: string
  author?: string
  role?: string
}

// Add your articles here.
// Place the article text content at: public/articles/<slug>.txt
export const articles: Article[] = [
  {
    slug: "ond-teknologi",
    title: "Bruker du teknologien eller blir du brukt?",
    date: "23.05.2026",
    excerpt: "Brukervennlig design betyr ikke nødvendigvis en god opplevelse på lang sikt. Noen teknologiske løsninger har som mål å skape avhengighet og kontinuerlig bruk, utkledd som enkle og hjelpsomme apper.",
    image1: "https://images.unsplash.com/photo-1480694313141-fce5e697ee25?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    image2: "https://images.unsplash.com/photo-1643845910538-bf91b570e808?q=80&w=988&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    image3: "https://images.unsplash.com/photo-1778097106215-29eb1d87a01f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    author: "Vårin Sørlie",
    role: "Masterstudent i informatikk, UiO",
  },
]
