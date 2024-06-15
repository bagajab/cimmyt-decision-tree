import ApplicationLogo from "@/Components/ApplicationLogo";
import Dropdown from "@/Components/Dropdown";
import NavLink from "@/Components/NavLink";
import ResponsiveNavLink from "@/Components/ResponsiveNavLink";
import LinkedInLogo from "@/Icons/LinkedInLogo";
import UserLogo from "@/Icons/UserLogo";
import { Link, Head } from "@inertiajs/react";
import { useState } from "react";

const entries = [
    {
        title: "TRAIT GENETIC SCOPING",
        subtitle: "Development of efficient, robust phenotyping methodology",
        description:
            "Valid across landraces and elite lines. The level of accuracy or precision is important. You need average accuracy/precision, but it doesn't normally need to be highly precise which is often slow and expensive. A compromise is needed; a breeding-relevant phenotyping protocol, allowing separation of alleles but not necessarily highly precise discrimination.",
    },
    {
        title: "GENETIC TRAIT MAPPING",
        subtitle: "Advancement in genetic trait mapping",
        description:
            "Essential across various species. The accuracy level must be balanced with cost and speed. Generally, high precision isn't required for initial mapping, though it's vital for detailed studies. Efficient methods prioritize relevance over extreme precision.",
    },
    {
        title: "PHENOTYPING EFFICIENCY",
        subtitle: "Streamlining phenotyping for genetic improvement",
        description:
            "Applicable to both wild and cultivated varieties. Precision should meet the standard for effective selection. High precision methods are often too slow and costly for large-scale implementation, necessitating a more balanced approach.",
    },
    {
        title: "SELECTION PROTOCOLS",
        subtitle: "Refinement of trait-based selection protocols",
        description:
            "Crucial for both hybrid and inbred lines. The need for accuracy should be weighed against operational efficiency. Typically, ultra-high precision is less critical than the overall effectiveness of the selection protocol.",
    },
    {
        title: "TRAIT IDENTIFICATION",
        subtitle: "Optimizing genetic trait identification processes",
        description:
            "Valid for various genetic backgrounds. While precision is important, the methods must also be scalable and cost-effective. The goal is a compromise that maximizes breeding relevance without excessive precision demands.",
    },
    {
        title: "PHENOTYPING ACCURACY",
        subtitle: "Enhancing phenotyping accuracy and efficiency",
        description:
            "Suitable across different crop types. A balanced precision approach is necessary to ensure both speed and cost-efficiency. Ultra-high precision is often impractical for large-scale operations.",
    },
    {
        title: "METHODOLOGY ROBUSTNESS",
        subtitle: "Improving robustness of phenotyping methodologies",
        description:
            "Applicable across multiple species and varieties. The accuracy requirement should align with practical breeding needs. Typically, a moderate level of precision is sufficient for most breeding programs.",
    },
    {
        title: "TRAIT EVALUATION",
        subtitle: "Advancing efficient trait evaluation techniques",
        description:
            "Essential for both commercial and experimental lines. The accuracy level should facilitate effective selection without imposing excessive costs. Compromise methods prioritize practical relevance over extreme precision.",
    },
    {
        title: "TRAIT DISCOVERY",
        subtitle: "Innovations in phenotyping for trait discovery",
        description:
            "Crucial for wide genetic diversity. Precision should support effective breeding decisions while maintaining efficiency. High precision is less critical than ensuring relevance to breeding goals.",
    },
    {
        title: "PHENOTYPING FRAMEWORKS",
        subtitle: "Developing robust phenotyping frameworks",
        description:
            "Valid for diverse genetic lines. Precision must be balanced with speed and cost considerations. Practical methods emphasize relevance to breeding over ultra-high precision.",
    },
];

