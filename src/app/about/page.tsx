import React from "react";

import './page.css';
import SectionHeader from "@/components/sectionheader";
import AboutHero from "@/components/ui/about-hero";
import { AboutCount } from "@/components/ui/aboout-counts";

const AboutPage = () => {
    return (
        <div className="about-hero-container">

            <SectionHeader
                overline=""
                title="We Create Solution for Your Business"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            />
            {/* You can add more sections or components below */}
            <div>
                <AboutHero />
                {/* Add more sections as needed */}
            </div>

            <SectionHeader
                overline=""
                title="Our Global Success"
                description=""
            />

            <div>
                <AboutCount />
                {/* Add more sections as needed */}
            </div>

            <SectionHeader
                overline=""
                title="Meet Our Team"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            />
        </div>
    );
};

export default AboutPage;
