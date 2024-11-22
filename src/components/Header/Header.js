import { Div, Wrapper } from '../Helpers/Hepleprs';
import Cart from './Cart';
import Logo from './Logo';
import Navigation from './Navigation/Navigation';
import Search from './Search';
import Social from './Social';
import styles from './styles/Header.module.css';

const Header = ({ update, updateCart }) => {
  const socialLinks = [
    {
      iconUrl: `/images/facebook_icn_1.svg`,
      socialLinkUrl: 'http://localhost:3000/',
    },
    {
      iconUrl: `/images/instagram_icn _1.svg`,
      socialLinkUrl: 'http://localhost:3000/',
    },
    {
      iconUrl: `/images/twitter_icn_1.svg`,
      socialLinkUrl: 'http://localhost:3000/',
    },
  ];

  return (
    <Div className={`${styles.header}`}>
      <Wrapper className={styles.headerWrapper}>
        <Div
          className={`d-flex justify-content-between align-items-center ${styles.topHeader}`}
        >
          <Logo />
          <Social socialLinks={socialLinks} className={styles.headerSocial} />
          <Div className={'d-flex justify-content-between align-items-center'}>
            <Search className="mr-24" />
            <Cart update={update} />
          </Div>
        </Div>

        <Div className={'d-flex justify-content-center align-items-center'}>
          <Navigation />
        </Div>
      </Wrapper>
    </Div>
  );
};

export default Header;
