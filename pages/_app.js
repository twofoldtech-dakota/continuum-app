import "../styles/app.css";

function MyApp({ Component, pageProps }) {
    return (
        <div className="bg-gray-400 w-full p-10 min-h-screen">
            <div className="">
                <Component {...pageProps} />
            </div>
        </div>
    );
}

export default MyApp;
