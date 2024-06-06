import React from 'react'

const Username = ({ params }) => {
  return (
    <>
      <div className="cover w-full relative">
        <img className='object-cover w-full' src="/galaxy-wallpaper.png" alt="galaxy-img" />
        <div className="absolute -bottom-20 right-[44.5%] border-white border-2 rounded-full">
          <img src="/study-pfp.jpg" alt="study-pfp" className='rounded-full' width={150} height={150} />
        </div>
      </div>
      <div className="info flex justify-center items-center my-24 mb-32 flex-col gap-2">
        <div className="font-bold text-lg">
          @{params.username}
        </div>
        <div className="text-slate-400">
          Creating websites for clients
        </div>
        <div className="text-slate-400">
          1256 members . 82posts . $456/ release
        </div>

        <div className="payment flex gap-3 w-[80%] mt-11">
          <div className="supporters w-1/2 bg-slate-950 rounded-lg text-white p-10">
            <h2 className='text-2xl font-bold my-5'>Supporters</h2>
            <ul className='mx-5 text-lg'>
              <li className='my-4 flex gap-2 items-center'>
                <img src="avatar.gif" width={33} alt="user avatar" />
                <span>Ann donated <span className='font-bold'>$30</span> with a message "Loads of ❤️"</span>
              </li>
              <li className='my-4 flex gap-2 items-center'>
                <img src="avatar.gif" width={33} alt="user avatar" />
                <span>Ann donated <span className='font-bold'>$30</span> with a message "Loads of ❤️"</span>
              </li>
              <li className='my-4 flex gap-2 items-center'>
                <img src="avatar.gif" width={33} alt="user avatar" />
                <span>Ann donated <span className='font-bold'>$30</span> with a message "Loads of ❤️"</span>
              </li>
              <li className='my-4 flex gap-2 items-center'>
                <img src="avatar.gif" width={33} alt="user avatar" />
                <span>Ann donated <span className='font-bold'>$30</span> with a message "Loads of ❤️"</span>
              </li>
              <li className='my-4 flex gap-2 items-center'>
                <img src="avatar.gif" width={33} alt="user avatar" />
                <span>Ann donated <span className='font-bold'>$30</span> with a message "Loads of ❤️"</span>
              </li>
            </ul>
          </div>

          <div className="makePayment w-1/2 bg-slate-950 rounded-lg text-white p-10">
            <h2 className='text-2xl font-bold my-5'>Make a Payment</h2>
            <div className="flex gap-2 flex-col">
              <input type='text' className='w-full p-3 rounded-lg bg-slate-800' placeholder='Enter Name'></input>
              <input type='text' className='w-full p-3 rounded-lg bg-slate-800' placeholder='Enter Message'></input>
              <input type='text' className='w-full p-3 rounded-lg bg-slate-800' placeholder='Enter Amount'></input>
              <button className='text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 w-full'>Pay</button>
            </div>
            <div className="flex gap-2 mt-5">
              <button className='bg-slate-800 p-3 rounded-lg'>Pay $10</button>
              <button className='bg-slate-800 p-3 rounded-lg'>Pay $20</button>
              <button className='bg-slate-800 p-3 rounded-lg'>Pay $30</button>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default Username
