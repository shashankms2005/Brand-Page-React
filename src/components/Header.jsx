import React from "react";
import HeaderInfo from "./HeaderInfo";

function Header(){
return (
    <div className="nav">
        <img src={"https://s3-alpha-sig.figma.com/img/4517/5a94/d5389cc06b9d40c646878c60ac4bf7ed?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=meVW8NtuE17WVv~pJUx2MpXHshXGbcQwA69oRY2C4mS97g~qsHk-sC73j6fVDJuF8csDpRGesfcw3SsIW86Q3JkUivYgaTEjwG0ObDEkXoIRzM7Dcyh-QZqloZnidi2haGvwd9AU7NreF~1gPcBKjZXKmpDsKCT2GfYN4u8xKXZDgA2EDM35XLv6AIkU1SAPk8hg7~ObwLLbN5K5qA6v5hovArj-oTZWxc3pdzxb3JWe-~HfeuyZm3c7jlXFOioN5-b02rHKYss8Xy5gVZlnIYCeims0zQk5yS0uXaefzbIkHTK2RRD4B3dIFCg7rtNVnMzRPO1mLxmM~9NedcakcQ__"} />
        <div className="navMid">
        <HeaderInfo info={"menu"} />
        <HeaderInfo info={"location"} />
        <HeaderInfo info={"about"} />
        <HeaderInfo info={"contacts"} />
       </div>
        <button href="#">Login</button>
    </div>
);
}

export default Header;