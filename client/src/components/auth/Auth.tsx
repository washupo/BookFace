import { useState } from "react";
import { Typography } from "../../common/Typography";
import { LoginForm } from "./LoginForm";
import { SignUpForm } from "./SignUpForm";

export default function Auth() {
  const [activeTab, setActiveTab] = useState("login");

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <div className="w-full flex flex-col gap-30">
      <div className="w-full flex">
        <button
          className={`w-1/2 p-15 ${
            activeTab === "login"
              ? "bg-brownPrimary text-whitePrimary border-2 border-whitePrimary"
              : "bg-whitePrimary text-brownPrimary border-2 border-whitePrimary hover:bg-beigePrimary transition duration-300 ease-in-out"
          }`}
          onClick={() => handleTabChange("login")}
        >
          <Typography fontSize="15" component="h2" fontFamily="FKGroteskBold">
            Se connecter
          </Typography>
        </button>
        <button
          className={`w-1/2 p-15 ${
            activeTab === "signup"
              ? "bg-brownPrimary text-whitePrimary border-2 border-whitePrimary"
              : "bg-whitePrimary text-brownPrimary border-2 border-whitePrimary  hover:bg-beigePrimary transition duration-300 ease-in-out"
          }`}
          onClick={() => handleTabChange("signup")}
        >
          <Typography fontSize="15" component="h2" fontFamily="FKGroteskBold">
            S'inscrire
          </Typography>
        </button>
      </div>
      {activeTab === "login" ? <LoginForm /> : <SignUpForm />}
    </div>
  );
}
