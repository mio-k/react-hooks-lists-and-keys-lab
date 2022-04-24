import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const linkedItems = links.map((link) => (
    <a key={link} href={"#" + link}>{link}</a>
  )
  );
  return (
    <nav>{linkedItems}</nav>
  )
}

export default NavBar;
