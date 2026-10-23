import { SITE } from '../data/site'

export function Footer() {
  return (
    <footer className="footer">
      <p>
        Copyright © {new Date().getFullYear()} | {SITE.company}
      </p>
    </footer>
  )
}
