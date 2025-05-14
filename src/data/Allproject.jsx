import pandora from "../assets/images/pandora.png";
import strix from "../assets/images/strix.png";
import sweetpaw from "../assets/images/sweetpaw.png";
import freelance from "../assets/images/Freelance.png";
import ltd from "../assets/images/Love to dream.png";
import library from "../assets/images/library.png";
import ndd from "../assets/images/ndd.png";
import mamas from "../assets/images/mamas.png";
import wonderhome from "../assets/images/wonderhome.png";
import Bsi from "../assets/images/Bullseye.png";
import tlous from "../assets/images/Last of us 2.png";

const websites = (category, date, title, image, links) => {
  return { category, date, title, image, links, comments: "No Comments" };
};

export const posts = [
  websites(
    "WEB",
    "May 5, 2024",
    "Pandora",
    pandora,
    "https://padoras-s-treasure.vercel.app/"
  ),
  websites(
    "WEB",
    "jul 8, 2024",
    "Freelance site",
    freelance,
    "https://projecthub-realtimechat.web.app/"
  ),
  websites(
    "WEB",
    "Aug 12, 2023",
    "Pandora",
    sweetpaw,
    "https://sweetpaw.netlify.app/"
  ),
  websites(
    "WEB",
    "May 5, 2025",
    "The Last of Us",
    tlous,
    "https://the-last-of-us-5n1j.vercel.app/"
  ),
  websites(
    "WEB",
    "Dec 23, 2023",
    "Movie Strix",
    strix,
    "https://strix-virid.vercel.app/"
  ),
  websites("WEB", "Dec 12, 2024", "Online-Library", library),

  websites(
    "WEB",
    "jul 10, 2022",
    "Ndd Tech",
    ndd,
    "https://nddtech.netlify.app/"
  ),
  websites(
    "WORDPRESS",
    "Aug 22, 2024",
    "Love To Dream",
    ltd,
    "https://lovetodream.ph/"
  ),
  websites(
    "WORDPRESS",
    "Aug 22, 2024",
    "Mamas & Papas",
    mamas,
    "https://mamasandpapas.ph/"
  ),
  websites(
    "WORDPRESS",
    "Aug 22, 2024",
    "Wonderhome Naturals",
    wonderhome,
    "https://wonderhomenaturals.com/"
  ),
  websites(
    "WORDPRESS",
    "Aug 22, 2024",
    "Bullseye Solutions Inc.",
    Bsi,
    "https://bullseyeph.com/"
  ),
  /* 
  websites(
    "WEB",
    "May 5, 2024",
    "Pandora",
    pandora,
    "https://padoras-s-treasure.vercel.app/"
  ),

  websites(
    "WEB",
    "May 5, 2024",
    "Pandora",
    pandora,
    "https://padoras-s-treasure.vercel.app/"
  ),
  websites(
    "WEB",
    "May 5, 2024",
    "Pandora",
    pandora,
    "https://padoras-s-treasure.vercel.app/"
  ),
  websites(
    "WEB",
    "May 5, 2024",
    "Pandora",
    pandora,
    "https://padoras-s-treasure.vercel.app/"
  ),
  websites(
    "WEB",
    "May 5, 2024",
    "Pandora",
    pandora,
    "https://padoras-s-treasure.vercel.app/"
  ),
  websites(
    "WEB",
    "May 5, 2024",
    "Pandora",
    pandora,
    "https://padoras-s-treasure.vercel.app/"
  ),
  websites(
    "WEB",
    "May 5, 2024",
    "Pandora",
    pandora,
    "https://padoras-s-treasure.vercel.app/"
  ),
  websites(
    "WEB",
    "May 5, 2024",
    "Pandora",
    pandora,
    "https://padoras-s-treasure.vercel.app/"
  ),
  websites(
    "WEB",
    "May 5, 2024",
    "Pandora",
    pandora,
    "https://padoras-s-treasure.vercel.app/"
  ), */
];
