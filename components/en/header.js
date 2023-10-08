import Link from 'next/link'

export default function header() {
    return (
        <div>
            <nav className="main_menu navbar navbar-default">
                <div class="container"> {/* <!-- Brand and toggle get grouped for better mobile display --> */}
                    <div class="navbar-header">
                        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                            <span class="sr-only">Toggle navigation</span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                        </button>
                        <Link href="/en" class="navbar-brand">

                            <img src="/img/logo.png" alt="logo-lasrertag"/>

                        </Link>
                    </div>

                    {/* <!-- Collect the nav links, forms, and other content for toggling --> */}
                    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul class="nav navbar-nav">

                            <li>
                                <Link href="/en" title="home">
                                    Home
                                </Link>
                            </li>
                            <li class="dropdown">
                                <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                                    Laser tag
                                    <span class="caret"></span>
                                </a>
                                <ul class="dropdown-menu">
                                    <li>
                                        <Link href="/en/outdoor" title="Outdoor">
                                            Netronic (OutDoor)
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/en/indoor" title="Indoor">
                                            Galaxy Eclipse (Indoor)
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/en/mars" title="mars">
                                            VION VR
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/en/airbunker" title="Air Bunker">
                                            Air Bunker
                                        </Link>
                                    </li>
                                </ul>
                            </li>

                            <li>
                                <Link href="/en/designArenas" title="Designing of Arenas ">
                                    Designing of Arenas
                                    
                                </Link>
                            </li>

                            <li>
                                <Link href="/en/about" title="about us">
                                    
                                        About us
                                    
                                </Link>
                            </li>

                            <li>
                                <Link href="/en/contact" title="contact us">
                                    Contact us
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                {/* <!-- /.container-fluid --> */} </nav>
        </div>
    );
}
