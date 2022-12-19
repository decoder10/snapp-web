import React, { FC, memo } from 'react';

const MainLoading: FC = () => {
  return (
      <div>main loading</div>
  );
};

export const MemoizedMainLoading = memo(MainLoading);
