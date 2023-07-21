import { NavLink } from "@remix-run/react";
import { useEffect, useRef } from "react";
import Menu from "~/icons/menu/Menu";

const Header = () => {

    const menuRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const hideMenu = () => {
            menuRef.current?.classList.remove("show");
        };

        window.addEventListener("resize", hideMenu);

        return () => {
            window.removeEventListener("resize", hideMenu);
        }
    }, []);

    return (
        <header className="header">
            <section className="brand">
                <span className="brand__text">Public APIs</span>
            </section>
            <section className="menu">
                <nav className="menu__navigation">
                    <ul>
                        <li>
                            <NavLink to={"/"}>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to={"/search"}>Search</NavLink>
                        </li>
                        <li>
                            <NavLink to={"/about"}>About</NavLink>
                        </li>
                    </ul>
                </nav>
            </section>
            <section className="menu-small">
                <button className="button button-menu" onClick={() => {
                    console.log("click", menuRef.current);
                    menuRef.current && menuRef.current.classList.toggle("show");
                }}>
                    <Menu />
                </button>
                <nav className="menu-small__navigation" ref={menuRef}>
                    <ul>
                        <li>
                            <NavLink to={"/"}>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to={"/search"}>Search</NavLink>
                        </li>
                        <li>
                            <NavLink to={"/about"}>About</NavLink>
                        </li>
                    </ul>
                </nav>
            </section>
        </header>
    );
};

export default Header;