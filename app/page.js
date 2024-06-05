import Image from "next/image";

export default function Home() {
  return (
    <>
    <div className="flex justify-center flex-col items-center text-white h-[44vh] gap-4">
      <div className="font-bold text-5xl flex gap-2 justify-center items-center">Buy Me Motive<span><img src="/pig.gif" width={60} /></span></div>
      <p>A crowdfunding platform for creators. Get funded by your fans and followers. Start now!</p>
      <div>
      <button type="button" class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Start Now</button>
      <button type="button" class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Read More</button>
      </div>
    </div>
    <div className="bg-white h-1 opacity-10"></div>

    <div className="text-white container mx-auto pb-32 pt-14">
      <h2 className="text-3xl font-bold text-center mb-8">Your Fans Can Buy You a Motive</h2>
      <div className="flex gap-5 justify-around">
        <div className="item space-y-3 flex flex-col items-center justify-center">
          <img className="bg-white rounded-full p-2 text-black" width={88} src="/wings.gif" alt="wings" />
          <p className="font-bold">Get The Wings to Fly Higher</p>
          <p className="text-center">Soar high with the support from you fans.</p>
        </div>

        <div className="item space-y-3 flex flex-col items-center justify-center">
          <img className="bg-white rounded-full p-2 text-black" width={88} src="/coin.gif" alt="wings" />
          <p className="font-bold">Make Money By Helping Others</p>
          <p className="text-center">Be financially motivated to contribute better.</p>
        </div>

        <div className="item space-y-3 flex flex-col items-center justify-center">
          <img className="bg-white rounded-full p-2 text-black" width={88} src="/people.gif" alt="wings" />
          <p className="font-bold">Your Fans Are Here To Support</p>
          <p className="text-center">Be motivated by a constant support system.</p>
        </div>
      </div>
    </div>

    <div className="bg-white h-1 opacity-10"></div>

    <div className="text-white container mx-auto pb-32 pt-14 flex flex-col items-center justify-center">
      <h2 className="text-3xl font-bold text-center mb-8">Learn More About Us</h2>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/5ymHDDUWzRY?si=vQ87sBRPhUBVsIyL" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>
    </>
  );
}
