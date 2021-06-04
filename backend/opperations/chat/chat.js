const users = [];


// Add User to Chat
const addUser = ({id, username, room}) => {
    username = username.trim().toLowerCase();
    room = room.trim().toLowerCase();

    const existingUser = users.find((user)=>user.username === username && user.room === room);

    if(existingUser){
        return {error:"User is taken"};
    }

    const user = {id, username, room};
    users.push(user);

    return {user};
}


// Remove User
const removeUser = (id) => {
    const index = users.findIndex((user)=>user.id === id);
    
    if(index != -1){
        users.splice(index, 1);
    }

}

// Get User
const getUser = (id) => {
    return users.find((user) => user.id === id);
}

// Get Users in Room
const getUsersInRoom = (room) => {
    return users.find((user) => user.room == room);
}

// End Chat


module.exports = {addUser, removeUser, getUser, getUsersInRoom}