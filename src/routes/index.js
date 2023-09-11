//layouts
import { HeaderOnly } from "~/components/Layout";
import routes from "~/config/route";

//pages
import Home from "../pages/Home";
import Following from "../pages/Following";
import Profile from "../pages/Profile";
import Upload from "../pages/Upload";
import Search from "../pages/Search";

const publicRoutes = [
  { path: routes.root, component: Home },
  { path: routes.following, component: Following },
  { path: routes.profile, component: Profile },
  { path: routes.upload, component: Upload, layout: HeaderOnly },
  { path: routes.search, component: Search },
  { path: routes.login, component: Upload}
]

const privateRoutes = [
]

export { publicRoutes, privateRoutes }