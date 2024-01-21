export default function Circle({ width = 0, height = 0, top = 0, left = 0 }) {
    return (
        <div
            style={{ width, height, top, left }}
            className=" circle-gradient absolute z-0 rounded-full blur-[150px] -translate-x-1/2 -translate-y-1/2"
        />
    );
}
