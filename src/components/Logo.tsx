import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";

const Logo: React.FC<{
    icon: string;
    color?: string;
    height?: string;
    width?: string;
  }> = ({ icon, color='#090A0A', height='24px', width='24px' }) => {
    return <Icon icon={icon} height={height} width={width} color={color} />;
  };

export default Logo;
