import Link from 'next/link'

export default function Footer() {
    return (
        <div>
            <div class="topFooter">
                <div class="container">
                    <div class="row">
                        <div class="col-md-4 col-sm-12">
                            <div class="footerLogo">
                                <Link href="/en">

                                    <img src="/img/logo.png" alt="logo-lasrertag"/>

                                </Link>
                            </div>
                            <p>“Gulf laser tag is the official representative of lasertag.net in United Arab Emirates and Kingdom of Saudi Arabia.
                            </p>
                        </div>
                        <div class="col-md-4 col-sm-12">
                            <h2 class="footerTitle">Quick Links</h2>
                            <ul>
                                <li>
                                    <Link href="/en/outdoor/taggers">
                                        Taggers
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/en/outdoor/additional-devices-with-taggers">
                                        Additional Devices With Taggers
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/en/outdoor/softwares">
                                        Softwares
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/en/outdoor/game-scenario-devices">
                                        Outdoor Game Scenario Devices
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/en/indoor">
                                        Indoor Galaxy Eclipse
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/en/indoor/game-scenario">
                                        Indoor Galaxy Eclipse Game Scenario
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <div class="col-md-4 col-sm-12">
                            <h2 class="footerTitle">Pages</h2>
                            <ul>
                                <li>
                                    <Link href="/en/about">
                                        About Us
                                        
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/en/contact">
                                        Contact Us
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/en/mars">
                                        Mars VR
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/en/airbunker">
                                        Air Bunker
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/en/designArenas">
                                        Designing of Arenas
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/en/#services">
                                        Service Provided
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
                        <div class="col-md-12">@ 2023 Copyright. Gulf LaserTag</div>
                    </div>
                </div>
            </div>

        </div>
    );
}
