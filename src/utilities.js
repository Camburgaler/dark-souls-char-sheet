export const findUsername = (uuid) => {
    return require("./data/accounts.json").find((entry) => {
        return entry.uuid === uuid;
    })?.username;
};
