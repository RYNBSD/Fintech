import { FiRepeat } from "react-icons/fi";

export default function Consulting() {
    return (
        <section className="section bg-white py-10">
            <div className="container flex flex-col gap-10 px-36">
                <div className="flex flex-col gap-5 justify-center items-center">
                    <h1 className="text-5xl font-[600] text-gradient capitalize text-center">
                        consulting for startups in fintech
                    </h1>
                    <p className="text-[var(--dark-purple)] text-xl font-[500] text-center">
                        Our Team consists of proven experts from finance, tech
                        and science. This mix makes it possible for our team to
                        deliver the best results to all our clients.
                    </p>
                </div>
                <div className="bg-[var(--dark-purple)] flex flex-col gap-5 mb-20 p-5 rounded-2xl relative z-10 shadow-2xl shadow-indigo-600">
                    <div className="flex justify-between items-start">
                        <div>
                            <small className="text-[#fff] text-sm font-[500]">
                                Growth report
                            </small>
                            <h3 className="text-[#fff] text-[22px] font-bold capitalize">
                                annual growth of our customers
                            </h3>
                            <h2 className="text-[#fff] text-2xl font-bold">
                                1,000% in Value
                            </h2>
                            <big className="text-[#b8c0cc] text-base font-normal">
                                Success rate
                            </big>
                        </div>
                        <div className="center bg-[#243b53] rounded-lg p-2">
                            <FiRepeat color="#fff" />
                        </div>
                    </div>
                    <img
                        className="w-full h-full object-contain"
                        src="/asset/graph-line.png"
                        alt="graph-line"
                    />
                </div>
            </div>
        </section>
    );
}
