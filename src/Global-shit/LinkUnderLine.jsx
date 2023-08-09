export default function LinkUnderLine() {
  return (
    <>
      <span className="absolute right-0 bottom-0 bg-black h-[1px] w-0 transition-all duration-700 "></span>
      <span className="delay-200 absolute right-0 -bottom-[3px] bg-black h-[1px] w-0 transition-all duration-700"></span>
    </>
  );
}
