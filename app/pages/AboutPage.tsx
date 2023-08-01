const AboutPage = () => {

    return (
        <div className="about">
            <h1 className="about__heading">About this app</h1>

            <p>
                It's always fun to look up and find a new api. In this search I found the <a href="https://github.com/public-apis/public-apis">public apis</a>  project, which is a wonderful help in the task of finding great free public apis.
            </p>

            <p>
                Although the public apis project has an <a href="https://github.com/davemachado/public-api">api</a> for itself, I went on to create my own api and frontend implementation based on the public list of apis, using <a href="https://remix.run/">Remix</a> and <a href="https://sass-lang.com/">Sass</a>.
            </p>
        </div>
    );
};

export default AboutPage;