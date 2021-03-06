import React from 'react';
import { EditGuesser } from '@api-platform/admin';
import { TextInput, BooleanInput, RadioButtonGroupInput } from 'react-admin';
import { EditActions } from '../actions/EditActions';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
  root: {
    width: '80%',
    display: 'flex',
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  gridItem: {
    width: '15%'
  }
}));

const StaffTitle = ({ record }) => {
  return 'Edit - ' + record.email;
};

export const UserEdit = props => {
  const classes = useStyles();
  return (
    <EditGuesser title={<StaffTitle />} actions={<EditActions />} {...props}>
      <div className={classes.root}>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          spacing={3}
        >
          <TextInput fullWidth label="First Name" source="firstName" />
          <TextInput fullWidth label="Last Name" source="lastName" />
          <TextInput fullWidth label="Email Address" source="email" />
          <RadioButtonGroupInput
            fullWidth
            label="Role"
            source="asRole"
            choices={[
              { id: 'staff', name: 'Staff' },
              { id: 'admin', name: 'Admin' }
            ]}
          />
          <BooleanInput label="Login Enabled" source="isLoginEnabled" />
        </Grid>
      </div>
    </EditGuesser>
  );
};
