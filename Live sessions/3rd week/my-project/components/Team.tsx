import React from "react";
import TeamMember from "./TeamMember";

export default function Team() {
  return (
    <div className="flex justify-around flex-wrap ">
     
      <TeamMember />
      <TeamMember />
      <TeamMember />

    </div>
  );
}
