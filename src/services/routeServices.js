

import {get,post} from "./requests";

export const getRoutes =()=> get("/Route/GetRoutes");

export const getRouteCommentsByRouteId =(id)=> get("/RouteComment/GetRouteCommentsById/"+id);

export const getRouteRatingsByRouteId =(id)=> get("/RouteRating/GetRatings?_routeId="+id);




