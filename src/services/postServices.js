

import {get,post} from "./requests";

export const getPosts =()=> get("/Post/GetPosts");
export const getPostComments =(id)=> get("/PostComment/GetPostCommentsById/"+id);

export const getPostLikesByPostId  =(id)=> get("/PostComment/GetPostCommentsById/"+id);


export const getPostBlock =(id)=> get("/Post/GetPostBlockById/"+id);




