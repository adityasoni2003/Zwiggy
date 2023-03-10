const DetailShimmer = ()=>{
    return (
        <div className="flex flex-col gap-10 mx-10 animate-pulse">
        <h1 className="bg-gray-500 h-10 w-96 my-4 rounded-md mx-auto"></h1>
        <div className="bg-gray-500 h-40 w-96 rounded-lg mx-auto"></div>
        <h1 className="bg-gray-500 h-10 w-40 my-4 rounded-md "></h1>
        <h1 className="bg-gray-500 h-10 w-40 my-4 rounded-md "></h1>
        <div className=" flex flex-col gap-4 h-[500px] w-[500px] p-4  overflow-y-scroll border-gray-500 border-4 border-solid rounded-lg">
            <span className="flex justify-start h-24 w-full gap-10"> 
                <div className=" h-20 w-20  bg-gray-500 rounded-lg self-center"></div> 
                <h1 className=" h-10 w-96 bg-gray-500 rounded-lg self-center"></h1>
                </span>
                <span className="flex justify-start h-24 w-full gap-10"> 
                <div className=" h-20 w-20  bg-gray-500 rounded-lg self-center"></div> 
                <h1 className=" h-10 w-96 bg-gray-500 rounded-lg self-center"></h1>
                </span>
                <span className="flex justify-start h-24 w-full gap-10"> 
                <div className=" h-20 w-20  bg-gray-500 rounded-lg self-center"></div> 
                <h1 className=" h-10 w-96 bg-gray-500 rounded-lg self-center"></h1>
                </span>
                <span className="flex justify-start h-24 w-full gap-10"> 
                <div className=" h-20 w-20  bg-gray-500 rounded-lg self-center"></div> 
                <h1 className=" h-10 w-96 bg-gray-500 rounded-lg self-center"></h1>
                </span>
                <span className="flex justify-start h-24 w-full gap-10"> 
                <div className=" h-20 w-20  bg-gray-500 rounded-lg self-center"></div> 
                <h1 className=" h-10 w-96 bg-gray-500 rounded-lg self-center"></h1>
                </span>
                <span className="flex justify-start h-24 w-full gap-10"> 
                <div className=" h-20 w-20  bg-gray-500 rounded-lg self-center"></div> 
                <h1 className=" h-10 w-96 bg-gray-500 rounded-lg self-center"></h1>
                </span>
        </div>
        </div>

    )
}

export default DetailShimmer