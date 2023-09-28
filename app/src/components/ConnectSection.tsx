import React from "react";
import CallToAction from "./CallToAction";
import MetaMaskIcon from "../assets/MetaMaskIcon";

const ConnectSection = () => {
  return (
    <CallToAction
      icon={<MetaMaskIcon />}
      content={{
        title: "Connect with Metamask",
        description: "You need to be connected to metamask.",
        button: "Connect",
      }}
    />
  );
};

export default ConnectSection;
