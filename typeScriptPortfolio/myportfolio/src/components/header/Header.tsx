import "../../App.css";

function Header() {
  const flexCss = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  };
  return (
    <header
      style={{
        ...flexCss,
        background: "rgba(0,0,0,0.6)",
        cursor: "pointer",
        padding: "0px 1em",
        height: "60px",
        border: "none",
        boxShadow: "0 8px 32px 0  rgba(0,0,0,0.37)",
        color: "white",
        position: "sticky",
        top: "0px",
        backdropFilter: "blur(6px)",
      }}
    >
      <h1 className="logo">Dev.me</h1>
      <div className="email_id" style={{ ...flexCss }}>
        <p style={{ fontWeight: "600", cursor: "pointer" }}>
          chshivam815@gmail.com
          <img
            className="email_id_link"
            style={{ width: "0.8rem" }}
            src="https://img.icons8.com/external-nawicon-glyph-nawicon/64/FFFFFF/external-link-seo-and-marketing-nawicon-glyph-nawicon.png"
          />
        </p>
      </div>
    </header>
  );
}

export default Header;
