import { ChangeEvent, useCallback, useEffect, useState } from 'react';
import { CustomButton } from '../button';
import { SearchInput } from '../searchInput';
import HomeIcon from '@/public/images/homeIcon';
import LibraryIcon from '@/public/images/libraryIcon';
import FriendsIcon from '@/public/images/friendsIcon';
import MenuItem from './menuItem';
import useCurrentUser from '@/hooks/useCurrentUser';
import { Dropdown } from 'flowbite';
import type { DropdownOptions, DropdownInterface } from 'flowbite';
import ProfileItems from './profileItems';
import useComponentVisible from '@/hooks/useComponentVisible';

const MENU_ITEMS = [
  {
    id: 1,
    value: 'Home',
    link: '/',
    icon: <HomeIcon />,
  },
  {
    id: 2,
    value: 'Library',
    link: '/library',
    icon: <LibraryIcon />,
  },
  {
    id: 3,
    value: 'Friends',
    link: '/friends',
    icon: <FriendsIcon />,
  },
];

const PROFILE_ITEMS = [
  {
    id: 1,
    value: 'Profile',
    link: '/profile',
    isSeparated: false,
  },
];

const ProfileMenu = () => {
  const { ref, isComponentVisible, setIsComponentVisible } = useComponentVisible(false);
  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setIsComponentVisible(true)}
        className="inline-flex items-center p-2 text-sm font-medium text-center text-main-text-color bg-inherit rounded-lg focus:outline-none"
        type="button">
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg">
          <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"></path>
        </svg>
      </button>

      {isComponentVisible && <ProfileItems items={PROFILE_ITEMS} isVisible={isComponentVisible} />}
    </div>
  );
};

const NavBar = () => {
  const [searchValue, setSearchValue] = useState('');
  const [isProfileMenuVisible, setIsProfileMenuVisible] = useState(false);

  const { data: user } = useCurrentUser();

  const onChangeSearchValue = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const menuItems = MENU_ITEMS.map((i) => {
    return <MenuItem key={i.id} value={i.value} icon={i.icon} link={i.link} />;
  });

  return (
    <div className="w-80 z-40 fixed top-0 left-0 flex flex-col justify-between h-screen bg-navbar-bg-color px-7 pt-10 pb-8">
      <div>
        <div className="mb-7">
          <img src="/images/logo.png" alt="logo" />
        </div>
        <div className="mb-7">
          <SearchInput
            id="search"
            onChange={onChangeSearchValue}
            value={searchValue}
            label="Search"
            type="search"
          />
        </div>
        <div className="flex flex-col mb-7">{menuItems}</div>
      </div>

      <div>
        <div className="flex items-center space-x-4 justify-between w-full">
          <div className="flex flex-row items-center space-x-4">
            <img className="w-10 h-10 rounded-full" src="/images/default-green.png" alt="" />
            <div className="font-medium text-main-text-color">
              <div>{user?.name}</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">{user?.email}</div>
            </div>
          </div>
          <ProfileMenu />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
