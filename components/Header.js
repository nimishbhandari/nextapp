import headerStyles from "../styles/Header.module.css";

const Header = () => {
  return (
    <div>
      <h1 className={headerStyles.title}>
        <span>WebDev</span> News
      </h1>
      <p className={headerStyles.description}>
        Keep updated with the news 24x7
      </p>
    </div>
  );
};

export default Header;
