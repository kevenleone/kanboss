import { ReactNode } from "react";
import { IconType } from "react-icons/lib";
import { RiMessage3Line } from "react-icons/ri";
import { HiOutlineViewBoards } from "react-icons/hi";
import { SlPeople } from "react-icons/sl";
import { TbPuzzle } from "react-icons/tb";
import Image from "next/image";

type Props = {
  children: ReactNode;
};

interface SidebarListProps extends Props {
  title: string;
}

interface SidebarListItemProps extends Props {
  Symbol?: IconType;
}

interface IndicatorProps {
  color: string;
}

const Indicator: React.FC<IndicatorProps> = ({ color }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="12" cy="12" r="4" fill={color} />
  </svg>
);

const SidebarList: React.FC<SidebarListProps> = ({ title, children }) => (
  <>
    <h3 className="text-lg font-semibold text-[#5A5B80]">{title}</h3>

    <ul className="list-inside gap-4">{children}</ul>
  </>
);

const SidebarListItem: React.FC<SidebarListItemProps> = ({
  children,
  Symbol = () => null,
}) => (
  <li className="ml-3 flex items-center py-2 font-medium text-[#5A5B80]">
    <Symbol size={18} className="mr-2" />
    {children}
  </li>
);

const Sidebar = () => (
  <div className="h-screen w-80 bg-[#ebf0ff] p-6">
    <div className="mb-4 flex">
      <Image alt="Logo" src="/assets/Logo.svg" height={24} width={24}></Image>
      <h2 className="ml-2 font-[Urbanist] text-2xl font-bold text-[#0D0F43]">
        Kanboss
      </h2>
    </div>

    <SidebarList title="Project">
      <SidebarListItem>Class of 2022</SidebarListItem>
    </SidebarList>

    <SidebarList title="Home">
      <SidebarListItem Symbol={HiOutlineViewBoards}>Boards</SidebarListItem>
      <SidebarListItem Symbol={RiMessage3Line}>Messages</SidebarListItem>
      <SidebarListItem Symbol={SlPeople}>People</SidebarListItem>
      <SidebarListItem Symbol={TbPuzzle}>My Cards</SidebarListItem>
    </SidebarList>

    <SidebarList title="My boards">
      <SidebarListItem>
        <Indicator color="#0047FF" />
        Faculty.s Artt Show
      </SidebarListItem>
      <SidebarListItem>
        <Indicator color="#2DCD5B" />
        Mount Ijen.s prep
      </SidebarListItem>
      <SidebarListItem>
        <Indicator color="#B92CEB" />
        Study Tour 2022
      </SidebarListItem>
      <SidebarListItem>
        <Indicator color="#6AD0E2" />
        Science Group Project
      </SidebarListItem>
    </SidebarList>
  </div>
);

export default Sidebar;
