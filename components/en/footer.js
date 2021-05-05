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
                                <Link href="/">
                                    <a>
                                        <img src="/img/logo.png" alt="logo-lasrertag"/>
                                    </a>
                                </Link>
                            </div>
                            <p>An ambitious design that inspires action. A safe game in which there is no place for aggression. Unique modes that make players superheroes.
                            </p>
                        </div>
                        <div class="col-md-3 col-sm-6">
                            <h2 class="footerTitle">Quick Links</h2>
                            <ul>
                                <li>
                                    <Link href="/outdoor/taggers">
                                        <a>Taggers</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/outdoor/additional-devices-with-taggers">
                                        <a>Additional Devices With Taggers</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/outdoor/game-scenario-devices">
                                        <a>Game Scenario Devices</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/outdoor/softwares">
                                        <a>Softwares</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/#services">
                                        <a>Services Provided</a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div class="col-md-3 col-sm-6">
                            <h2 class="footerTitle">Quick Links</h2>
                            <ul>
                                <li>
                                    <Link href="/outdoor">
                                        <a>Netronic Outdoor Laser tag System
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/indoor">
                                        <a>Galaxy Eclipse</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/airbunker">
                                        <a>Airbunker</a>
                                    </Link>
                                </li>

                            </ul>
                        </div>
                        <div class="col-md-3 col-sm-6">
                            <h2 class="footerTitle">Pages</h2>
                            <ul>
                                <li>
                                    <Link href="/outdoor">
                                        <a>About
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/indoor">
                                        <a>Contact</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/airbunker">
                                        <a>Gallery</a>
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
