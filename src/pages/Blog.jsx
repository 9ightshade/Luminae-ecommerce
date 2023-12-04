import { BlogHero } from "../components/blog/BlogHero";
import { MediaLinks } from "../components/blog/MediaLinks"
import { Logo } from "../components/shared/logo"
import { MenuToogle } from "../components/shared/menuToogle"

export const Blog = ({ mobileNavDisplay, setmobileNavDisplay }) => {
  return (
    <div>
      <div className="flex justify-between bg-slate-200 p-[16px] ">
        <MenuToogle
          mobileNavDisplay={mobileNavDisplay}
          setmobileNavDisplay={setmobileNavDisplay}
        />
        <Logo text={"Blog"} />
        <MediaLinks />
      </div>

          <BlogHero />
          
    </div>
  );
};