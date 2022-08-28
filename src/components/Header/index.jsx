import imgLogo from '../../assets/logo.svg';

export function Header() {
  return (
    <div className="border-2 rounded-lg p-4 flex justify-between items-center">
      <div>
        <img src={imgLogo} alt="Logo" />
      </div>
      <div className="bg-white text-black grid text-center font-barlowExtraBold p-3 rounded-lg h-full w-28">
        <p className="text-base">SCORE</p>
        <p className="text-5xl">12</p>
      </div>
    </div>
  );
}