import React from "react"

function LeaderBoard (props) {
    return (
        <>
            <div className="flex flex-col justify-center items-center h-2/3 w-2/3 rounded-4xl">
                <div className="mt-24 sm:mt-0">
                    <h1 className="text-2xl text-center -mt-8">Leaderboard</h1>
                    <h2 className="text-xl text-center mt-2">( Kategori - Difficulty )</h2>
                </div>
                <div className="flex bg-blue-400 mt-8 w-80 sm:w-2/3 justify-between py-4 px-5 rounded-lg text-white">
                    <div className="flex flex-row">
                    <h2 className="pr-3">#1</h2>
                    <h2>Alim Makruf Tri Rachmadi</h2>
                    </div>
                    <h2>score</h2>
                </div>
                <div className="flex bg-blue-400 mt-5 w-80 sm:w-2/3 justify-between py-4 px-5 rounded-lg text-white">
                    <div className="flex flex-row">
                    <h2 className="pr-3">#2</h2>
                    <h2>Alim Makruf Tri Rachmadi</h2>
                    </div>
                    <h2>score</h2>
                </div>
                <div className="flex bg-blue-400 mt-5 w-80 sm:w-2/3 justify-between py-4 px-5 rounded-lg text-white">
                    <div className="flex flex-row">
                    <h2 className="pr-3">#3</h2>
                    <h2>Alim Makruf Tri Rachmadi</h2>
                    </div>
                    <h2>score</h2>
                </div>
            </div> 
        </> 
    )
}

export default LeaderBoard