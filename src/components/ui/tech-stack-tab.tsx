import React from "react";
import { techIcons } from "../../data/techIcons";
import { TechIconsRow } from "./TechIconsRow";

const TechStack = () => {
    const styles = {
        container: {
            textAlign: "center",
            padding: "1rem",
            backgroundColor: "#111",
            color: "white",
        },
        heading: {
            fontSize: "2.5rem",
            marginBottom: "0.5rem",
        },
        subHeading: {
            fontSize: "1.0rem",
            color: "#629DC7",
            marginBottom: "1rem",
        },
        paragraph: {
            maxWidth: "550px",
            margin: "0 auto",
            fontWeight: "light",
            marginBottom: "2rem",
            fontSize: "0.8rem",
        },
    } as const;

    // Get all non-empty icons for mobile view
    const allIcons = techIcons.filter(icon => icon.alt !== "");

    // Split icons into rows with proper spacing for desktop
    const rows = [
        techIcons.slice(0, 10),                    // Top empty row
        techIcons.slice(14, 23),                   // First row: 2 empty + 10 icons + 1 empty
        techIcons.slice(26, 37),                   // Second row: 3 empty + 9 icons + 1 empty
        techIcons.slice(40, 50),                   // Third row: 4 empty + 8 icons + 1 empty
        techIcons.slice(52, 63),                   // Bottom empty row
    ];

    return (
        <div style={styles.container}>
            <h2 style={styles.subHeading}>Tech Stack</h2>
            <h3 style={styles.heading}>
                Powering Innovation<br />with the Best Tools
            </h3>
            <p style={styles.paragraph}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat.
            </p>

            {/* Desktop view */}
            <div className="hidden md:block space-y-4">
                {rows.map((rowIcons, index) => (
                    <TechIconsRow key={index} icons={rowIcons} />
                ))}
            </div>

            {/* Mobile view */}
            <div className="md:hidden">
                <TechIconsRow icons={allIcons} />
            </div>
        </div>
    );
};

export default TechStack;
