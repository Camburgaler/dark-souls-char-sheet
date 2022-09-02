import { FormControl, FormHelperText, FormLabel, Grid, InputLabel, MenuItem, Select, TextField, Typography } from "@mui/material";
import React from "react";
import { Item } from "./styles";
const weapons = require('./weapons.json');
const armors = require('./armors.json');
const shields = require('./shields.json');

function WeaponsArmorAndShields(props) {

    const [selection, setSelection] = React.useState({
        weapon1: "none,0",
        weapon2: "none,0",
        armor: "none",
        shield: "none,0"
    })
    const selectionData = {
        weapon1: weapons[selection.weapon1.split(",")[0]].weapons[selection.weapon1.split(",")[1]],
        weapon2: weapons[selection.weapon2.split(",")[0]].weapons[selection.weapon1.split(",")[1]],
        armor: armors[selection.armor],
        shield: shields[selection.shield.split(",")[0]].shields[selection.shield.split(",")[1]]
    }

    const handleChange = (event) => {
        setSelection({
            ...selection,
            [event.target.name]: event.target.value
        })
    }

    return (
        <>
            <Grid container direction="column" sx={{ border: "1px solid black" }}>
                <Grid item xs={12}>
                    <Typography align="center">Weapons</Typography>
                </Grid>
                <Grid item xs={12}>
                    <Item>
                        <FormControl>
                            <InputLabel>Name</InputLabel>
                            <Select name="weapon1" onChange={handleChange} native label="Name" fullWidth>
                                {Object.entries(weapons).map(([weaponTypeKey, weaponTypeValue]) => {
                                    let i = 0;
                                    return (
                                        <optgroup key={weaponTypeValue.type} label={weaponTypeValue.type}>
                                            {weaponTypeValue.weapons.map((weapon) => (
                                                <option key={weapon.name} value={[weaponTypeKey, i++]}>{weapon.name}</option>
                                            ))}
                                        </optgroup>
                                    );
                                })}
                            </Select>
                        </FormControl>
                    </Item>
                </Grid>
                <Grid item xs={12}>
                    <Item>
                        <FormControl>
                            <Typography>{selectionData.weapon1.special}</Typography>
                            <FormLabel>Special Ability</FormLabel>
                        </FormControl>
                    </Item>
                </Grid>
                <Grid item xs={12}>
                    <Item>
                        <FormControl>
                            <InputLabel>Name</InputLabel>
                            <Select name="weapon2" onChange={handleChange} native label="Name" fullWidth>
                                {Object.entries(weapons).map(([weaponTypeKey, weaponTypeValue]) => {
                                    let i = 0;
                                    return (
                                        <optgroup key={weaponTypeValue.type} label={weaponTypeValue.type}>
                                            {weaponTypeValue.weapons.map((weapon) => (
                                                <option key={weapon.name} value={[weaponTypeKey, i++]}>{weapon.name}</option>
                                            ))}
                                        </optgroup>
                                    );
                                })}
                            </Select>
                        </FormControl>
                    </Item>
                </Grid>
                <Grid item xs={12}>
                    <Item>
                        <FormControl>
                            <Typography>{selectionData.weapon2.special}</Typography>
                            <FormLabel>Special Ability</FormLabel>
                        </FormControl>
                    </Item>
                </Grid>
                <Grid item xs={12}>
                    <Typography align="center">Armor</Typography>
                </Grid>
                <Grid item xs={12}>
                    <Item>
                        <FormControl>
                            <InputLabel>Name</InputLabel>
                            <Select name="armor" onChange={handleChange} native label="Name" fullWidth>
                                {Object.entries(armors).map(([armorKey, armorValue]) => {
                                    return (
                                        <option key={armorKey} value={[armorKey]}>{armorValue.name}</option>
                                    );
                                })}
                            </Select>
                        </FormControl>
                    </Item>
                </Grid>
                <Grid item xs={12}>
                    <Item>
                        <FormControl>
                            <Typography>{selectionData.armor.special}</Typography>
                            <FormLabel>Special Ability</FormLabel>
                        </FormControl>
                    </Item>
                </Grid>
                <Grid item xs={12}>
                    <Typography align="center">Shield</Typography>
                </Grid>
                <Grid item xs={12}>
                    <Item>
                        <FormControl>
                            <InputLabel>Name</InputLabel>
                            <Select name="shield" onChange={handleChange} native label="Name" fullWidth>
                                {Object.entries(shields).map(([shieldTypeKey, shieldTypeValue]) => {
                                    let i = 0;
                                    return (
                                        <optgroup key={shieldTypeValue.type} label={shieldTypeValue.type}>
                                            {shieldTypeValue.shields.map((shield) => (
                                                <option key={shield.name} value={[shieldTypeKey, i++]}>{shield.name}</option>
                                            ))}
                                        </optgroup>
                                    );
                                })}
                            </Select>
                        </FormControl>
                    </Item>
                </Grid>
                <Grid item xs={12}>
                    <Typography align="center">Weapons, Armor, and Shields</Typography>
                </Grid>
            </Grid>
        </>
    )
};

export default WeaponsArmorAndShields;