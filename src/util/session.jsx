import { usersStorageName } from "../data/db";

export function saveUser(user) {
    const newUsers = [...(JSON.parse(localStorage.getItem(usersStorageName)) || [])]
    newUsers[user.index].cart = user.cart;
    localStorage.setItem(usersStorageName, JSON.stringify(newUsers));
}
