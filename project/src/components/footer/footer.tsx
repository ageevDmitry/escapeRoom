import {SOCIAL_LINKS} from '../../const';

function Footer (): JSX.Element {

  return (
    <footer className="footer">
      <div className="container container--size-l">
        <div className="socials">
          <ul className="socials__list">
            {SOCIAL_LINKS.map((item) => (
              <li key ={item.type} className="socials__item">
                <a className="socials__link" href={item.href} aria-label={item.type} target="_blank" rel="nofollow noopener noreferrer">
                  <svg className="socials__icon socials__icon--default" width={28} height={28} aria-hidden="true">
                    <use xlinkHref={`#icon-${item.svgLink}-default`} />
                  </svg>
                  <svg className="socials__icon socials__icon--interactive" width={28} height={28} aria-hidden="true">
                    <use xlinkHref={`#icon-${item.svgLink}-interactive`} />
                  </svg>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
