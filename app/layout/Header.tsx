import { NavLink } from "@remix-run/react";
import { useEffect, useRef } from "react";
import baseURL from "~/config/baseURL";
import Close from "~/icons/close/Close";
import Logo from "~/icons/logo/Logo";
import Menu from "~/icons/menu/Menu";

const Header = () => {

    const menuRef = useRef<HTMLElement>(null);
    const menuBtn = useRef<HTMLButtonElement>(null);
    const closeBtn = useRef<HTMLButtonElement>(null);

    const hideMenu = () => {
        menuRef.current?.classList.remove("show");
        menuBtn.current && menuBtn.current.classList.remove("hidden");
        closeBtn.current && closeBtn.current.classList.add("hidden");
    };

    useEffect(() => {

        window.addEventListener("resize", hideMenu);

        return () => {
            window.removeEventListener("resize", hideMenu);
        }
    }, []);

    return (
        <header className="header">
            <div className="header__main-container">
                <section className="brand">
                    <a href={baseURL()}>
                        <Logo theme="dark" />
                        <span className="brand__text">Public APIs</span>
                    </a>
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
                    <button
                        name="menu button"
                        aria-label="menu button"
                        className="button menu-small__button-menu"
                        ref={menuBtn}
                        onClick={() => {
                            menuRef.current && menuRef.current.classList.remove("hidden");
                            menuRef.current && menuRef.current.classList.add("show");
                            menuBtn.current && menuBtn.current.classList.add("hidden");
                            closeBtn.current && closeBtn.current.classList.remove("hidden");
                        }}>
                        <Menu />
                    </button>
                    <button
                        name="close button"
                        aria-label="close button"
                        className="button menu-small__button-close hidden"
                        ref={closeBtn}
                        onClick={() => {
                            menuRef.current && menuRef.current.classList.add("hidden");
                            menuRef.current && menuRef.current.classList.remove("show");
                            menuBtn.current && menuBtn.current.classList.remove("hidden");
                            closeBtn.current && closeBtn.current.classList.add("hidden");
                        }}>
                        <Close />
                    </button>
                </section>
            </div>
            <section className="menu-small">
                <nav className="menu-small__navigation hidden" ref={menuRef}>
                    <ul>
                        <li>
                            <NavLink to={"/"} onClick={hideMenu}>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to={"/search"} onClick={hideMenu}>Search</NavLink>
                        </li>
                        <li>
                            <NavLink to={"/about"} onClick={hideMenu}>About</NavLink>
                        </li>
                    </ul>
                </nav>
            </section>
        </header>
    );
};

export default Header;