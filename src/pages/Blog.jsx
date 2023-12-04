import { MediaLinks } from "../components/blog/MediaLinks"
import { Logo } from "../components/shared/logo"
import { MenuToogle } from "../components/shared/menuToogle"

export const Blog = () => {
    
    return (
      <div>
        <div className="flex justify-between bg-slate-200 p-[16px] " >
          <MenuToogle />
          <Logo text={"Blog"} />
          <MediaLinks />
        </div>
      </div>
    );
}