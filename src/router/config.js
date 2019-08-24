import {
  DiscoverCom,
  ToplistCom,
  PlaylistCom,
  DjradioCom,
  ArtistCom,
  AlbumCom,
  MyCom,
  FriendCom,
  DownloadCom
} from "./loadCom";
// top nav
export const subs = [
  {
    path: "/discover",
    exact: true,
    name: "推荐",
    component: DiscoverCom
  },
  {
    path: "/discover/toplist",
    name: "排行榜",
    component: ToplistCom
  },
  {
    path: "/discover/playlist",
    name: "歌单",
    component: PlaylistCom,
    icon: "white"
  },
  {
    path: "/discover/djradio",
    name: "主播电台",
    component: DjradioCom
  },
  {
    path: "/discover/artist",
    name: "歌手",
    component: ArtistCom
  },
  {
    path: "/discover/album",
    name: "新碟上架",
    component: AlbumCom
  }
];

export const top = [
  {
    path: "/",
    exact: true,
    name: "发现音乐",
    component: DiscoverCom
  },
  {
    path: "/my",
    name: "我的音乐",
    component: MyCom
  },
  {
    path: "/friend",
    name: "朋友",
    component: FriendCom
  },
  {
    path: "https://music.163.com/store/product",
    name: "商城"
  },
  {
    path: "https://music.163.com/nmusician/web/index",
    name: "音乐人"
  },
  {
    path: "/download",
    name: "下载客户端",
    component: DownloadCom,
    icon: "hot"
  }
];
