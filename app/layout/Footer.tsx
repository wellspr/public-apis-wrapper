import ExternalLink from "~/icons/external/ExternalLink";
import Heart from "~/icons/heart/Heart";
import Tabler from "~/icons/tabler/Tabler";
import Vercel from "~/icons/vercel/Vercel";

const Footer = () => {

    return (
        <footer className="footer">
            <div className="row">
                <p className="attribution">&copy; 2023 | public apis</p>
                <p className="dedicatory">Made with <Heart /> by Paulo</p>
                <div className="links">
                    Powered By:
                    <div className="link">
                        <a href="https://vercel.com">
                            <div className="link-content">
                                <Vercel /><span>Vercel</span>
                            </div>
                        </a>
                    </div>
                    <div className="link">
                        <a href="https://tabler-icons.io/">
                            <div className="link-content">
                                <Tabler /><span>Tabler Icons</span>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
            <div className="issue-link">
                <a href="https://github.com/public-apis/public-apis/issues/3104" target="_blank">Public Apis situation - Read this issue</a>
                <ExternalLink />
            </div>
        </footer>
    );
};

export default Footer;