export const findUsername = (uuid) => {
    return require("./data/accounts.json").find((entry) => {
        return entry.uuid === uuid;
    })?.username;
};

export const findFriendRequest = (userUuid, friendUuid) => {
    return require("./data/account_friends.json").find((request) => {
        return (
            (request.requestor === userUuid &&
                request.recipient === friendUuid) ||
            (request.requestor === friendUuid && request.recipient === userUuid)
        );
    });
};

export const findAcceptedFriendUuid = (userUuid, friendUuid) => {
    return findFriendRequest(userUuid, friendUuid)?.accepted
        ? friendUuid
        : null;
};
