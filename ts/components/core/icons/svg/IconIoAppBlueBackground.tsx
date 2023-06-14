import React from "react";
import { Svg, Path, G, Mask, Rect } from "react-native-svg";
import { SVGIconProps } from "../Icon";

const IconIoApp = ({ size, style, ...props }: SVGIconProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" style={style} {...props}>
    <Rect width={size} height={size} fill="#0B3EE3" rx="4" />
    <Mask id="a" width={size} height={size} x="6" y="7">
      <Path
        fill="#fff"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.25 7c.69036 0 1.25.55964 1.25 1.25S7.94036 9.5 7.25 9.5 6 8.94036 6 8.25 6.55964 7 7.25 7Zm10.5 6c0 2.2091-1.7909 4-3.8095 4-2.3996 0-4.1905-1.7909-4.1905-4 0-2.2091 1.7909-4 4.1905-4 2.0186 0 3.8095 1.7909 3.8095 4Zm-9.5-1.25c0-.5523-.44772-1-1-1s-1 .4477-1 1V16c0 .5523.44772 1 1 1s1-.4477 1-1v-4.25Zm6.4826.8302h.5326v-.524h-.5287v-.6337h-.5785v2.1082c0 .3331.0459.5606.1417.6824.092.1259.2682.1869.5287.1869.0996 0 .249-.0244.4406-.0691l-.0268-.4874-.3295.0081c-.0575 0-.0996-.0122-.1264-.0406-.0268-.0285-.0422-.061-.046-.0975-.0038-.0406-.0077-.1016-.0077-.195v-.9383Zm-1.7431-.52v2.287h.5785v-2.287h-.5785Zm-.8683-.0568c.1011 0 .1867.034.2528.1021.0661.0681.0972.1514.0972.2536 0 .1021-.0311.1816-.0972.2497-.0623.0605-.1439.0946-.2489.0946-.1011 0-.1867-.0341-.2528-.1022-.0661-.0681-.1011-.1513-.1011-.2497 0-.0984.035-.1816.0972-.2497.0661-.0682.1517-.0984.2528-.0984Z"
      />
    </Mask>
    <G mask="url(#a)">
      <Path fill="#fff" d="M-13-13h50v50h-50z" />
    </G>
  </Svg>
);

export default IconIoApp;
