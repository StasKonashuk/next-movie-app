import { CustomButton } from "@/components/button";
import { useRouter } from "next/router";
import { ReactNode } from "react";
import { signOut } from "next-auth/react";
import useComponentVisible from "@/hooks/useComponentVisible";

interface ProfileItem {
  id: number;
  value: string;
  link: string;
}

interface ProfileItemsProps {
  items: ProfileItem[];
  isVisible: boolean;
}

const ProfileItems = ({ items, isVisible }: ProfileItemsProps) => {
  const router = useRouter();

  const profileItem = items.map((i) => {
    const onClickHandler = () => {
      router.push(i.link);
    };
    return (
      <div
        key={i.id}
        onClick={onClickHandler}
        className="flex w-full flex-row p-3 text-main-text-color items-center mb-1 hover:bg-menu-item-hover-bg-color cursor-pointer rounded-md"
      >
        <div>{i.value}</div>
      </div>
    );
  });

  return (
    <div className="flex flex-col absolute bottom-8 right-1 w-40 p-2 border-4 rounded-md border-solid border-gray-border-color ">
      {profileItem}
      <hr className="bg-gray-border-color border-0 h-1 mb-1" />
      <div>
        <CustomButton onClickHandler={() => signOut()} value="Log Out" />
      </div>
    </div>
  );
};

export default ProfileItems;
