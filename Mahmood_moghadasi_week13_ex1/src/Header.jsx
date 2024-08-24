import "./Header.css";
import { useState } from "react";

function Header() {
  const [tabs, setTabs] = useState([
    { name: "Tab 1", id: 1, isSelect: false },
    { name: "Tab 2", id: 2, isSelect: false },
    { name: "Tab 3", id: 3, isSelect: false },
    { name: "Tab 4", id: 4, isSelect: false },
  ]);

  // write tabs array with state
  const [tabNumber, changeNumber] = useState(1);

  const selectHandler = (id) => {
    console.log(id);
    const currentTabIndex = tabs.findIndex((tab) => tab.id == id);
    const newTabs = tabs.map((tab) => {
      if (tab.id == id) {
        return { name: tab.name, id: tab.id, isSelect: true };
      } else {
        return { name: tab.name, id: tab.id, isSelect: false };
      }
    });
    setTabs(newTabs);
  };
  const tabHandler = (event) => {
    console.dir(event.target);
    changeNumber(event.target.id);
    selectHandler(event.target.id);
  };
  return (
    <>
      <div className="header-div">
        <h1>Tabs Component with React</h1>
        <nav>
          {tabs.map((tab) => (
            <li
              className={tab.isSelect ? "showBorder" : ""}
              id={tab.id}
              key={tab.id}
              onClick={tabHandler}
            >
              {tab.name}
            </li>
          ))}
        </nav>
      </div>
      <div className="Content">
        <h2 className="content-title">Content {tabNumber}</h2>
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
