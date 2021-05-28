import { HorizontalSpacer } from "./tastics/horizontal-spacer";
import { Tile } from "./tastics/tile";
import { ProductSlider } from "./tastics/product-slider";
import { ProductDetails } from "./tastics/product-details";
import { Dummy } from "./tastics/dummy";
import { Cart } from "./tastics/cart";
import { Entrance } from "./tastics/entrance";
import { UserProfile } from "./tastics/user-profile";
import { AccountConfirm } from "./tastics/account-confirm";
import { MainMenu } from "./tastics/main-menu";

export const blocks = {
  "frontastic/boost/content/tile-v2": Tile,
  "frontastic/boost/helpers/horizontal-spacer": HorizontalSpacer,
  "frontastic/boost/content/markdown": Dummy,
  "frontastic/boost/product/product-slider": ProductSlider,
  "frontastic/boost/product/product-details": ProductDetails,
  "frontastic/boost/forms/newsletter-block": Dummy,
  "frontastic/boost/cart": Cart,
  "frontastic/boost/account/access": Entrance,
  "frontastic/boost/account/profile": UserProfile,
  "frontastic/boost/account/confirm": AccountConfirm,
  "frontastic/boost/header/main-menu": MainMenu,
  default: Dummy,
};

export default function Tastic({ block, streams, highlight = false }) {
  const Component = blocks[block.tasticType] || blocks["default"];
  return (
    <div className={`w-full ${highlight && "ring-8 ring-pink-500"} `}>
      <Component
        type={block?.tasticType}
        id={block?.tasticId}
        data={block?.configuration}
        stream={block?.configuration.stream && streams
          ? streams[block.configuration.stream]
          : null}
      />
    </div>
  );
}
