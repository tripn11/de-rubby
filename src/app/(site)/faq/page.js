

const Faq = () => {
    return (
        <div id="faq">
            <div className="banner"><h1>FAQs</h1></div>
            <img src="/images/faq.jpg"/>
            <section>
                <h2>Need To Ask Some Questions?</h2>

                <div >
                    <h3 aria-expanded="false"><span>Does De Rubby follow a specific curriculum? </span><button>+</button></h3>
                    <p>
                        Yes, we combine the Nigerian and British Curriculum, designed to suit the developmental and academic needs of each age group.
                    </p>
                </div>
                <div>
                    <h3 aria-expanded="false"><span>What are the school hours? </span><button>+</button></h3>
                    <p>
                        Our Nursery and Primary classes typically run from 8:00 a.m. to 2:30 p.m., with early drop-off and after-school care available.
                    </p>
                </div>

                <div>
                    <h3 aria-expanded="false"><span>How does the school support children with special learning needs? </span><button>+</button></h3>
                    <p>
                        We provide extra attention, individualized learning plans, and teacher support to ensure every child learns at their own pace.
                    </p>
                </div>

                <div>
                    <h3 aria-expanded="false"><span>What is the student-to-teacher ratio in the Nursery? </span><button>+</button></h3>
                    <p>
                        We keep our Nursery classes small, ensuring a low student-to-teacher ratio so every child receives proper care and attention.
                    </p>
                </div>

                <div>
                    <h3 aria-expanded="false"><span>What types of activities are included in the Nursery program? </span><button>+</button></h3>
                    <p>
                        Our Nursery program includes creative play, music, art, storytelling, outdoor play, and early literacy & numeracy skills to encourage holistic development.
                    </p>
                </div>

                <div>
                    <h3 aria-expanded="false"><span>Are there extracurricular activities available for Primary students? </span><button>+</button></h3>
                    <p>
                        Yes, Primary students can take part in sports, arts & crafts, music, drama, robotics, and cultural activities to build skills beyond academics.
                    </p>
                </div>

                <div>
                    <h3 aria-expanded="false"><span>What is the procedure for applying to the school? </span><button>+</button></h3>
                    <p>
                        Parents can fill out an admission form online or on-site, after which an assessment and interview are scheduled before enrollment.
                    </p>
                </div>
            </section>
        </div>
    )
}

export default Faq;