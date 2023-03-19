import React from "react";

function Team() {
  return (
    <div className="container mx-auto px-4 mb-20 lg:mb-52">
      <h1 className="uppercase text-violet-500 mb-2">Team</h1>
      <p className="uppercase text-2xl lg:text-4xl text-zinc-800 mb-20 lg:mb-36 w-8/12">
        Work with the best specialists who have the functional experience,
        industry knowledge and technical expertise your project needs.
      </p>
      <div className="flex items-start justify-between flex-wrap lg:flex-nowrap">
        <div className="w-full lg:w-6/12 relative mb-10 lg:mb-0 lg:mr-10">
          <div
            className="bg-top bg-cover lg:absolute top-0 right-0 w-full"
            style={{
              height: "400px",
              backgroundImage: `url(${"https://images.unsplash.com/photo-1600275669177-176b3c586d22?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"})`,
            }}
          >
            <div className="h-full w-full bg-zinc-900 bg-opacity-50 p-4 flex flex-col justify-end text-white hover:pb-10 transition-all">
              <p className="text-2xl">Donnie Franklin</p>
              <p>Chair of the board</p>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-3/12 relative mb-10 lg:mb-0 lg:mr-10">
          <div
            className="bg-top bg-cover lg:absolute top-0 right-0 w-full"
            style={{
              height: "400px",
              backgroundImage: `url(${"https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80"})`,
            }}
          >
            <div className="h-full w-full bg-zinc-900 bg-opacity-50 p-4 flex flex-col justify-end text-white hover:pb-10 transition-all">
              <p className="text-2xl">Dallas Berry</p>
              <p>Vice chair </p>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-3/12 relative">
          <div
            className="bg-top bg-cover lg:absolute top-0 right-0 w-full"
            style={{
              height: "400px",
              backgroundImage: `url(${"https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"})`,
            }}
          >
            <div className="h-full w-full bg-zinc-900 bg-opacity-50 p-4 flex flex-col justify-end text-white hover:pb-10 transition-all">
              <p className="text-2xl">Stacy Mclaughlin</p>
              <p>Secretary </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;
