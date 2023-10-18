import Link from 'next/link'

export default function header() {
    return (
        <div>
            <nav className="main_menu navbar navbar-default rtl">
                <div class="container"> {/* <!-- Collect the nav links, forms, and other content for toggling --> */}
                    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul class="nav navbar-nav">

                            <li>
                                <Link href="/" title="home">
                                    الصفحة ‏الرئيسية
                                    
                                </Link>
                            </li>
                            <li class="dropdown">
                                <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                                    ليزر تاج
                                    <span class="caret"></span>
                                </a>
                                <ul class="dropdown-menu">
                                    <li>
                                        <Link href="/outdoor" title="Outdoor">
                                            ليزر تاج الخارجي
                                            
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/indoor" title="Indoor">
                                            ليزر تاج الداخلي
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/mars" title="mars">
                                        فيون للواقع الافتراضي
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/airbunker" title="Air Bunker">
                                            المخابئ الهوائية
                                            
                                        </Link>
                                    </li>
                                </ul>
                            </li>

                            <li>
                                <Link href="/designArenas" title="Designing of Arenas ">
                                    تصميم الساحات
                                    
                                </Link>
                            </li>

                            <li>
                                <Link href="/about" title="about us">
                                    
                                        معلومات عنا
                                    
                                </Link>
                            </li>

                            <li>
                                <Link href="/contact" title="contact us">
                                    اتصل بنا
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
                        <Link href="/" class="navbar-brand">

                            <img src="/img/logo.png" alt="logo-lasrertag" class="nortlimg"/>

                        </Link>
                    </div>
                </div>
                {/* <!-- /.container-fluid --> */} </nav>
        </div>
    );
}
