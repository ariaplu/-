import { motion } from 'framer-motion';
import cn from 'clsx';
import { variants } from '@components/user/user-header';
import { UserNavLink } from './tv-nav-link';

type UserNavProps = {
  follow?: boolean;
};

const allNavs = [
  [
    { name: 'ORIGINALS', path: 'originals' },
    { name: 'Movies', path: 'movies' },
    { name: 'Shows', path: 'shows' }
  ],
  [
    { name: 'Following', path: 'following' },
    { name: 'Followers', path: 'followers' }
  ]
] as const;

export function TvNav({ follow }: UserNavProps): JSX.Element {
  const tvNav = allNavs[+!!follow];

  return (
    <motion.nav
      className={cn(
        `hover-animation bg-neutral-950 hover:bg-violet-600 active:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300 ... flex justify-between overflow-y-auto
         pb-4 px-6`,
        follow && 'mt-1 mb-0.5'
      )}
      {...variants}
      exit={undefined}
    >
      {tvNav.map(({ name, path }) => (
        <UserNavLink name={name} path={path} key={name} />
      ))}
    </motion.nav>
  );
}
