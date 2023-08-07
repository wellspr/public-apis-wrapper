import ExternalLink from "~/icons/external/ExternalLink";
import Github from "~/icons/github/Github";
import Heart from "~/icons/heart/Heart";
import Tabler from "~/icons/tabler/Tabler";
import Vercel from "~/icons/vercel/Vercel";

const Footer = () => {
    return (
        <footer className="footer">
            <p className="dedicatory">Made with <Heart /></p>
            <a className="issue-link"
                href="https://github.com/public-apis/public-apis/issues/3104"
                target="_blank">
                <p>Public Apis situation - Read this issue</p>
                <ExternalLink />
            </a>
            <div className="row">
                <p className="attribution">&copy; 2023 Paulo Wells</p>
                <a href="https://github.com/wellspr/public-apis-wrapper">
                    <p className="view-on-github">View on github<Github /></p>
                </a>
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
                <div className="background">
                    Background image by <a href="https://www.freepik.com/free-vector/gradient-white-monochrome-background_15628854.htm#query=background%20abstract&position=15&from_view=search&track=ais">Freepik</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;