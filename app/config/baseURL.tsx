export default() => {
    if (process.env.NODE_ENV === 'development') {
        return "http://localhost:3000";
    } else {
        return "https://public-apis-wrapper.vercel.app";
    }
}