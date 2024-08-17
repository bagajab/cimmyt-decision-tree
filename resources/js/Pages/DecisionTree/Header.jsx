import React from "react";

const Header = () => {
    return (
        <div className="flex w-full h-[155px]">
            <div className="w-1/3 bg-[#487629] flex items-center justify-end">
                <img
                    src="/cgiar-logo.png"
                    alt="CGIAR Logo"
                    className="text-white p-2.5"
                    width={"20%"}
                />
            </div>
            <div className="w-2/3 flex items-center justify-center bg-white">
                <div className=" w-[700px] text-4xl text-[#487629] flex items-center justify-center opacity-100">
                    <span
                        className="text-center font-bold text-[32px] leading-[50px]"
                        style={{ fontFamily: "Arial" }}
                    >
                        Trait Discovery & Deployment Implementation Decision
                        Tree
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
                className="w-full h-[150px] object-cover"
                alt="Banner"
            />
        </div>
    );
};

export default Header;
