import { lazy } from "react";

// 按需加载 Suspense lazy
export const DiscoverCom = lazy(() => import("@/pages/DiscoverCom"));
export const MyCom = lazy(() => import("@/pages/MyCom"));
export const FriendCom = lazy(() => import("@/pages/FriendCom"));
export const DownloadCom = lazy(() => import("@/pages/DownloadCom"));
export const ToplistCom = lazy(() => import("@/pages/ToplistCom"));
export const PlaylistCom = lazy(() => import("@/pages/PlaylistCom"));
export const DjradioCom = lazy(() => import("@/pages/DjradioCom"));
export const ArtistCom = lazy(() => import("@/pages/ArtistCom"));
export const AlbumCom = lazy(() => import("@/pages/AlbumCom"));
export const NotMatch = lazy(() => import("@/components/NotMatch"));
