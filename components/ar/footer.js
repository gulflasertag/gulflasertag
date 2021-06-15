import Link from 'next/link'

export default function Footer() {
    return (<div>
        <div class="topFooter rtl">
            <div class="container">
                <div class="row">

                    <div class="col-md-4 col-sm-12">
                        <h2 class="footerTitle">الصفحات</h2>
                        <ul>
                            <li>
                                <Link href="/about">
                                    <a>عن ليزر تاج
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact">
                                    <a>اتصل بنا</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/mars">
                                    <a>الـمـريـخ لـلـواقـع الافـتـراضي</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/airbunker">
                                    <a>المخابئ الهوائية</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/designArenas">
                                    <a>تصميم الساحات</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/#services">
                                    <a>تقديم خدمات</a>
                                </Link>
                            </li>


                        </ul>
                    </div>
                    <div class="col-md-4 col-sm-12">
                        <h2 class="footerTitle">روابط سريعة</h2>
                        <ul>
                            <li>
                                <Link href="/outdoor/taggers">
                                    <a>البنادق</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/outdoor/additional-devices-with-taggers">
                                    <a>أجهزة إضافية مع البنادق</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/outdoor/softwares">
                                    <a>البرامج</a>
                                </Link>
                            </li>

                            <li>
                                <Link href="/outdoor/game-scenario-devices">
                                    <a>أجهزة سيناريو الألعاب الخارجية.</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/indoor">
                                    <a>غالاكسي إكليبس الداخلي</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/indoor/game-scenario">
                                    <a>أجهزة سيناريو الألعاب الداخلية</a>
                                </Link>
                            </li>
                        </ul>
                    </div>


                    <div class="col-md-4 col-sm-12">
                        <div class="footerLogo">
                            <Link href="/en">
                                <a>
                                    <img src="/img/logo.png" alt="logo-lasrertag"
                                        style={
                                            {"transform": "none"}
                                        }/>
                                </a>
                            </Link>
                        </div>
                        <p>ليزر تاج الخليج هو الممثل الرسمي لموقع gulflasertag.net في الإمارات العربية المتحدة والمملكة العربية السعودية.
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

    </div>)
}
