import React from 'react'

const users = async () => {
  await new Promise((resolve => setTimeout(() => resolve("loading..."), 1000)))
 throw new Error("THEre is the ERROR in this page ")

  return (
    <div className="w-1/2 border flex justify-center items-center min-h-screen">users</div>
  );
}

export default users