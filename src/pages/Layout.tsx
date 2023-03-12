import React from 'react';
import { Grid, Container } from '@material-ui/core';
import { SideMenu } from '../components/SideMenu';
import { useHomeStyles } from './theme';
import { Tags } from '../components/Tags';
import { Users } from '../components/Users';

interface LayoutI {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutI> = ({ children }) => {
  const classes = useHomeStyles();

  return (
    <Container className={classes.wrapper} maxWidth="lg">
      <Grid container spacing={3}>
        <Grid sm={1} md={3} item>
          <SideMenu classes={classes} />
        </Grid>
        <Grid sm={8} md={6} item>
          {children}
        </Grid>
        <Grid sm={3} md={3} item>
          <div className={classes.rightSide}>
            <Tags classes={classes}></Tags>
            <Users />
          </div>
        </Grid>
      </Grid>
    </Container>
  );
};
