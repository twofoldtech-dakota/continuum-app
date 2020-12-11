import React, { useEffect, useState } from "react";
import Layout from "../components/shared/layout";

export default function Courses1() {
    const importCourseData = async () => {
        try {
            await fetch("/api/import", {
                method: "GET",
            });
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <Layout title="Continuum - Import Tools">
            <div className="title" style={{ marginBottom: "20px" }}>
                <h3>Import Tools</h3>
            </div>
            <div className="row">
                <div className="col-sm-6">
                    <div className="card">
                        <div className="card-body">
                            <h3 className="card-title">Course Data Import</h3>
                            <p className="card-text">
                                Clicking this button will import all json data
                                located in the /data folder.
                            </p>
                            <a
                                href="#"
                                className="btn btn-primary"
                                style={{ marginTop: "15px" }}
                                onClick={importCourseData}
                            >
                                Import Course Data
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export async function getServerSideProps(ctx) {
    const token = getAuthCookie(ctx.req);

    return { props: { token: token || null } };
}
