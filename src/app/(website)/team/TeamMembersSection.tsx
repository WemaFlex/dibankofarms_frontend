import Link from "next/link";

export default function TeamMembersSection() {

    // Keeping the data in an array so your code stays clean and easy to update!
    const teamData = [
        { id: 1, name: "Mr. Ishmael Salifu", role: "Director", image: "/images/team/Mr. Ishmael Salifu.jpg" },
        { id: 2, name: "Frank Ohene Debrah", role: "Marketing Manager", image: "/images/team/Frank Ohene Debrah.jpg" },
        { id: 3, name: "Osmanu Ayishetu", role: "Sales Personnel", image: "/images/team/Osmanu Ayishetu.jpg" },
        { id: 4, name: "Felix Amoako-Debrah", role: "Sales Personnel", image: "/images/team/Felix Amoako-Debrah.jpg" },
        { id: 5, name: "Elvis Eyim Wireko", role: "Sales Personnel", image: "/images/team/Elvis Eyim Wireko.jpg" }
    ];

    return (
        <section className="team-section-4 section-padding fix">
            <div className="container">
                <div className="section-title mb-5 text-center">
                    <span className="wow fadeInUp">
                        <img src="/assets/img/sub-title.svg" alt="img" />
                        Our Team
                    </span>
                    <h2 className="text-anim">Meet Our Hardworking Team</h2>
                </div>

                {/* justify-content-center ensures the bottom row of 2 people is perfectly centered! */}
                <div className="row g-4 justify-content-center">

                    {teamData.map((member, index) => (
                        <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay={`0.${(index % 3) * 2 + 3}s`} key={member.id}>
                            <div className="team-box-items-4 mt-0 h-100">
                                <div className="team-image">
                                    {/* object-fit-cover ensures all images are perfectly uniform in height without stretching */}
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="w-100 object-fit-cover"
                                        style={{ height: "450px" }}
                                    />
                                </div>
                                <div className="team-content">
                                    <p className="text-uppercase" style={{ fontSize: "13px", letterSpacing: "1px" }}>{member.role}</p>
                                    <h3><Link href="#!">{member.name}</Link></h3>
                                    <div className="social-profile">
                                        <ul>
                                            <li><Link href="#!"><i className="fab fa-twitter"></i></Link></li>
                                            <li><Link href="#!"><i className="fab fa-facebook-f"></i></Link></li>
                                            <li><Link href="#!"><i className="fab fa-instagram"></i></Link></li>
                                            <li><Link href="#!"><i className="fab fa-linkedin-in"></i></Link></li>
                                        </ul>
                                        <span className="plus-btn"><i className="fas fa-share-alt"></i></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </section>
    );
}