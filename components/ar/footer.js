import Link from 'next/link'

export default function Footer() {
    return (
        <div>
            <div class="topFooter rtl">
                <div class="container">
                    <div class="row">
                        <div class="col-md-3 col-sm-6">
                            <h2 class="footerTitle">الصفحات</h2>
                            <ul>
                                <li>
                                    <Link href="/about">
                                        <a>عن ليزر تاج الخليج
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/contact">
                                        <a>اتصال</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/designArenas">
                                        <a>تصميم الساحات</a>
                                    </Link>
                                </li>

                            </ul>
                        </div>
                        <div class="col-md-3 col-sm-6">
                            <h2 class="footerTitle">روابط سريعة</h2>
                            <ul>
                                <li>
                                    <Link href="/outdoor">
                                        <a>
                                            ليزر تاج الخارجي
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/indoor">
                                        <a>
                                            ليزر تاج الداخلي</a>
                                    </Link>
                                </li>

                                <li>
                                    <Link href="/indoor/game-scenario">
                                        <a>داخلي غالاكسي الكسوف لعبة سيناريو</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/airbunker">
                                        <a>
                                            المخابئ الهوائية
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/designArenas">
                                        <a>تصميم الساحات</a>
                                    </Link>
                                </li>

                            </ul>
                        </div>
                        <div class="col-md-3 col-sm-6">
                            <h2 class="footerTitle">روابط سريعة</h2>
                            <ul>
                                <li>
                                    <Link href="/outdoor/taggers">
                                        <a>البنادق</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/outdoor/additional-devices-with-taggers">
                                        <a>أجهزة إضافية مع علامات</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/outdoor/game-scenario-devices">
                                        <a>أجهزة سيناريو اللعبة</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/outdoor/softwares">
                                        <a>البرامج</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/#services">
                                        <a>تقديم خدمات</a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div class="col-md-3 col-sm-6">
                            <h2 class="footerTitle">حول</h2>
                            <div class="footerLogo">
                                <Link href="/">
                                    <a>
                                        <img src="/img/logo.png" alt="logo-lasrertag"
                                            style={
                                                {"transform": "none"}
                                            }/>
                                    </a>
                                </Link>
                            </div>
                            <p>جلف ليزر تاغ هو الممثل الرسمي لموقع lasertag.net في الإمارات العربية المتحدة والمملكة العربية السعودية.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="bottomFooter rtl">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">@ 2021 حقوق الطبع والنشر.ليزر تاج الخليج
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
