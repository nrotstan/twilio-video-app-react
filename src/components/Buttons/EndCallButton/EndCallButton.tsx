import React from 'react';
import clsx from 'clsx';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

import { Button } from '@material-ui/core';

import useVideoContext from '../../../hooks/useVideoContext/useVideoContext';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      background: theme.brand,
      color: 'white',
      '&:hover': {
        background: '#600101',
      },
    },
  })
);

export default function EndCallButton(props: { className?: string }) {
  const classes = useStyles();
  const { room, updateBackgroundSettings } = useVideoContext();

  const handleDisconnect = () => {
    updateBackgroundSettings({ type: 'none', index: 0 });
    room!.disconnect();
  };

  return (
    <Button onClick={handleDisconnect} className={clsx(classes.button, props.className)} data-cy-disconnect>
      Disconnect
    </Button>
  );
}
