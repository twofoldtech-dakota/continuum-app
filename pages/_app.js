import "../styles/app.css";
// import ScriptTag from 'react-script-tag';
function MyApp({ Component, pageProps }) {
    return (
        <div className="bg-gray-400 w-full p-10 min-h-screen">
            <div className="">
                <Component {...pageProps} />
            </div>
        
{/* 
        <ScriptTag type="text/javascript" src="/styles/js/jquery-3.2.1.slim.min.js" />
        <ScriptTag type="text/javascript" src="/styles/js/jquery.min.js" />
        <ScriptTag type="text/javascript" src="/styles/js/bootstrap.bundle.min.js" />
        <ScriptTag type="text/javascript" src="/styles/js/moment-with-locales.min.js" />
        <ScriptTag type="text/javascript" src="/styles/js/bootstrap-datetimepicker.min.js" />
        <ScriptTag type="text/javascript" src="/styles/js/custom.js" /> */}
        </div>
    );
}

export default MyApp;
