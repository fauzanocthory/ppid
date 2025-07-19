"use client";

import Image from "next/image";
import React, { useState } from "react";
import Kementerian_Agama_new_logo from "../../public/assets/image/Kementerian_Agama_new_logo.png";
import Link from "next/link";
import { IoIosArrowDown, IoMdCash } from "react-icons/io";
import { FiMenu } from "react-icons/fi";
import { AiOutlineClose, AiTwotoneSchedule } from "react-icons/ai";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import {
  FaBookOpen,
  FaCrown,
  FaInfoCircle,
  FaMobileAlt,
  FaWpforms,
} from "react-icons/fa";
import { SiFuturelearn } from "react-icons/si";
import { HiBuildingOffice } from "react-icons/hi2";
import { PiTreeStructureDuotone } from "react-icons/pi";
import { FaFileWaveform } from "react-icons/fa6";
import { SlEnvolopeLetter } from "react-icons/sl";
import { FcRules } from "react-icons/fc";
import {
  MdHomeRepairService,
  MdMedicalInformation,
  MdOutlineTipsAndUpdates,
} from "react-icons/md";
import { IoReloadCircle } from "react-icons/io5";
import { TbChartInfographic } from "react-icons/tb";

type NavItem = {
  label: string;
  link?: string;
  children?: NavItem[];
  iconImage?: React.ReactNode;
};
const navItems: NavItem[] = [
  {
    label: "Beranda",
    link: "#",
  },
  {
    label: "Profil",
    link: "#",
    children: [
      {
        label: "Profil PPID",
        link: "#",
        iconImage: <FaBookOpen />,
      },
      {
        label: "Profil Pejabat",
        link: "#",
        iconImage: <FaCrown />,
      },
      {
        label: "Visi, Misi & Moto PPID",
        link: "#",
        iconImage: <SiFuturelearn />,
      },
      {
        label: "Tugas, Fungsi & Wewenang PPID",
        link: "#",
        iconImage: <HiBuildingOffice />,
      },
      {
        label: "Struktur Organisasi PPID",
        link: "#",
        iconImage: <PiTreeStructureDuotone />,
      },
    ],
  },
  {
    label: "Regulasi",
    link: "#",
  },
  {
    label: "Layanan Informasi",
    link: "#",
    children: [
      {
        label: "e-PPID Mobile",
        link: "#",
        iconImage: <FaMobileAlt />,
      },
      {
        label: "Tata Cara Permohonan Informasi",
        link: "#",
        iconImage: <FaFileWaveform />,
      },
      {
        label: "Tata Cara Pengajuan keberatan",
        link: "#",
        iconImage: <FaWpforms />,
      },
      {
        label: "Tata Cara Sengketa Informasi",
        link: "#",
        iconImage: <SlEnvolopeLetter />,
      },
      {
        label: "SOP Layanan Informasi Publik",
        link: "#",
        iconImage: <MdMedicalInformation />,
      },
    ],
  },
  {
    label: "Standar layanan",
    link: "#",
    children: [
      {
        label: "Maklumat Pelayanan",
        link: "#",
        iconImage: <MdHomeRepairService />,
      },
      {
        label: "Jadwal Pelayanan",
        link: "#",
        iconImage: <AiTwotoneSchedule />,
      },
      {
        label: "Biaya/Tarif Layanan",
        link: "#",
        iconImage: <IoMdCash />,
      },
    ],
  },
  {
    label: "Informasi Publik",
    link: "#",
    children: [
      {
        label: "Informasi Berkala",
        link: "#",
        iconImage: <IoReloadCircle />,
      },
      {
        label: "Informasi Serta Merta",
        link: "#",
        iconImage: <FaInfoCircle />,
      },
      {
        label: "Informasi Tersedia Setiap Saat",
        link: "#",
        iconImage: <MdOutlineTipsAndUpdates />,
      },
      {
        label: "Info Grafis",
        link: "#",
        iconImage: <TbChartInfographic />,
      },
    ],
  },
];
export default function Navbar() {
  const [animationParent] = useAutoAnimate();
  const [isSideMenuOpen, setSideMenuOpen] = useState(false);

  function openSideMenu() {
    setSideMenuOpen(true);
  }
  function closeSideMenu() {
    setSideMenuOpen(false);
  }

  return (
    <div className="mx-auto flex w-full max-w-7xl justify-between px-4 py-5 text-md">
      {/* Kiri */}
      <section>
        {/* Logo */}
        <Image
          src={Kementerian_Agama_new_logo}
          alt=" logo"
          width={250}
          height={250}
        />
      </section>
      <section ref={animationParent} className="flex items-center gap-10">
        {isSideMenuOpen && <MobileNav closeSideMenu={closeSideMenu} />}
        <div className="hidden md:flex items-center gap-4 transition-all">
          {navItems.map((item, i) => (
            <Link
              key={i}
              href={item.link ?? "#"}
              className="relative group px-2 py-3 transition-all"
            >
              <p className="flex cursor-pointer items-center gap-2 text-neutral-400 group-hover:text-black">
                <span>{item.label}</span>
                {item.children && (
                  <IoIosArrowDown className="rotate-180 transition-all group-hover:rotate-0" />
                )}
              </p>

              {/* dropdown */}
              {item.children && (
                <div className="absolute right-0 top-12 hidden w-auto flex-col gap-2 rounded-lg bg-white py-3 shadow-md transition-all group-hover:flex">
                  {item.children.map((itemChildren, i) => (
                    <Link
                      key={i}
                      href={itemChildren.link ?? "#"}
                      className="flex cursor-pointer items-center py-1 pl-6 pr-8 text-neutral-400 hover:text-black"
                    >
                      {/* items */}
                      <span className="whitespace-nowrap pl-3">
                        {itemChildren.iconImage}
                      </span>
                      <span className="whitespace-nowrap pl-3">
                        {itemChildren.label}
                      </span>
                    </Link>
                  ))}
                </div>
              )}
            </Link>
          ))}
        </div>
      </section>
      {/* Kanan */}

      <FiMenu
        onClick={openSideMenu}
        className="cursor-pointer text-4xl md:hidden"
      />
    </div>
  );
}

