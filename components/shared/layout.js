import Head from "next/head";
import Header from "./header";
import Sidebar from "./sidebar";

const Layout = ({ children, title }) => (
    <>
        <Head>
            <title>{title}</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <section className="continuum-sec">
            <Sidebar />

            <div className="continuum-right">
                <Header />
                <div className="continuum-detail">{children}</div>
            </div>
        </section>
    </>
);

export default Layout;
