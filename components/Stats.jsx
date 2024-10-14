"use client";

import CountUp from "react-countup";

const stats = [
    {
        num: 12,
        text: "Years of Experience"
    },
    {
        num: 26,
        text: "Projects Completed"
    },
    {
        num: 8,
        text: "Technologies Mastered"
    },
    {
        num: 500,
        text: "Code Commits"
    },
];

const Stats = () => {
    return (
        <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
            <div className="container mx-auto">
                <div className="flex flex-col gap-6 max-w-[80vw] mx-auto xl:max-w-none xl:flex-row">
                    {stats.map((item, index) => {
                        return (
                            <div
                                className="flex items-center justify-center flex-1 gap-4 xl:justify-start"
                                key={index}
                            >
                                <CountUp
                                    end={item.num}
                                    duration={5}
                                    delay={2}
                                    className="text-4xl xl:text-6xl first-line:font-extrabold"
                                />
                                <p className={`${item.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"
                                    } leading-snug text-white/80 `}>{item.text}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Stats;
