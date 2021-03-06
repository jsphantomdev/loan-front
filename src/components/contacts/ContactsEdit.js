import React from 'react';
import { EditGuesser } from '@api-platform/admin';
import { TextInput } from 'react-admin';
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

const ContactsTitle = ({ record }) => {
  return 'Edit - ' + record.firstName + ' ' + record.lastName;
};

export const ContactsEdit = props => {
  const classes = useStyles();
  return (
    <EditGuesser
      title={<ContactsTitle />}
      actions={<EditActions title="Edit - Contact" />}
      {...props}
    >
      <div className={classes.root}>
        <Grid container direction="row" alignItems="center" spacing={3}>
          <Grid item className={classes.gridItem} xs={12} sm={6} lg={4}>
            <TextInput fullWidth label="First Name" source="firstName" />
          </Grid>
          <Grid item className={classes.gridItem} xs={12} sm={6} lg={4}>
            <TextInput fullWidth label="Last Name" source="lastName" />
          </Grid>
          <Grid item className={classes.gridItem} xs={12} sm={6} lg={4}>
            <TextInput fullWidth label="Email Address" source="email" />
          </Grid>
          <Grid item className={classes.gridItem} xs={12} sm={6} lg={4}>
            <TextInput
              fullWidth
              label="Street Address"
              source="streetAddress"
            />
          </Grid>
          <Grid item className={classes.gridItem} xs={12} sm={6} lg={4}>
            <TextInput fullWidth label="City" source="city" />
          </Grid>
          <Grid item className={classes.gridItem} xs={12} sm={6} lg={4}>
            <TextInput fullWidth label="State" source="state" />
          </Grid>
          <Grid item className={classes.gridItem} xs={12} sm={6} lg={4}>
            <TextInput fullWidth label="Country" source="country" />
          </Grid>
          <Grid item className={classes.gridItem} xs={12} sm={6} lg={4}>
            <TextInput fullWidth label="Postal Code" source="postalCode" />
          </Grid>
        </Grid>
      </div>
    </EditGuesser>
  );
};
