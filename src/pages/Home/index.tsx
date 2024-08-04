import { ChannelItem, fetchChannelAPI } from "@/apis/list";
import { Tabs } from "antd-mobile";
import { useEffect, useState } from "react";
import HomeList from "./HomeList";

function Home() {
    const [channels, setChannels] = useState<ChannelItem[]>([]);
    useEffect(()=>{
        const getChannels = async ()=>{
            try {
                const res = await fetchChannelAPI();
                setChannels(res.data.data.channels);
            } catch (error) {
                throw new Error("fetch channel error");
            }
        }
        getChannels();
    }, []);
    return <>
        <div className="tabContainer">
            {/* tab区域 */}
            <Tabs>
                {channels.map(item=>
                <Tabs.Tab key={item.id} title={item.name}>
                    {/* list组件 */}
                    <HomeList channelId={""+item.id}/>
            </Tabs.Tab>)
            }
        </Tabs>
        </div>
    </>
}

export default Home;