import Header from "./header";

const Right = ({ children }) => (
    <div className="continuum-right">
        <Header />
        <div className="continuum-detail">
            <div className="title">
                <h3>At a Glance</h3>
                {children}
            </div>
        </div>
    </div>
);

export default Right;
