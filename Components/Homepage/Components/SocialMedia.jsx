import React from "react";

const socialMedia = [
  { title: "Linkedin", link: "https://www.linkedin.com/company/launchy-me/" },
  { title: "Instagram", link: "https://www.instagram.com/launchy.me/" },
  { title: "Tik Tok", link: "https://vm.tiktok.com/ZML6wfb3A/" },
];

function SocialMedia() {
  return (
    <div className="w-full flex justify-evenly">
      {socialMedia.map((li) => (
        <a
          href={li.link}
          target="_blank"
          key={li.title}
          rel="noopener noreferrer"
        >
          <div>
            <p className="text-white uppercase text-sm">{li.title}</p>
          </div>
        </a>
      ))}
    </div>
  );
}

export default SocialMedia;
