import Circle from "./global/Circle";

const brands = [
    "/asset/logoipsum.png",
    "/asset/ipsum.png",
    "/asset/ogo.png",
    "/asset/ipsum.png",
];

export default function Hero() {
    return (
        <header className="section relative z-[1] bg-[var(--dark-purple)] p-20">
            <Circle width={881} height={881} top="100%" left={0} />
            <Circle width={509} height={509} top={0} left="100%" />
            <div className="container grid grid-cols-2 gap-x-10">
                <div className="flex flex-col justify-around items-start">
                    <h1 className="text-8xl font-[600] text-[#fff]">
                        <span className="text-gradient">Scale Fintech</span>
                        <br />
                        Safe And Secure
                    </h1>
                    <p className="text-[#fff] text-[22px] font-[500]">
                        Ship your fintech products to your customers with fast
                        and reliable processes. Secure and highly customizable.
                        Rise Finance is the best partner for you if you want to
                        scale your finance products worldwide.
                    </p>
                    <button
                        className="text-lg font-[600] uppercase border-gradient bg-transparent px-16 py-7 text-white"
                        type="button"
                    >
                        consultation
                    </button>
                </div>
                <div>
                    <img
                        className="w-full h-full object-contain"
                        src="/asset/credit-card.png"
                        alt="credit card"
                    />
                </div>
            </div>
            <div className="w-full flex justify-around items-center py-5">
                {brands.map((brand, i) => (
                    <img key={i} src={brand} alt="brand" />
                ))}
            </div>
        </header>
    );
}
