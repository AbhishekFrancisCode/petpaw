"use client";
import { AuthContext, AuthContextType } from "@/contexts/auth-context";
import { useRouter } from "next/navigation";
import React, { useContext } from "react";

const Profile = () => {
  const { logOut } = useContext(AuthContext) as AuthContextType;
  const router = useRouter();
  const handleSignOut = async () => {
    try {
      const result = await logOut();
      if (result.user) {
        router.push("/");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="p-0 align-middle place-content-center">
      <text>profile</text>
      <button
        onClick={handleSignOut}
        className="bg-[#EE9422] text-white py-2 rounded-lg hover:bg-blue-600"
      >
        Logout
      </button>
    </div>
  );
};

export default Profile;
