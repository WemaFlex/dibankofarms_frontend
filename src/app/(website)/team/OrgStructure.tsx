
export default function OrganizationalStructure() {
    // Array of departments makes it easy to add or remove roles later
    const departments = [
        { name: "Administration", icon: "fa-building" },
        { name: "Procurement & Logistics", icon: "fa-shopping-cart" },
        { name: "Accounts", icon: "fa-file-invoice-dollar" },
        { name: "Sales / Marketing", icon: "fa-bullhorn" },
        { name: "Production", icon: "fa-industry" },
        { name: "Quality Department", icon: "fa-check-circle" },
        { name: "Media", icon: "fa-photo-video" },
        { name: "Human Resource", icon: "fa-users-cog" },
        { name: "Warehouse & Logistics", icon: "fa-boxes" },
    ];

    return (
        <section className="org-structure-section section-padding bg-light">
            <div className="container">
                <div className="section-title text-center mb-5">
                    <span className="wow fadeInUp">
                        <img src="/assets/img/sub-title.svg" alt="img" />
                        Our Leadership
                    </span>
                    <h2 className="text-anim">Organizational Structure</h2>
                </div>

                {/* LEVEL 1: Board of Directors */}
                <div className="row justify-content-center mb-4 wow fadeInUp" data-wow-delay=".2s">
                    <div className="col-lg-4 col-md-6 text-center">
                        <div className="p-4 bg-white rounded shadow-sm border-top border-success border-4">
                            <div className="icon mb-3">
                                <i className="fas fa-users fa-3x text-success"></i>
                            </div>
                            <h4 className="mb-0">Board of Directors</h4>
                        </div>
                    </div>
                </div>

                {/* Visual Connector Line */}
                <div className="row justify-content-center d-none d-md-flex">
                    <div className="col-1 text-center">
                        <div style={{ height: "40px", width: "2px", backgroundColor: "#4CAF50", margin: "0 auto" }}></div>
                    </div>
                </div>

                {/* LEVEL 2: CEO */}
                <div className="row justify-content-center mb-5 wow fadeInUp" data-wow-delay=".4s">
                    <div className="col-lg-4 col-md-6 text-center">
                        <div className="p-4 bg-white rounded shadow-sm border-top border-success border-4">
                            <div className="icon mb-3">
                                <i className="fas fa-user-tie fa-3x text-success"></i>
                            </div>
                            <h4 className="mb-0">Chief Executive Officer</h4>
                        </div>
                    </div>
                </div>

                {/* Visual Connector Line for Departments */}
                <div className="row justify-content-center d-none d-md-flex mb-4">
                    <div className="col-8 border-top border-success border-2 position-relative">
                        <div style={{ height: "20px", width: "2px", backgroundColor: "#4CAF50", position: "absolute", top: "-20px", left: "50%" }}></div>
                    </div>
                </div>

                {/* LEVEL 3: Departments Grid */}
                <div className="row justify-content-center g-4">
                    {departments.map((dept, index) => (
                        <div
                            className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
                            data-wow-delay={`0.${(index % 4) + 2}s`}
                            key={index}
                        >
                            <div className="p-4 bg-white rounded shadow-sm text-center h-100 transition-hover">
                                <div className="icon mb-3">
                                    <i className={`fas ${dept.icon} fa-2x text-secondary`}></i>
                                </div>
                                <h6 className="mb-0">{dept.name}</h6>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}