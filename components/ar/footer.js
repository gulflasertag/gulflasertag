import Link from 'next/link'

export default function Footer() {
    return (
        <div>
            <div class="topFooter rtl">
                <div class="container">
                    <div class="row">

                        <div class="col-md-4 col-sm-12">
                            <h2 class="footerTitle">الصفحات</h2>
                            <ul>
                                <li>
                                    <Link href="/about">
                                        عن ليزر تاج
                                        
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/contact">
                                        اتصل بنا
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/mars">
                                        الـمـريـخ لـلـواقـع الافـتـراضي
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/airbunker">
                                        المخابئ الهوائية
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/designArenas">
                                        تصميم الساحات
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/#services">
                                        تقديم خدمات
                                    </Link>
                                </li>


                            </ul>
                        </div>
                        <div class="col-md-4 col-sm-12">
                            <h2 class="footerTitle">روابط سريعة</h2>
                            <ul>
                                <li>
                                    <Link href="/outdoor/taggers">
                                        البنادق
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/outdoor/additional-devices-with-taggers">
                                        أجهزة إضافية مع البنادق
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/outdoor/softwares">
                                        البرامج
                                    </Link>
                                </li>

                                <li>
                                    <Link href="/outdoor/game-scenario-devices">
                                        أجهزة سيناريو الألعاب الخارجية.
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/indoor">
                                        غالاكسي إكليبس الداخلي
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/indoor/game-scenario">
                                        أجهزة سيناريو الألعاب الداخلية
                                    </Link>
                                </li>
                            </ul>
                        </div>


                        <div class="col-md-4 col-sm-12">
                            <div class="footerLogo">
                                <Link href="/en">

                                    <img src="/img/logo.png" alt="logo-lasrertag"
                                        style={
                                            {"transform": "none"}
                                        }/>

                                </Link>
                            </div>
                            <p>ليزر تاج الخليج هو الممثل الرسمي لموقع lasertag.net في الإمارات العربية المتحدة والمملكة العربية السعودية.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="bottomFooter rtl">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">@ 2023 حقوق الطبع والنشر.ليزر تاج الخليج
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}
