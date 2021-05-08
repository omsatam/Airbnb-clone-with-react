import React, { useState } from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import LanguageIcon from "@material-ui/icons/Language";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Avatar } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

function Header() {
  const history = useHistory();
  const [input, setInput] = useState("");

  const searchAirbnb = (e) => {
    e.preventDefault();
    if (input !== "") {
      history.push("/search");
    }
    setInput("");
  };

  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__icon"
          src="https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png"
          alt="Airbnb"
        />
      </Link>

      <div className="header__center">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <SearchIcon onClick={searchAirbnb} />
      </div>

      <div className="header__right">
        <p>Become a host</p>
        <LanguageIcon />
        <ExpandMoreIcon />
        <Avatar />
      </div>
    </div>
  );
}

export default Header;
