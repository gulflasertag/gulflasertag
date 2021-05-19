import Link from 'next/link'

export default function Footer() {
    return (
        <div>
            <div class="topFooter">
                <div class="container">
                    <div class="row">
                        <div class="col-md-3 col-sm-6">
                            <h2 class="footerTitle">About</h2>
                            <div class="footerLogo">
                                <Link href="/en">
                                    <a>
                                        <img src="/img/logo.png" alt="logo-lasrertag"/>
                                    </a>
                                </Link>
                            </div>
                            <p>“Gulf laser tag is the official representative of lasertag.net in United Arab Emirates and Kingdom of Saudi Arabia.
                            </p>
                        </div>
                        <div class="col-md-3 col-sm-6">
                            <h2 class="footerTitle">Quick Links</h2>
                            <ul>
                                <li>
                                    <Link href="/en/outdoor/taggers">
                                        <a>Taggers</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/en/outdoor/additional-devices-with-taggers">
                                        <a>Additional Devices With Taggers</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/en/outdoor/game-scenario-devices">
                                        <a>Game Scenario Devices</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/en/outdoor/softwares">
                                        <a>Softwares</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/en/#services">
                                        <a>Services Provided</a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div class="col-md-3 col-sm-6">
                            <h2 class="footerTitle">Quick Links</h2>
                            <ul>
                                <li>
                                    <Link href="/en/outdoor">
                                        <a>Netronic Outdoor Laser tag System
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/en/indoor">
                                        <a>Indoor Galaxy Eclipse</a>
                                    </Link>
                                </li>

                                <li>
                                    <Link href="/en/indoor/game-scenario">
                                        <a>Indoor Galaxy Eclipse Game Scenario</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/en/airbunker">
                                        <a>Airbunker</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/en/designArenas">
                                        <a>Designing of Arenas</a>
                                    </Link>
                                </li>

                            </ul>
                        </div>
                        <div class="col-md-3 col-sm-6">
                            <h2 class="footerTitle">Pages</h2>
                            <ul>
                                <li>
                                    <Link href="/en/outdoor">
                                        <a>About
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/en/indoor">
                                        <a>Contact</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/en/designArenas">
                                        <a>Designing of Arenas</a>
                                    </Link>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="bottomFooter">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">@ 2021 Copyright. Gulf LaserTag</div>
                    </div>
                </div>
            </div>

        </div>
    )
}
