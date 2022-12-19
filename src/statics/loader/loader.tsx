import React, { FC, memo, useState } from 'react';

const Loader: FC = () => {
  const [isLoading] = useState<boolean>(false);

  return isLoading ? <div>loading</div> : null;
};

export const MemoizedLoader = memo(Loader);
