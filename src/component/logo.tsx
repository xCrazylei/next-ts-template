import { IObject } from "models/type";
import React, { CSSProperties, FC } from "react";

interface IProps {}

const Logo: FC<IProps> = React.memo((props) => {
  return (
    <div style={Style.app}>
      <img src="https://www.nextjs.cn/static/images/nextjs-logo.png" />
    </div>
  );
});

const Style: IObject<CSSProperties> = {
  app: { textAlign: "center" },
};

export default Logo;
