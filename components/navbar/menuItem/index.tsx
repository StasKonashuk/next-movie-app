import { useRouter } from "next/router";
import { ReactNode } from "react";

interface MenuItem {
  icon: ReactNode;
  value: string;
  link: string;
}

const MenuItem = ({ icon, value, link }: MenuItem) => {
  const router = useRouter();
  const onClickHandler = () => {
    router.push(link);
  };
  return (
    <div
      onClick={onClickHandler}
      className="flex flex-row p-3 text-main-text-color items-center mb-1 hover:bg-menu-item-hover-bg-color cursor-pointer rounded-md"
    >
      <div className="mr-4">{icon}</div>
      <div>{value}</div>
    </div>
  );
};

export default MenuItem;
