import { Dialog } from '@headlessui/react';
import { CustomIcon } from '@components/ui/custom-icon';
import { Button } from '@components/ui/button';
import type { ReactNode, FormEvent } from 'react';
import { ArplImage } from '@components/ui/ariaplus';
import { Cat } from '@components/tv/cat';



type UsernameModalProps = {
  loading: boolean;
  children: ReactNode;
  available: boolean;
  alreadySet: boolean;
  changeUsername: (e: FormEvent<HTMLFormElement>) => Promise<void>;
  cancelUpdateUsername: () => void;
};

const usernameModalData = [
  {
    title: 'What should we call you?',
    description: 'Your @username is unique. You can always change it later.',
    cancelLabel: 'Skip'
  },
  {
    title: 'tv remote',
    description:
      'X',
    cancelLabel: 'Cancel'
  }
] as const;

export function UsernameModal({
  loading,
  children,
  available,
  alreadySet,
  changeUsername,
  cancelUpdateUsername
}: UsernameModalProps): JSX.Element {
  const { title, description, cancelLabel } = usernameModalData[+alreadySet];

  return (
    <form
      className='flex h-full flex-col justify-between bg-no-repeat bg-top bg-cover'>
    <div className='flex flex-col items-center gap-6'>
        <div className='flex flex-col gap-4'>
          <i className='mx-auto'>
      <ArplImage
          imgClassName='arplicon'
          blurClassName='none'
          src='/assets/ariaplus.svg'
          alt='Twitter banner'
          layout='fill'
          width='40px'
          height='40px'
          useSkeleton
       />
          </i>
          <div className='flex items-center flex-col gap-2'>
            <Dialog.Title className='text-2xl font-bold xs:text-3xl sm:text-4xl'>
              {title}
            </Dialog.Title>

          </div>
        </div>
        {children}
      </div>
      <Cat/>
      <div className='flex flex-col gap-3 inner:py-2 inner:font-bold'>

        <Button
          className='border border-light-line-reply hover:bg-light-primary/10 focus-visible:bg-light-primary/10
                     active:bg-light-primary/20 dark:border-light-secondary dark:text-light-border 
                     dark:hover:bg-light-border/10 dark:focus-visible:bg-light-border/10 
                     dark:active:bg-light-border/20'
          onClick={cancelUpdateUsername}
        >Close</Button>
      </div>
    </form>
  );
}
