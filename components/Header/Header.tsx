import Timer from "../Timer";

const Header = () => {
  return (
    <header className={'bg-green-dark w-full '}>
      <p className="text-white text-[14px] 320:text-[18px] 375:text-[24px]">Успейте открыть пробную неделю</p>
      <Timer />
    </header>
  );
}

export default Header;
