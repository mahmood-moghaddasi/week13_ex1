import "./Header.css";

function Header() {
  return (
    <>
      <div className="header-div">
        <h1>Tabs Component with React</h1>
        <nav>
          <li>Tab 1</li>
          <li>Tab 2</li>
          <li>Tab 3</li>
          <li>Tab 4</li>
        </nav>
      </div>
      <div className="Content">
        <h2 className="content-title">Content 1</h2>
        <p className="content-disc">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt
          rerum adipisci voluptatibus voluptas fugiat, error saepe illum ea quae
          officiis?
        </p>
      </div>
    </>
  );
}

export default Header;
