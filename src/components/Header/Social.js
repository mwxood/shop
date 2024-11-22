const Social = ({ socialLinks, className }) => {
  return (
    <ul className="social removeListStyle d-flex justify-content-between">
      {socialLinks.map((link, index) => (
        <li className={`${className}`} key={index}>
          <a href={link.socialLinkUrl} target="_blank" rel="noreferrer">
            <img src={link.iconUrl} alt="social" />
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Social;
