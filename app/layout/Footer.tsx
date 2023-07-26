import ExternalLink from "~/icons/external/ExternalLink";
import Github from "~/icons/github/Github";
import Heart from "~/icons/heart/Heart";
import Tabler from "~/icons/tabler/Tabler";
import Vercel from "~/icons/vercel/Vercel";

const Footer = () => {
    return (
        <footer className="footer">
            <p className="dedicatory">Made with <Heart /></p>
            <div className="issue-link">
                <a href="https://github.com/public-apis/public-apis/issues/3104" target="_blank">Public Apis situation - Read this issue</a>
                <ExternalLink />
            </div>
            <div className="row">
                <p className="attribution">&copy; 2023 Paulo Wells</p>
                <a href="https://github.com/wellspr/public-apis-wrapper"><p className="view-on-github">View on github<Github /></p></a>
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
            
        </footer>
    );
};

export default Footer;