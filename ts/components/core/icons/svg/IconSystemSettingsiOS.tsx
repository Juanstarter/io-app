import React from "react";
import { Svg, Path, Defs, LinearGradient, Stop } from "react-native-svg";
import { SVGIconProps } from "../Icon";

const IconSystemSettingsiOS = ({ size, style, ...props }: SVGIconProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" style={style} {...props}>
    <Path
      d="M15.6266 0c2.4 0 3.6 0 4.9067.4 1.4133.50667 2.5333 1.62666 3.04 3.04C24 4.74666 24 5.97333 24 8.37332v7.25328c0 2.4 0 3.6-.4 4.9067-.5067 1.4133-1.6267 2.5333-3.04 3.04C19.2266 24 18.0266 24 15.6266 24H8.37332c-2.39999 0-3.59999 0-4.90666-.4C2.02666 23.0666.93333 21.9733.4 20.5333c-.4-1.28-.4-2.48-.4-4.9067V8.37332c0-2.39999 0-3.59999.4-4.90666.53333-1.41333 1.62666-2.53333 3.06666-3.04C4.74666 0 5.94666 0 8.37332 0h7.25328Z"
      fill="url(#b)"
    />
    <Path
      d="M11.9996 22.4001c5.7438 0 10.4-4.6563 10.4-10.4 0-5.74377-4.6562-10.4-10.4-10.4-5.74376 0-10.39999 4.65623-10.39999 10.4 0 5.7437 4.65623 10.4 10.39999 10.4Z"
      fill="#2E2E30"
    />
    <Path
      d="m12.6997 6.46427.0792.01114.1849.02597.2887-.71342c.0862-.23024.1353-.19641.1321.01856l-.0247.75053c.0792.01114.1811.05239.2603.06352l.3643-.67588c.1089-.20012.1617-.1927.1283.04497l-.1303.73569c.0755.03754.1774.07879.2566.08992l.4361-.61193c.1353-.19641.1844-.16258.1246.07137l-.2095.72456c.0755.03754.1774.07879.2492.14274l.4852-.5781c.158-.1663.2071-.13247.1246.07137l-.2888.71342c.0718.06395.1474.10149.2192.16543l.5569-.51415c.1844-.16258.2336-.12875.1209.09778l-.3605.64947c.0718.06395.1436.1279.189.18813l.625-.42379c.1807-.13618.2298-.10235.0945.09406l-.4699.66104c.0718.06394.1172.12418.1853.21454l.6667-.33716c.2034-.10606.2525-.07223.0908.12048l-.5079.54798c.0454.06023.1135.15059.1552.23723l.7121-.27691c.2261-.07594.2451-.01942.0644.11676l-.5797.48403.1251.25994.7274-.19399c.2224-.04953.2414.007.0644.11676l-.6251.4238c.0417.08667.057.16957.0986.25627l.7427-.1111c.2187-.0231.2641.0371.0343.1395l-.6668.3371c.0153.0829.057.1696.0686.2789l.7278-.0054c.2414.007.2339.0598.0342.1395l-.682.2542c.0153.0829.0269.1923.0421.2752l.7431.0775c.2377.0334.2303.0862.0079.1357l-.7237.1676c.0153.083.0004.1886-.0107.2678l.7019.1794c.2339.0598.2265.1127-.0186.1321l-.739.0846c-.0111.0792-.026.1849-.0371.2641l-.0037.0264.6944.2322c.2303.0862.2229.1391-.0185.1321l-.7279.0054c-.0148.1056-.0523.1811-.0672.2868l.6532.3341c.2001.1089.1927.1617-.045.1283l-.713-.1002c-.0375.0755-.0523.1812-.0899.2567l.6157.4097c.1964.1353.1625.1844-.045.1283l-.7019-.1795c-.0375.0756-.0788.1775-.1163.253l.5517.4815c.1663.158.1589.2108-.0714.1246l-.6643-.255c-.0639.0718-.1052.1737-.1691.2455l.4914.5269c.1663.158.1288.2335-.0978.1209l-.6647-.4435c-.064.0718-.1279.1436-.1919.2154l.4313.5723c.1361.1807.1023.2298-.0941.0944l-.5892-.4059c-.064.0718-.1279.1436-.2146.1853l.371.6176c.1061.2034.0722.2525-.1205.0908l-.5517-.4815c-.0903.0681-.1506.1135-.2372.1552l.2843.6593c.1024.2298.0459.2488-.1167.0644l-.4915-.5269c-.0866.0417-.1733.0834-.2599.1251l.1977.701c.0759.2261.0194.2451-.1168.0643l-.4011-.5949c-.0866.0417-.1733.0834-.2863.1213l.1148.7163c.0495.2224-.007.2414-.1395.0343l-.3409-.6404c-.0829.0153-.196.0533-.2789.0685l.0356.7052c.0194.2451-.0599.2339-.1395.0342l-.2654-.6028c-.0829.0153-.1922.0269-.2752.0422l-.0474.7204c-.007.2413-.0862.2302-.1357.0078l-.1977-.701c-.0829.0153-.1886.0004-.2979.012l-.153.7056c-.0334.2376-.1126.2265-.1358.0078l-.0582-.7352c-.1056-.0149-.1849-.026-.2942-.0144l-.2322.6944c-.0863.2302-.1391.2228-.1321-.0186l-.0054-.7278c-.1056-.0149-.1848-.026-.2868-.0672l-.3077.6569c-.0825.2038-.1617.1927-.1283-.045l.0738-.7167c-.102-.0413-.1812-.0524-.2567-.0899l-.40965.6156c-.10892.2001-.18814.189-.12833-.045l.15302-.7055c-.07551-.0376-.17743-.0788-.25294-.1164l-.45877.5819c-.13532.1964-.21083.1588-.12461-.0714l.23224-.6945c-.07551-.0375-.14731-.1014-.24923-.1427l-.53057.5179c-.15801.1663-.20711.1324-.12461-.0714l.33416-.6532c-.0718-.0639-.1436-.1279-.21911-.1654l-.57596.4576c-.18071.1362-.22981.1024-.0945-.0941l.40967-.6156c-.0718-.064-.14359-.1279-.18528-.2145l-.61021.3181c-.20712.1325-.25251.0723-.0945-.094l.45877-.5819c-.0718-.0639-.11348-.1505-.15887-.2108l-.66303.3108c-.20341.106-.2488.0458-.09079-.1205l.53057-.5179c-.04168-.0866-.08707-.1469-.12875-.2335l-.70471.2241c-.2261.0759-.24509.0194-.06438-.1168l.60237-.4539c-.04168-.0866-.08336-.1733-.09863-.2562l-.71999.1412c-.22239.0495-.24138-.007-.03426-.1395l.64405-.3673c-.04168-.0866-.05695-.1695-.07223-.2525l-.78807.0509c-.24509.0194-.26407-.0372-.03426-.1395l.68573-.2806c-.01527-.083-.02684-.1923-.04211-.2752l-.75053-.0247c-.24138-.007-.23396-.0598-.00785-.1358l.70471-.2241c-.01527-.0829-.00043-.1885-.0157-.2715l-.73569-.1303c-.23766-.0334-.22653-.1126-.00785-.1357l.74639-.1375c.01114-.0792-.00042-.1886.01071-.2678l-.72456-.2095c-.23395-.0598-.22281-.1391.01856-.1321l.75796-.0281c.01113-.0792.02598-.1848.03711-.2641l-.68701-.285c-.20384-.0825-.1927-.1617.04496-.1283l.74682.0511c.01114-.0793.05239-.1812.08993-.2567l-.64947-.36055c-.20013-.10891-.1927-.16173.04496-.12832l.73569.13032c.03754-.07551.07879-.17743.11633-.25294l-.61193-.43607c-.19641-.13532-.16258-.18443.07137-.12462l.72084.23595c.03754-.07551.10149-.1473.13903-.22281l-.54798-.50788c-.16629-.15801-.13246-.20712.07137-.12461l.6833.31146c.06395-.0718.10149-.14731.16544-.21911l-.48403-.57967c-.16259-.18442-.10235-.22981.09406-.09449l.64576.38697c.06395-.0718.12419-.11719.18814-.18899l-.42009-.65147c-.13247-.20712-.07594-.2261.09407-.0945l.60822.46248c.06394-.07179.15059-.11348.21454-.18527l-.32603-.74597c-.10605-.20341-.04581-.2488.12048-.09078l.54427.53428c.06024-.04539.14688-.08707.23353-.12875l-.25052-.70843c-.07593-.2261-.01941-.24509.11677-.06438l.48032.60608c.08665-.04168.17329-.08336.23353-.12875l-.16387-.7501c-.04953-.22239.00699-.24138.14317-.06067l.39364.64776c.0867-.04168.1696-.05695.2525-.07223l-.0809-.76537c-.0194-.24509.0371-.26408.1395-.03426l.307.68944c.0829-.01528.1659-.03055.2488-.04582l.0247-.75054c.007-.24137.0598-.23395.1357-.00785l.2204.73112c.083-.01527.1923-.02683.2715-.0157l.1077-.7658c.0334-.23767.0862-.23024.1357-.00785l.1639.7501c.0792.01113.1885-.00043.2678.01071l.1831-.72827c.0598-.23395.1126-.22653.132.01856l.0884.71256ZM11.3612 16.5629c2.5087.3526 4.8278-1.395 5.1804-3.9037.3525-2.5086-1.395-4.82775-3.9037-5.18032-2.5087-.35258-4.85051 1.36489-5.20308 3.87352-.35257 2.5087 1.4177 4.858 3.92638 5.2105Z"
      fill="#000"
    />
    <Path
      d="m12.6997 6.46427.0792.01114.1849.02597.2887-.71342c.0862-.23024.1353-.19641.1321.01856l-.0247.75053c.0792.01114.1811.05239.2603.06352l.3643-.67588c.1089-.20012.1617-.1927.1283.04497l-.1303.73569c.0755.03754.1774.07879.2566.08992l.4361-.61193c.1353-.19641.1844-.16258.1246.07137l-.2095.72456c.0755.03754.1774.07879.2492.14274l.4852-.5781c.158-.1663.2071-.13247.1246.07137l-.2888.71342c.0718.06395.1474.10149.2192.16543l.5569-.51415c.1844-.16258.2336-.12875.1209.09778l-.3605.64947c.0718.06395.1436.1279.189.18813l.625-.42379c.1807-.13618.2298-.10235.0945.09406l-.4699.66104c.0718.06394.1172.12418.1853.21454l.6667-.33716c.2034-.10606.2525-.07223.0908.12048l-.5079.54798c.0454.06023.1135.15059.1552.23723l.7121-.27691c.2261-.07594.2451-.01942.0644.11676l-.5797.48403.1251.25994.7274-.19399c.2224-.04953.2414.007.0644.11676l-.6251.4238c.0417.08667.057.16957.0986.25627l.7427-.1111c.2187-.0231.2641.0371.0343.1395l-.6668.3371c.0153.0829.057.1696.0686.2789l.7278-.0054c.2414.007.2339.0598.0342.1395l-.682.2542c.0153.0829.0269.1923.0421.2752l.7431.0775c.2377.0334.2303.0862.0079.1357l-.7237.1676c.0153.083.0004.1886-.0107.2678l.7019.1794c.2339.0598.2265.1127-.0186.1321l-.739.0846c-.0111.0792-.026.1849-.0371.2641l-.0037.0264.6944.2322c.2303.0862.2229.1391-.0185.1321l-.7279.0054c-.0148.1056-.0523.1811-.0672.2868l.6532.3341c.2001.1089.1927.1617-.045.1283l-.713-.1002c-.0375.0755-.0523.1812-.0899.2567l.6157.4097c.1964.1353.1625.1844-.045.1283l-.7019-.1795c-.0375.0756-.0788.1775-.1163.253l.5517.4815c.1663.158.1589.2108-.0714.1246l-.6643-.255c-.0639.0718-.1052.1737-.1691.2455l.4914.5269c.1663.158.1288.2335-.0978.1209l-.6647-.4435c-.064.0718-.1279.1436-.1919.2154l.4313.5723c.1361.1807.1023.2298-.0941.0944l-.5892-.4059c-.064.0718-.1279.1436-.2146.1853l.371.6176c.1061.2034.0722.2525-.1205.0908l-.5517-.4815c-.0903.0681-.1506.1135-.2372.1552l.2843.6593c.1024.2298.0459.2488-.1167.0644l-.4915-.5269c-.0866.0417-.1733.0834-.2599.1251l.1977.701c.0759.2261.0194.2451-.1168.0643l-.4011-.5949c-.0866.0417-.1733.0834-.2863.1213l.1148.7163c.0495.2224-.007.2414-.1395.0343l-.3409-.6404c-.0829.0153-.196.0533-.2789.0685l.0356.7052c.0194.2451-.0599.2339-.1395.0342l-.2654-.6028c-.0829.0153-.1922.0269-.2752.0422l-.0474.7204c-.007.2413-.0862.2302-.1357.0078l-.1977-.701c-.0829.0153-.1886.0004-.2979.012l-.153.7056c-.0334.2376-.1126.2265-.1358.0078l-.0582-.7352c-.1056-.0149-.1849-.026-.2942-.0144l-.2322.6944c-.0863.2302-.1391.2228-.1321-.0186l-.0054-.7278c-.1056-.0149-.1848-.026-.2868-.0672l-.3077.6569c-.0825.2038-.1617.1927-.1283-.045l.0738-.7167c-.102-.0413-.1812-.0524-.2567-.0899l-.40965.6156c-.10892.2001-.18814.189-.12833-.045l.15302-.7055c-.07551-.0376-.17743-.0788-.25294-.1164l-.45877.5819c-.13532.1964-.21083.1588-.12461-.0714l.23224-.6945c-.07551-.0375-.14731-.1014-.24923-.1427l-.53057.5179c-.15801.1663-.20711.1324-.12461-.0714l.33416-.6532c-.0718-.0639-.1436-.1279-.21911-.1654l-.57596.4576c-.18071.1362-.22981.1024-.0945-.0941l.40967-.6156c-.0718-.064-.14359-.1279-.18528-.2145l-.61021.3181c-.20712.1325-.25251.0723-.0945-.094l.45877-.5819c-.0718-.0639-.11348-.1505-.15887-.2108l-.66303.3108c-.20341.106-.2488.0458-.09079-.1205l.53057-.5179c-.04168-.0866-.08707-.1469-.12875-.2335l-.70471.2241c-.2261.0759-.24509.0194-.06438-.1168l.60237-.4539c-.04168-.0866-.08336-.1733-.09863-.2562l-.71999.1412c-.22239.0495-.24138-.007-.03426-.1395l.64405-.3673c-.04168-.0866-.05695-.1695-.07223-.2525l-.78807.0509c-.24509.0194-.26407-.0372-.03426-.1395l.68573-.2806c-.01527-.083-.02684-.1923-.04211-.2752l-.75053-.0247c-.24138-.007-.23396-.0598-.00785-.1358l.70471-.2241c-.01527-.0829-.00043-.1885-.0157-.2715l-.73569-.1303c-.23766-.0334-.22653-.1126-.00785-.1357l.74639-.1375c.01114-.0792-.00042-.1886.01071-.2678l-.72456-.2095c-.23395-.0598-.22281-.1391.01856-.1321l.75796-.0281c.01113-.0792.02598-.1848.03711-.2641l-.68701-.285c-.20384-.0825-.1927-.1617.04496-.1283l.74682.0511c.01114-.0793.05239-.1812.08993-.2567l-.64947-.36055c-.20013-.10891-.1927-.16173.04496-.12832l.73569.13032c.03754-.07551.07879-.17743.11633-.25294l-.61193-.43607c-.19641-.13532-.16258-.18443.07137-.12462l.72084.23595c.03754-.07551.10149-.1473.13903-.22281l-.54798-.50788c-.16629-.15801-.13246-.20712.07137-.12461l.6833.31146c.06395-.0718.10149-.14731.16544-.21911l-.48403-.57967c-.16259-.18442-.10235-.22981.09406-.09449l.64576.38697c.06395-.0718.12419-.11719.18814-.18899l-.42009-.65147c-.13247-.20712-.07594-.2261.09407-.0945l.60822.46248c.06394-.07179.15059-.11348.21454-.18527l-.32603-.74597c-.10605-.20341-.04581-.2488.12048-.09078l.54427.53428c.06024-.04539.14688-.08707.23353-.12875l-.25052-.70843c-.07593-.2261-.01941-.24509.11677-.06438l.48032.60608c.08665-.04168.17329-.08336.23353-.12875l-.16387-.7501c-.04953-.22239.00699-.24138.14317-.06067l.39364.64776c.0867-.04168.1696-.05695.2525-.07223l-.0809-.76537c-.0194-.24509.0371-.26408.1395-.03426l.307.68944c.0829-.01528.1659-.03055.2488-.04582l.0247-.75054c.007-.24137.0598-.23395.1357-.00785l.2204.73112c.083-.01527.1923-.02683.2715-.0157l.1077-.7658c.0334-.23767.0862-.23024.1357-.00785l.1639.7501c.0792.01113.1885-.00043.2678.01071l.1831-.72827c.0598-.23395.1126-.22653.132.01856l.0884.71256ZM11.3612 16.5629c2.5087.3526 4.8278-1.395 5.1804-3.9037.3525-2.5086-1.395-4.82775-3.9037-5.18032-2.5087-.35258-4.85051 1.36489-5.20308 3.87352-.35257 2.5087 1.4177 4.858 3.92638 5.2105Z"
      fill="#7F7F7F"
    />
    <Path
      d="m12.6997 6.46427.0792.01114.1849.02597.2887-.71342c.0862-.23024.1353-.19641.1321.01856l-.0247.75053c.0792.01114.1811.05239.2603.06352l.3643-.67588c.1089-.20012.1617-.1927.1283.04497l-.1303.73569c.0755.03754.1774.07879.2566.08992l.4361-.61193c.1353-.19641.1844-.16258.1246.07137l-.2095.72456c.0755.03754.1774.07879.2492.14274l.4852-.5781c.158-.1663.2071-.13247.1246.07137l-.2888.71342c.0718.06395.1474.10149.2192.16543l.5569-.51415c.1844-.16258.2336-.12875.1209.09778l-.3605.64947c.0718.06395.1436.1279.189.18813l.625-.42379c.1807-.13618.2298-.10235.0945.09406l-.4699.66104c.0718.06394.1172.12418.1853.21454l.6667-.33716c.2034-.10606.2525-.07223.0908.12048l-.5079.54798c.0454.06023.1135.15059.1552.23723l.7121-.27691c.2261-.07594.2451-.01942.0644.11676l-.5797.48403.1251.25994.7274-.19399c.2224-.04953.2414.007.0644.11676l-.6251.4238c.0417.08667.057.16957.0986.25627l.7427-.1111c.2187-.0231.2641.0371.0343.1395l-.6668.3371c.0153.0829.057.1696.0686.2789l.7278-.0054c.2414.007.2339.0598.0342.1395l-.682.2542c.0153.0829.0269.1923.0421.2752l.7431.0775c.2377.0334.2303.0862.0079.1357l-.7237.1676c.0153.083.0004.1886-.0107.2678l.7019.1794c.2339.0598.2265.1127-.0186.1321l-.739.0846c-.0111.0792-.026.1849-.0371.2641l-.0037.0264.6944.2322c.2303.0862.2229.1391-.0185.1321l-.7279.0054c-.0148.1056-.0523.1811-.0672.2868l.6532.3341c.2001.1089.1927.1617-.045.1283l-.713-.1002c-.0375.0755-.0523.1812-.0899.2567l.6157.4097c.1964.1353.1625.1844-.045.1283l-.7019-.1795c-.0375.0756-.0788.1775-.1163.253l.5517.4815c.1663.158.1589.2108-.0714.1246l-.6643-.255c-.0639.0718-.1052.1737-.1691.2455l.4914.5269c.1663.158.1288.2335-.0978.1209l-.6647-.4435c-.064.0718-.1279.1436-.1919.2154l.4313.5723c.1361.1807.1023.2298-.0941.0944l-.5892-.4059c-.064.0718-.1279.1436-.2146.1853l.371.6176c.1061.2034.0722.2525-.1205.0908l-.5517-.4815c-.0903.0681-.1506.1135-.2372.1552l.2843.6593c.1024.2298.0459.2488-.1167.0644l-.4915-.5269c-.0866.0417-.1733.0834-.2599.1251l.1977.701c.0759.2261.0194.2451-.1168.0643l-.4011-.5949c-.0866.0417-.1733.0834-.2863.1213l.1148.7163c.0495.2224-.007.2414-.1395.0343l-.3409-.6404c-.0829.0153-.196.0533-.2789.0685l.0356.7052c.0194.2451-.0599.2339-.1395.0342l-.2654-.6028c-.0829.0153-.1922.0269-.2752.0422l-.0474.7204c-.007.2413-.0862.2302-.1357.0078l-.1977-.701c-.0829.0153-.1886.0004-.2979.012l-.153.7056c-.0334.2376-.1126.2265-.1358.0078l-.0582-.7352c-.1056-.0149-.1849-.026-.2942-.0144l-.2322.6944c-.0863.2302-.1391.2228-.1321-.0186l-.0054-.7278c-.1056-.0149-.1848-.026-.2868-.0672l-.3077.6569c-.0825.2038-.1617.1927-.1283-.045l.0738-.7167c-.102-.0413-.1812-.0524-.2567-.0899l-.40965.6156c-.10892.2001-.18814.189-.12833-.045l.15302-.7055c-.07551-.0376-.17743-.0788-.25294-.1164l-.45877.5819c-.13532.1964-.21083.1588-.12461-.0714l.23224-.6945c-.07551-.0375-.14731-.1014-.24923-.1427l-.53057.5179c-.15801.1663-.20711.1324-.12461-.0714l.33416-.6532c-.0718-.0639-.1436-.1279-.21911-.1654l-.57596.4576c-.18071.1362-.22981.1024-.0945-.0941l.40967-.6156c-.0718-.064-.14359-.1279-.18528-.2145l-.61021.3181c-.20712.1325-.25251.0723-.0945-.094l.45877-.5819c-.0718-.0639-.11348-.1505-.15887-.2108l-.66303.3108c-.20341.106-.2488.0458-.09079-.1205l.53057-.5179c-.04168-.0866-.08707-.1469-.12875-.2335l-.70471.2241c-.2261.0759-.24509.0194-.06438-.1168l.60237-.4539c-.04168-.0866-.08336-.1733-.09863-.2562l-.71999.1412c-.22239.0495-.24138-.007-.03426-.1395l.64405-.3673c-.04168-.0866-.05695-.1695-.07223-.2525l-.78807.0509c-.24509.0194-.26407-.0372-.03426-.1395l.68573-.2806c-.01527-.083-.02684-.1923-.04211-.2752l-.75053-.0247c-.24138-.007-.23396-.0598-.00785-.1358l.70471-.2241c-.01527-.0829-.00043-.1885-.0157-.2715l-.73569-.1303c-.23766-.0334-.22653-.1126-.00785-.1357l.74639-.1375c.01114-.0792-.00042-.1886.01071-.2678l-.72456-.2095c-.23395-.0598-.22281-.1391.01856-.1321l.75796-.0281c.01113-.0792.02598-.1848.03711-.2641l-.68701-.285c-.20384-.0825-.1927-.1617.04496-.1283l.74682.0511c.01114-.0793.05239-.1812.08993-.2567l-.64947-.36055c-.20013-.10891-.1927-.16173.04496-.12832l.73569.13032c.03754-.07551.07879-.17743.11633-.25294l-.61193-.43607c-.19641-.13532-.16258-.18443.07137-.12462l.72084.23595c.03754-.07551.10149-.1473.13903-.22281l-.54798-.50788c-.16629-.15801-.13246-.20712.07137-.12461l.6833.31146c.06395-.0718.10149-.14731.16544-.21911l-.48403-.57967c-.16259-.18442-.10235-.22981.09406-.09449l.64576.38697c.06395-.0718.12419-.11719.18814-.18899l-.42009-.65147c-.13247-.20712-.07594-.2261.09407-.0945l.60822.46248c.06394-.07179.15059-.11348.21454-.18527l-.32603-.74597c-.10605-.20341-.04581-.2488.12048-.09078l.54427.53428c.06024-.04539.14688-.08707.23353-.12875l-.25052-.70843c-.07593-.2261-.01941-.24509.11677-.06438l.48032.60608c.08665-.04168.17329-.08336.23353-.12875l-.16387-.7501c-.04953-.22239.00699-.24138.14317-.06067l.39364.64776c.0867-.04168.1696-.05695.2525-.07223l-.0809-.76537c-.0194-.24509.0371-.26408.1395-.03426l.307.68944c.0829-.01528.1659-.03055.2488-.04582l.0247-.75054c.007-.24137.0598-.23395.1357-.00785l.2204.73112c.083-.01527.1923-.02683.2715-.0157l.1077-.7658c.0334-.23767.0862-.23024.1357-.00785l.1639.7501c.0792.01113.1885-.00043.2678.01071l.1831-.72827c.0598-.23395.1126-.22653.132.01856l.0884.71256ZM11.3612 16.5629c2.5087.3526 4.8278-1.395 5.1804-3.9037.3525-2.5086-1.395-4.82775-3.9037-5.18032-2.5087-.35258-4.85051 1.36489-5.20308 3.87352-.35257 2.5087 1.4177 4.858 3.92638 5.2105Z"
      fill="#777"
    />
    <Path
      d="M21.3595 12.4797c.3467-.0533.3467-.1333 0-.2133l-.9867-.1867V11.5997l.96-.24c.3467-.08.32-.1867-.0266-.2133l-.9867-.08c-.0267-.16-.0267-.2934-.0533-.4534l.9333-.3466c.32-.1334.32-.2134-.0267-.2134l-.9866.0267c-.0267-.16001-.08-.29335-.1067-.45335l.88-.45333c.32-.16.2667-.24-.0533-.18667l-.9867.16c-.0533-.13333-.1067-.29333-.16-.42666l.8267-.56c.2933-.21334.24-.29333-.08-.18667l-.96.26667c-.08-.13333-.1334-.26667-.2134-.4l.7467-.66667c.2667-.24.2133-.32-.1067-.18666l-.9066.37333c-.08-.13333-.1867-.26667-.2667-.37333l.6667-.74667c.24-.26667.1866-.32-.1334-.16l-.9333.48c-.1067-.10667-.1867-.24-.2933-.34667l.5866-.82666c.2134-.29334.1334-.34667-.16-.16l-.8.58666c-.1066-.10666-.2133-.21333-.3466-.29333l.48-.88c.16-.32.08-.37333-.16-.13333l-.72.66666c-.1334-.08-.24-.18666-.3734-.26666l.3734-.93333c.1333-.32.0533-.37334-.1867-.10667l-.64.74666c-.1333-.07999-.2667-.13333-.4-.21333l.24-.96c.08-.34666 0-.37333-.1867-.08l-.5333.82667c-.1333-.05333-.2933-.10667-.4267-.16l.1334-.98667c.0533-.34666-.0267-.37333-.1867-.05333l-.4533.88c-.1334-.05333-.2934-.08-.4534-.10667l.0267-.98666c0-.34667-.08-.37334-.2133-.02667l-.3467.93333c-.16-.02666-.2933-.05333-.4533-.05333l-.16-.96c-.0267-.34667-.1334-.34667-.2134-.02667l-.24.96H11.8395l-.2133-.98666c-.08-.34667-.16-.34667-.2134 0l-.1066.98666c-.16 0-.2934.02667-.4534.05334l-.3466-.93334c-.1067-.32-.2134-.32-.2134.02667l.0267.98667c-.16.02666-.2933.05333-.45334.10666l-.42666-.90666c-.16-.32-.24-.29334-.21334.05333l.10667.98667c-.13333.05333-.29333.10666-.42666.16l-.53334-.82667c-.18666-.29333-.26666-.26667-.18666.08l.24.96c-.13334.05333-.26667.13333-.4.21333l-.64-.77333c-.21334-.26667-.29334-.21333-.18667.10667l.34667.93333c-.13334.08-.26667.16-.37334.24l-.71999-.69333c-.26667-.24-.32-.18667-.16001.13333l.45334.88c-.10667.10666-.24.18666-.34667.29333l-.8-.58667c-.29333-.21333-.34666-.13333-.16.13334l.56.82666c-.10666.10667-.21333.21334-.32.34667l-.85333-.50667c-.29333-.18666-.37333-.10666-.13333.16l.64.74667c-.08.10667-.18667.24-.26667.37333l-.90667-.4c-.32-.13333-.37333-.05333-.10666.18667l.74666.66667c-.08.13333-.16.26666-.21333.39999l-.96-.26666c-.34667-.10667-.37333 0-.08.18666l.8.56c-.05333.13334-.13333.26667-.18667.42667l-.98666-.16c-.34667-.05333-.37334.02667-.08.18667l.88.48c-.05334.13333-.08.29333-.13334.42666l-.98666-.02666c-.34667 0-.37333.08-.05334.21331l.93334.3467c-.02667.16-.05334.2933-.08.4533l-.98667.1334c-.34666.0266-.34666.1066-.02667.2133l.96.2667c0 .16-.02666.2933-.02666.4533l-.98667.1867c-.34666.0533-.34666.16 0 .2133l.98667.1333c0 .16.02666.2934.02666.4534l-.96.2933c-.34666.1066-.31999.1866.02667.2133l.98667.0267c.02666.16.05333.2933.08.4533l-.90667.4267c-.32.16-.29333.24.05333.2133l.98667-.1067c.05333.16.08.2934.13333.4534l-.85333.5066c-.29333.1867-.26667.2667.08.1867l.98667-.2133c.05333.1333.13333.2666.18666.4266l-.77333.6134c-.26667.2133-.24.2933.10667.1866l.93333-.32c.08.1334.16.2667.24.4l-.64.64c-.24.24-.18667.32.10667.16l.90666-.4266c.08.1333.18667.24.29334.3466l-.61334.7734c-.21333.2666-.16.3466.13334.16l.82666-.5334c.10667.1067.21333.2134.32.32l-.50666.8534c-.18667.2933-.10667.3466.16.1333l.77333-.64c.10666.1067.24.1867.37333.2933l-.42667.9067c-.16.32-.08.3733.16.1067l.69334-.72.4.24-.32.9333c-.10667.32-.02667.3733.18666.1067l.61334-.8c.13333.0533.26666.1333.42666.1866l-.18666.9867c-.08.3467.02666.3733.18666.08l.50667-.8533c.13333.0533.29333.1066.42667.1333l-.10667 1.0133c-.02667.3467.05333.3734.21333.0534l.39997-.9067c.16.0267.2934.0533.4534.08l.0533.9867c.0267.3466.1067.3466.2133.0266l.2667-.96c.16.0267.32.0267.4533.0267l.16.9867c.0534.3466.1334.3466.2134 0l.1866-.9867c.16 0 .2934 0 .4534-.0267l.2666.96c.1067.3467.1867.32.2134-.0266l.0533-.9867c.16-.0267.2933-.0533.4533-.08l.3734.9067c.1333.32.2133.2933.2133-.0534l-.1067-.9333c.16-.0267.2934-.08.4267-.1333l.5067.8533c.1866.2933.2666.2667.1866-.08l-.1866-.9867c.1333-.0533.2933-.1066.4266-.1866l.5867.8c.2133.2933.2933.24.1867-.1067l-.2667-.9067c.1333-.08.2667-.16.4-.24l.6667.72c.24.2667.32.2134.1866-.1066l-.4-.9067c.1334-.08.24-.1867.3734-.2667l.7733.64c.2667.2134.3467.16.16-.1333l-.5067-.8533.32-.32.8267.5333c.2933.1867.3467.1333.1333-.16l-.6133-.7733c.1067-.1067.1867-.24.2933-.3467l.9067.4533c.32.16.3733.08.1333-.16l-.72-.72c.08-.1333.16-.24.24-.3733l.9334.32c.32.1067.3733.0267.1066-.1867l-.7733-.6133c.08-.1333.1333-.2667.2133-.4267l.96.2134c.3467.08.3734 0 .08-.1867l-.8533-.5333c.0533-.1334.1067-.2934.16-.4267l.9867.1067c.3466.0266.3733-.0534.0533-.2134l-.9067-.4266c.0267-.16.08-.2934.1067-.4534l.9867-.0266c.3466 0 .3733-.1067.0266-.2133l-.9333-.2401c.0267-.1599.0267-.2933.0533-.4533l.9867-.1333ZM8.50617 17.173c-.26667.48-.96.5333-1.38667.2933-.29333-.16-.98666-.8266-1.62666-1.8666-.58667-1.0667-.90667-2.2667-.90667-3.5733 0-2.18671.93333-4.13338 2.45333-5.49338.48-.26666 1.14667-.21333 1.41333.24l2.63997 4.53338c.2134.3733.2134 1.0933-.0266 1.4666l-2.56003 4.4Zm9.20003-.48c-.8534 1.0133-1.9467 1.8133-3.2267 2.2667-1.6533.48-3.8133.5066-4.64.0533-.56-.2667-.77333-.8533-.50667-1.3333l2.61337-4.5334c.2133-.3733.7733-.6933 1.2-.6933h5.0933c.56 0 .9333.48.9333.96 0 .4267-.3466 1.8933-1.4666 3.28Zm-6.1067-4.6933c0-.2133.1867-.4.4-.4.2133 0 .4.1867.4.4 0 .2133-.1867.4-.4.4-.2133 0-.4-.1867-.4-.4Zm6.7467-.48h-5.3334c-.4533-.0267-.9866-.4-1.2-.8L9.2795 6.31969c-.26667-.48.02667-1.01333.45333-1.25333.29337-.16 1.22667-.45334 2.45337-.45334 3.4933.08 6.3733 2.61334 7.04 5.91998.08.56-.4.9867-.88.9867Z"
      fill="url(#c)"
    />
    <Defs>
      <LinearGradient
        id="b"
        x1="11.9963"
        y1=".00747"
        x2="11.9963"
        y2="23.9994"
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#D3D7DD" />
        <Stop offset="1" stopColor="#888C90" />
      </LinearGradient>
      <LinearGradient
        id="c"
        x1="11.9942"
        y1="2.38536"
        x2="11.9942"
        y2="21.6406"
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#D9DADB" />
        <Stop offset="1" stopColor="#7D8082" />
      </LinearGradient>
    </Defs>
  </Svg>
);

export default IconSystemSettingsiOS;