const Questions = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % entries.length);
    };

    const handleBack = () => {
        setCurrentIndex(
            (prevIndex) => (prevIndex - 1 + entries.length) % entries.length
        );
    };

    const { title, subtitle, description } = entries[currentIndex];

    return (
        <div className="h-auto bg-cover bg-center bg-gray-200 m-4 p-4 rounded-lg shadow-lg">
            <div className="flex flex-col h-full justify-between">
                <div className="flex flex-col md:flex-row">
                    <div className="w-full md:w-1/4">
                        <h1 className="text-lg font-bold text-left text-[#283B45]">
                            {title}
                        </h1>
                    </div>
                    <div className="flex flex-col w-full md:w-3/4 mt-4 md:mt-0">
                        <h2 className="text-sm font-bold text-[#283B45]">
                            {subtitle}
                        </h2>
                        <p className="text-sm text-[#828282]">{description}</p>
                        <div className="flex justify-end mt-4">
                            <button
                                onClick={handleBack}
                                className="bg-green-500 text-white px-4 py-2 rounded mr-2"
                            >
                                Back
                            </button>
                            <button
                                onClick={handleNext}
                                className="bg-green-500 text-white px-4 py-2 rounded"
                            >
                                Next
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const TopBar = (props) => {
    return (
        <div className="w-full h-[33px] gap-[5px] border-b m-2">
            <div className="flex justify-between">
                <div className="font-arial text-[14px] font-normal leading-[20px] text-center text-[#6A707E]">
                    cimmyt-academy@cgiar.org | FAQ
                </div>
                <div className="flex space-x-2">
                    <div className="mt-1">
                        <LinkedInLogo />
                    </div>
                    <div>|</div>
                    <div className="mt-1">
                        <UserLogo />
                    </div>
                    <div className="mt-1 font-arial text-[12px] font-bold leading-[16px] tracking-extraTight text-center text-[#279A82]">
                        Login
                    </div>
                    <div>|</div>
                    <div className="mt-1 font-arial text-[12px] font-bold leading-[16px] tracking-extraTight text-center text-[#279A82]">
                        Register
                    </div>
                </div>
            </div>
        </div>
    );
};

const DecisionTreeBanner = () => {
    return (
        <div
            className="w-full h-[198px] bg-cover bg-center bg-gray-600"
            style={{ backgroundImage: "url('/banner-image.jpeg')" }}
        >
            <div className="w-full h-full bg-[#283B45] bg-opacity-90 flex justify-center items-center p-4 sm:p-6 md:p-8 lg:p-10">
                <h1 className="text-white text-[24px] sm:text-[28px] md:text-[32px] font-bold leading-[32px] sm:leading-[36px] md:leading-[40px] text-center">
                    Trait Discovery & Deployment Implementation Decision Tree
                </h1>
            </div>
        </div>
    );
};

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(false);

    const handleImageError = () => {
        document
            .getElementById("screenshot-container")
            ?.classList.add("!hidden");
        document.getElementById("docs-card")?.classList.add("!row-span-1");
        document
            .getElementById("docs-card-content")
            ?.classList.add("!flex-row");
        document.getElementById("background")?.classList.add("!hidden");
    };

    return (
        <div className="min-h-screen bg-gray-100">
            <Head title="Decision Tree"/>
            <nav className="bg-white border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className=" h-[138px] w-full">
                        <TopBar />
                        <div className="flex justify-between mt-4">
                            <div className="flex justify-between w-full">
                                <div className="shrink-0 flex items-center">
                                    <Link href="/">
                                        <ApplicationLogo className="block h-9 w-auto fill-current text-gray-800" />
                                    </Link>
                                </div>

                                <div className="flex space-x-2.4">
                                    <div className="hidden sm:-my-px sm:ms-10 sm:flex">
                                        <NavLink
                                            href={route("dashboard")}
                                            active={route().current(
                                                "dashboard"
                                            )}
                                        >
                                            Home
                                        </NavLink>
                                    </div>
                                    <div className="hidden sm:-my-px sm:ms-10 sm:flex">
                                        <NavLink
                                            href={route("dashboard")}
                                            active={route().current(
                                                "dashboard"
                                            )}
                                        >
                                            About Us
                                        </NavLink>
                                    </div>
                                    <div className="hidden sm:-my-px sm:ms-10 sm:flex">
                                        <NavLink
                                            href={route("dashboard")}
                                            active={route().current(
                                                "dashboard"
                                            )}
                                        >
                                            Students
                                        </NavLink>
                                    </div>
                                    <div className="hidden sm:-my-px sm:ms-10 sm:flex">
                                        <NavLink
                                            href={route("dashboard")}
                                            active={route().current(
                                                "dashboard"
                                            )}
                                        >
                                            Partners
                                        </NavLink>
                                    </div>
                                    <div className="hidden sm:-my-px sm:ms-10 sm:flex">
                                        <NavLink
                                            href={route("dashboard")}
                                            active={route().current(
                                                "dashboard"
                                            )}
                                        >
                                            Alumni
                                        </NavLink>
                                    </div>
                                    <div className="hidden sm:-my-px sm:ms-10 sm:flex">
                                        <NavLink
                                            href={route("dashboard")}
                                            active={route().current(
                                                "dashboard"
                                            )}
                                        >
                                            CDS
                                        </NavLink>
                                    </div>
                                    <div className="hidden sm:-my-px sm:ms-10 sm:flex">
                                        <NavLink
                                            href={route("dashboard")}
                                            active={route().current(
                                                "dashboard"
                                            )}
                                        >
                                            LMS
                                        </NavLink>
                                    </div>
                                    <div className="hidden sm:-my-px sm:ms-10 sm:flex">
                                        <NavLink
                                            href={route("dashboard")}
                                            active={route().current(
                                                "dashboard"
                                            )}
                                        >
                                            Achievements
                                        </NavLink>
                                        <div className="hidden sm:-my-px sm:ms-10 sm:flex">
                                            <NavLink
                                                href={route("dashboard")}
                                                active={route().current(
                                                    "dashboard"
                                                )}
                                            >
                                                Contact
                                            </NavLink>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="-me-2 flex items-center sm:hidden">
                                <button
                                    onClick={() =>
                                        setShowingNavigationDropdown(
                                            (previousState) => !previousState
                                        )
                                    }
                                    className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                                >
                                    <svg
                                        className="h-6 w-6"
                                        stroke="currentColor"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            className={
                                                !showingNavigationDropdown
                                                    ? "inline-flex"
                                                    : "hidden"
                                            }
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                        <path
                                            className={
                                                showingNavigationDropdown
                                                    ? "inline-flex"
                                                    : "hidden"
                                            }
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div
                    className={
                        (showingNavigationDropdown ? "block" : "hidden") +
                        " sm:hidden"
                    }
                >
                    <div className="pt-2 pb-3 space-y-1">
                        <ResponsiveNavLink
                            href={route("dashboard")}
                            active={route().current("dashboard")}
                        >
                            Home
                        </ResponsiveNavLink>
                        <ResponsiveNavLink
                            href={route("dashboard")}
                            active={route().current("dashboard")}
                        >
                            About Us
                        </ResponsiveNavLink>
                        <ResponsiveNavLink
                            href={route("dashboard")}
                            active={route().current("dashboard")}
                        >
                            Students
                        </ResponsiveNavLink>
                        <ResponsiveNavLink
                            href={route("dashboard")}
                            active={route().current("dashboard")}
                        >
                            Partners
                        </ResponsiveNavLink>
                        <ResponsiveNavLink
                            href={route("dashboard")}
                            active={route().current("dashboard")}
                        >
                            Alumni
                        </ResponsiveNavLink>
                        <ResponsiveNavLink
                            href={route("dashboard")}
                            active={route().current("dashboard")}
                        >
                            CSD
                        </ResponsiveNavLink>
                        <ResponsiveNavLink
                            href={route("dashboard")}
                            active={route().current("dashboard")}
                        >
                            LMS
                        </ResponsiveNavLink>
                        <ResponsiveNavLink
                            href={route("dashboard")}
                            active={route().current("dashboard")}
                        >
                            Achievements
                        </ResponsiveNavLink>
                        <ResponsiveNavLink
                            href={route("dashboard")}
                            active={route().current("dashboard")}
                        >
                            Contact
                        </ResponsiveNavLink>
                    </div>
                </div>
            </nav>
            <main>
                <DecisionTreeBanner />
            </main>
            <div className="mx-4 sm:mx-10 md:mx-20 lg:mx-40 xl:mx-56 my-5">
                <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-[32px] font-bold leading-tight md:leading-snug lg:leading-[40px] text-center text-[#283B45]">
                    Trait Discovery and Deployment Implementation Decision Tree
                </h1>
                <Questions />
            </div>
        </div>
    );
}
