import { SITE } from '../data/site'
import { Button } from './ui'

export default function Header() {
  return (
    <header className="header">
      <div className="container inset header__row">
        <a href="#top" className="header__logo" aria-label={`${SITE.company}, ke atas halaman`}>
          <img src="/images/logo-gandrung-dark.png" alt={SITE.company} width="137" height="64" />
        </a>
        <Button href="#penawaran" className="btn--header">
          Dapatkan Penawaran
        </Button>
      </div>
    </header>
  )
}
