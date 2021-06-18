import React, { FC, ReactNode, useState } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Drawer from "@material-ui/core/Drawer";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import Divider from "@material-ui/core/Divider";
import { CssBaseline, List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { Container } from "@material-ui/core";
import Router from "next/router";

interface Props {
    children: ReactNode;
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: "flex",
        },
        appBarContainer: {
            flexGrow: 1,
        },
        menuButton: {
            marginRight: theme.spacing(2),
        },
        drawerHeader: {
            display: "flex",
            alignItems: "center",
            padding: theme.spacing(0, 1),
            ...theme.mixins.toolbar,
            justifyContent: "flex-end",
        },
    })
);

const MainLayout: FC<Props> = ({ children }) => {
    const { root, menuButton, drawerHeader, appBarContainer } = useStyles();
    const [drawerOpen, setDrawerOpen] = useState(true);
    const text = "Search";

    return (
        <div className={root}>
            <CssBaseline />
            <Drawer
                style={{
                    width: drawerOpen ? 139.05 : 0,
                }}
                variant="persistent"
                anchor="left"
                open={drawerOpen}
            >
                <div className={drawerHeader}>
                    <IconButton onClick={() => setDrawerOpen(false)}>
                        <ChevronLeftIcon />
                    </IconButton>
                </div>
                <Divider />
                <List>
                    <ListItem button key={text} onClick={() => Router.push({ pathname: "/search" })}>
                        <ListItemIcon>
                            <SearchIcon />
                        </ListItemIcon>
                        <ListItemText>{text}</ListItemText>
                    </ListItem>
                </List>
            </Drawer>
            <div style={{ flexGrow: 1 }}>
                <div className={appBarContainer}>
                    <AppBar position="static">
                        <Toolbar>
                            {!drawerOpen && (
                                <IconButton
                                    edge="start"
                                    className={menuButton}
                                    color="inherit"
                                    aria-label="menu"
                                    onClick={() => setDrawerOpen(true)}
                                >
                                    <MenuIcon />
                                </IconButton>
                            )}
                        </Toolbar>
                    </AppBar>
                </div>

                <Container maxWidth="lg">{children}</Container>
            </div>
        </div>
    );
};

export default MainLayout;
