import React, { useState, useEffect, useContext } from "react";
import { DisplayCard, DbRelatedContext } from "../index";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import storage from "electron-json-storage";
import { ipcRenderer } from "electron";
import { Button, TextField } from "@material-ui/core/";
import { withRouter } from "react-router-dom";

const {
  GET_TABLE_NAMES,
  GET_TABLE_NAMES_REPLY,
  CLOSE_SERVER,
  CREATE_DATABASE,
  CREATE_DATABASE_REPLY
} = require("../../constants/ipcNames");

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  control: {
    padding: theme.spacing(2)
  },
  highlightSelected: {
    background: "grey"
  }
}));

const AllDBs = props => {
  // For styling:
  const classes = useStyles();
  const [spacing] = useState(2);

  // Getting relevant information from context provider component
  const {
    setTables: setTablesContext,
    setSelectedDb,
    serverStatus,
    setServerStatus,
    allDbNames,
    setAllDbNames
  } = useContext(DbRelatedContext);

  // Setting up initial state values for rendering/interacting with components
  const [currentlySelected, setCurrentlySelected] = useState(false);
  const [dbToAdd, setDbToAdd] = useState(null);
  // Indirectly re-sets state to be the clicked on DB
  const enableSelected = dbName => {
    setCurrentlySelected(dbName);
  };

  // Hooks for setting/retrieving neccesary info to/from config file and context provider
  useEffect(() => {
    // componentDidMount to kill the server if it is open
    if (serverStatus) {
      ipcRenderer.send(CLOSE_SERVER);
      setServerStatus(false);
    }
  }, [serverStatus]);

  const handleInputChange = e => {
    const { name, value } = e.target;
    setDbToAdd(value);
  };

  const createNewDatabase = async newDbName => {
    await ipcRenderer.send(CREATE_DATABASE, newDbName);
    await ipcRenderer.on(CREATE_DATABASE_REPLY, (event, updatedDatabases) => {
      setAllDbNames(updatedDatabases);
    });
  };
  // when user clicks database, sends message to trigger getting the table data
  // set context with table names
  const selectDb = async dbname => {
    setSelectedDb(dbname); // set db name in context

    await ipcRenderer.send(GET_TABLE_NAMES, dbname); // message to get all table names
    await ipcRenderer.on(GET_TABLE_NAMES_REPLY, (_, tableNames) => {
      setTablesContext(tableNames);
    });
    props.history.push("/tables"); // finally push onto the next component
  };

  return (
    <div>
      <h1>Databases: </h1>
      <Grid container className={classes.root} spacing={3}>
        <Grid item xs={12}>
          <Grid container justify='center' spacing={spacing}>
            {allDbNames &&
              allDbNames.map(db => (
                <Grid
                  key={db}
                  className={
                    currentlySelected === db ? classes.highlightSelected : ""
                  }
                  item
                  onClick={() => enableSelected(db)}
                  onDoubleClick={() => selectDb(db)}
                >
                  <DisplayCard
                    className={classes.control}
                    name={db}
                    type='db'
                  />
                </Grid>
              ))}
          </Grid>
        </Grid>
      </Grid>
      <TextField
        label='Database Name'
        name='newDbName'
        onChange={handleInputChange}
      />
      <Button
        variant='contained'
        type='button'
        color='inherit'
        onClick={() => createNewDatabase(dbToAdd)}
      >
        Add Database
      </Button>
    </div>
  );
};

export default withRouter(AllDBs);
