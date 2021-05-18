import Link from 'next/link'

export default function header() {
    return (
        <div>
            <nav class="main_menu navbar navbar-default">
                <div class="container">
                    {/* <!-- Brand and toggle get grouped for better mobile display --> */}
                    <div class="navbar-header">
                        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                            <span class="sr-only">Toggle navigation</span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                        </button>
                        <Link href="/en">
                            <a class="navbar-brand">
                                <img src="/img/logo.png" alt="logo-lasrertag"/>
                            </a>
                        </Link>
                    </div>

                    {/* <!-- Collect the nav links, forms, and other content for toggling --> */}
                    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul class="nav navbar-nav">

                            <li>
                                <Link href="/en">
                                    <a title="home">Home</a>
                                </Link>
                            </li>
                            <li class="dropdown">
                                <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                                    Laser tag
                                    <span class="caret"></span>
                                </a>
                                <ul class="dropdown-menu">
                                    <li>
                                        <Link href="/en/outdoor">
                                            <a title="Outdoor">OutDoor</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/en/indoor">
                                            <a title="Indoor">Indoor</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/en/airbunker">
                                            <a title="Air Bunker">Air Bunker</a>
                                        </Link>
                                    </li>
                                </ul>
                            </li>

                            <li>
                                <Link href="/en/designArenas">
                                    <a title="Designing of Arenas ">Designing of Arenas
                                    </a>
                                </Link>
                            </li>

                            <li>
                                <Link href="/en/about">
                                    <a title="about us">
                                        About us
                                    </a>
                                </Link>
                            </li>

                            <li>
                                <Link href="/en/contact">
                                    <a title="contact us">Contact us</a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                {/* <!-- /.container-fluid --> */} </nav>
        </div>
    )
}
