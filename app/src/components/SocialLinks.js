import React from "react";
import { Icons } from "./common";

const SocialLinks = () => {
    
  const { SocialIcons } = Icons;
  const socialLinks = [
    {
      href: "https://www.facebook.com/",
      title: "Facebook",
      Icon: "FacebookIcon",
    },
    {
      href: "https://www.twitter.com/",
      title: "Twitter",
      Icon: "TwitterIcon",
    },
    {
      href: "https://www.instagram.com/",
      title: "Instagram",
      Icon: "InstagramIcon",
    },
    {
      href: "https://www.whatsapp.com/",
      title: "WhatsApp",  
      Icon: "WhatsAppIcon",
    },
  ];
  
  socialLinks.map(links => links.Icon = SocialIcons[links.Icon])
  
  return (
    <ol className="list-reset flex flex-wrap md:flex-no-wrap">
      {
        socialLinks.map(link => {
          const {href, title, Icon} = link;
          return (
            <li key={title}>
              <a
                className="inline-block no-underline hover:text-blue-400 hover:underline py-1"
                href={href}
                title={title}
              >
                <Icon className="w-10 h-12 md:w-8 md:h-10 group-focus:text-blue-400 group-hover:text-blue-400 mx-2" />
              </a>
            </li>

          );
        })
      }
    </ol>
  )
}

export default SocialLinks;