

import {get, post, postJSON} from "./requests";

export const getUsers =()=> get("/User/GetUsers");
export const getFollowers =(id)=> post("/Follow/GetFollowersById?id="+id);
export const getFollowing =(id)=> post("/Follow/GetFollowingById?id="+id);


export const getUserBlock =(id)=> get("xx"+id);


export const postLogin =(data)=> postJSON("/User/Login",data);
export const postCreateUser =(data)=> postJSON("/User/Login",data);






