const AboutPage = () => {

    return (
        <div className="about">
            <h1 className="about__heading">About this app</h1>

            <p>
                It's always fun to look up and find a new api. 
            </p>    
            <p>
                The <a href="https://github.com/public-apis-dev/public-apis">public apis</a>  project is the upmost source of free public apis.
            </p>

            <p>
                I was looking for any suitable and interesting api to use in a small project intended for me to learn about <a href="https://remix.run/">Remix</a>. 
            </p>

            <p>
                To build this project I first cloned the public apis list to a json file and created a api for myself, to serve this app.
                The api is publicly available at <a href="https://public-apis-wrapper.vercel.app/api">https://public-apis-wrapper.vercel.app/api</a>.
            </p>
        </div>
    );
};

export default AboutPage;