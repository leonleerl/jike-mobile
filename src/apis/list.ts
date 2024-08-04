import { http } from "@/utils"
import { ResType } from "./shared"

export type ChannelItem = {
    id: number,
    name:string
}

export type ChannelRes = {
    channels: ChannelItem[],
}

// 请求频道列表
export function fetchChannelAPI(){
    return http.request<ResType<ChannelRes>>(
        {
            url:"channels"
        }
    )
}

type ListItem = {
    art_id:string,
    title:string,
    aut_id:string,
    comm_count:number,
    pubdate:string,
    aut_name:string,
    is_top:number,
    cover:{
        type: number,
        images: string[]
    }
}


export type ListRes = {
    results: ListItem[],
    pre_timestamp:string
}

type ReqParams = {
    channel_id: string,
    timestamp:string
}

// 请求文章列表
export function fetchListAPI(params:ReqParams){
    return http.request<ResType<ListRes>>({
        url:'/articles',
        params:params
    })
}