import React from "react";

export default function TeamMember() {
  return (
    <div className=" flex m-12">
      
      <img
        src="http://via.placeholder.com/150"
        alt="Team Member"
        className="rounded-full"
      />
      <div className="ml-6">
          <p className="text-2xl">Full Name</p>
          <p className="text-lg">Title</p>
      </div>
    </div>
  );
}
