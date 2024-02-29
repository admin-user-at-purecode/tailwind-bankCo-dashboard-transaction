import TeamChat from "../../component/teamChat";
import Wallet from "../../component/wallet";

function Transaction() {
  return (
    <main className="w-full xl:px-12 px-6 pb-6 xl:pb-12 sm:pt-[156px] pt-[100px]">
      <div className="2xl:flex 2xl:space-x-[48px]">
        <section className="2xl:w-70 w-full 2xl:mb-0 mb-6"></section>
        <section className="2xl:flex-1 w-full">
          <Wallet />
          <div className="my-5">
            <TeamChat />
          </div>
        </section>
      </div>
    </main>
  );
}

export default Transaction;
