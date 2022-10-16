import { ReactNode } from "react";
import { IconType } from "react-icons/lib";
import { RiMessage3Line } from "react-icons/ri";
import { HiOutlineViewBoards } from "react-icons/hi";
import { SlPeople } from "react-icons/sl";
import { TbPuzzle } from "react-icons/tb";

type Props = {
  children: ReactNode;
};

interface SidebarListProps extends Props {
  title: string;
}

interface SidebarListItemProps extends Props {
  Symbol?: IconType;
}

const SidebarList: React.FC<SidebarListProps> = ({ title, children }) => (
  <>
    <h3 className="text-lg font-bold text-slate-700">{title}</h3>

    <ul className="list-inside gap-4">{children}</ul>
  </>
);

const SidebarListItem: React.FC<SidebarListItemProps> = ({
  children,
  Symbol = () => null,
}) => (
  <li className="ml-3 flex items-center py-2 text-slate-700">
    <Symbol size={18} className="mr-2" />
    {children}
  </li>
);

const Sidebar = () => (
  <div className="h-screen w-80 bg-[#ebf0ff] px-5 pt-4">
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
      <SidebarListItem>Faculty's Artt Show</SidebarListItem>
      <SidebarListItem>Mount Ijen's prep</SidebarListItem>
      <SidebarListItem>Study Tour 2022</SidebarListItem>
      <SidebarListItem>Science Group Project</SidebarListItem>
    </SidebarList>
  </div>
);

export default Sidebar;
