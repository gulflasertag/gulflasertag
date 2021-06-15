import Link from 'next/link'

export default function header() {
    return (<div>
        <nav class="main_menu navbar navbar-default rtl">
            <div class="container"> {/* <!-- Collect the nav links, forms, and other content for toggling --> */}
                <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <ul class="nav navbar-nav">

                        <li>
                            <Link href="/">
                                <a title="home">الصفحة ‏الرئيسية
                                </a>
                            </Link>
                        </li>
                        <li class="dropdown">
                            <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                                ليزر تاج
                                <span class="caret"></span>
                            </a>
                            <ul class="dropdown-menu">
                                <li>
                                    <Link href="/outdoor">
                                        <a title="Outdoor">ليزر تاج الخارجي
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/indoor">
                                        <a title="Indoor">ليزر تاج الداخلي</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/mars">
                                        <a title="mars">الـمـريـخ لـلـواقـع الافـتـراضي</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/airbunker">
                                        <a title="Air Bunker">المخابئ الهوائية
                                        </a>
                                    </Link>
                                </li>
                            </ul>
                        </li>

                        <li>
                            <Link href="/designArenas">
                                <a title="Designing of Arenas ">تصميم الساحات
                                </a>
                            </Link>
                        </li>

                        <li>
                            <Link href="/about">
                                <a title="about us">
                                    معلومات عنا
                                </a>
                            </Link>
                        </li>

                        <li>
                            <Link href="/contact">
                                <a title="contact us">اتصل بنا</a>
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* <!-- Brand and toggle get grouped for better mobile display --> */}
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <Link href="/">
                        <a class="navbar-brand">
                            <img src="/img/logo.png" alt="logo-lasrertag" class="nortlimg"/>
                        </a>
                    </Link>
                </div>
            </div>
            {/* <!-- /.container-fluid --> */} </nav>
    </div>)
}
