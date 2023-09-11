
const WelcomeSection = () => {
  return (
    <div className="flex justify-center h-full bg-slate-800">
      <div className="text-center my-10 px-4 md:px-8 lg:px-16 xl:px-32">
        <h1 className="text-4xl md:text-6xl font-semibold text-red-800">Welcome to My Valorant Wiki</h1>
        <p className="text-lg md:text-2xl py-3 font-medium text-red-800"> Mock Valorant Wiki, developed by Yarkın Ata</p>
        <p className="text-sm md:text-lg py-4 text-slate-100">
          The VALORANT encyclopedia that anyone can edit! <br />
          The definitive wiki resource for Riot Games' competitive 5v5 character-based tactical shooter, VALORANT, that was released on June 2nd, 2020. <br />
          Set in a near-future Earth, you team up with 4 other players against 5 enemies in round-based combat with an agent of your choice.<br />
          Creativity is your greatest weapon.<br />
          This wiki currently has 543 articles and 15,858 files. Please read our site rules before making any edits, as well as keeping to our editing and update guidelines.
        </p>
      </div>
    </div>
  );
};

export default WelcomeSection;
