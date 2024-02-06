import { useState } from 'react';
import { Movie } from './movie';
import { TweetParent } from './tweet-parent';
import type { TweetWithUser } from '@lib/types/tweet';

type TweetWithParentProps = {
  data: TweetWithUser[];
};

export type LoadedParents = Record<'parentId' | 'childId', string>[];

export function TweetWithParent({ data }: TweetWithParentProps): JSX.Element {
  const [loadedParents, setLoadedParents] = useState<LoadedParents>([]);

  const addParentId = (parentId: string, targetChildId: string): void =>
    setLoadedParents((prevLoadedParents) =>
      prevLoadedParents.some((item) => item.parentId === parentId)
        ? prevLoadedParents
        : [...prevLoadedParents, { parentId, childId: targetChildId }]
    );

  const filteredData = data.filter(
    (child) => !loadedParents.some((parent) => parent.parentId === child.id)
  );

  return (
    <>
      {filteredData.map((movies) => (
        <div className='[&>article:nth-child(2)]:-mt-1' key={movies.id}>
          {movies.parent && (
            <TweetParent
              parentId={movies.parent.id}
              loadedParents={loadedParents}
              addParentId={addParentId}
            />
          )}
          <Movie {...movies} />
        </div>
      ))}
    </>
  );
}
