import React from "react";

export const Header = () => {
    return (
        <div className="flex flex-col md:flex-row w-full h-auto md:h-[155px]">
            <div className="w-full md:w-1/3 bg-[#487629] flex items-center justify-center md:justify-end">
                <img
                    src="/cgiar-logo.png"
                    alt="CGIAR Logo"
                    className="p-2.5"
                    style={{ width: '50%', maxWidth: '120px' }} // Adjust logo size for responsiveness
                />
            </div>
            <div className="w-full md:w-2/3 flex items-center justify-center bg-white p-4">
                <div className="text-xl md:text-3xl lg:text-4xl text-[#487629] flex items-center justify-center">
                    <span
                        className="text-center font-bold leading-tight md:leading-[50px]"
                        style={{ fontFamily: "Arial" }}
                    >
                        Trait Discovery & Deployment Implementation Decision Tree
                    </span>
                </div>
            </div>
        </div>
    );
};

export const DecisionTreeBanner = () => {
    return (
        <div className="w-full">
            <img
                src="/banner-image.jpeg"
                className="w-full h-[100px] sm:h-[150px] md:h-[200px] lg:h-[250px] object-cover"
                alt="Banner"
            />
        </div>
    );
};