function MobileNav({ closeSideMenu }: { closeSideMenu: () => void }) {
  return (
    <div className="fixed left-0 top-0 flex h-full min-h-screen w-full justify-end bg-black/60 md:hidden">
      <div className="h-full w-[100%] bg-white px-4 py-4">
        <section className="flex justify-end">
          <AiOutlineClose
            onClick={closeSideMenu}
            className="cursor-pointer text-4xl"
          />
        </section>
        <div className="flex flex-col text-base gap-4 transition-all">
          {navItems.map((item, i) => (
            <SingleNavItem
              key={i}
              label={item.label}
              iconImage={item.iconImage}
              link={item.link}
            >
              {item.children}
            </SingleNavItem>
          ))}
        </div>
      </div>
    </div>
  );
}

function SingleNavItem(item: NavItem) {
  const [animationParent] = useAutoAnimate();
  const [isItemOpen, setItem] = useState(false);

  function toggleItem() {
    return setItem(!isItemOpen);
  }

  return (
    <Link
      ref={animationParent}
      onClick={toggleItem}
      href={item.link ?? "#"}
      className="relative px-2 py-3 transition-all"
    >
      <p className="flex cursor-pointer items-center gap-2 text-neutral-400 group-hover:text-black">
        <span>{item.label}</span>
        {item.children && (
          <IoIosArrowDown
            className={`text-xs transition-all ${isItemOpen && " rotate-180"}`}
          />
        )}
      </p>

      {/* dropdown */}
      {isItemOpen && item.children && (
        <div className="w-auto flex-col gap-1 rounded-lg bg-white py-3 transition-all flex">
          {item.children.map((itemChildren, i) => (
            <Link
              key={i}
              href={itemChildren.link ?? "#"}
              className="flex cursor-pointer items-center py-1 pl-6 pr-8 text-neutral-400 hover:text-black"
            >
              {/* items */}
              <span className="whitespace-nowrap pl-3">
                {itemChildren.iconImage}
              </span>
              <span className="whitespace-nowrap pl-3">
                {itemChildren.label}
              </span>
            </Link>
          ))}
        </div>
      )}
    </Link>
  );
}
