import Link from 'next/link'
import { MdChat } from "react-icons/md";
import Layout from '/components/en/layout'

export default function contact() {
    return (
        <Layout>
            <div class="language">
                <Link href="/mars">

                    <MdChat />العربيــة
                </Link>
            </div>
           
            <section style={
                { background: "#ffffff" }
            }>
                <img src="/img/logo-mars.png"
                        style={
                            {
                                width: "100%",
                                margin: "0 auto 30px"
                            }
                        } />
            </section>
            <section style={
                { background: "#d22e2e" }
            }>
                <img src="/img/vr-system-img.png"
                    style={
                        {
                            width: "90%",
                            margin: "0 auto 10px"
                        }
                    } />
                    <br/>
                    <br/>
                    <img src="/img/vr-system-attraction.png"
                    style={
                        {
                            width: "100%",
                            margin: "0 auto 30px"
                        }
                    } />
            </section>
            {/* <section style={
                { background: "#ffffff" }
            }>
                <img src="/img/vr-system-attraction.png"
                    style={
                        {
                            width: "100%",
                            margin: "0 auto 10px"
                        }
                    } />
            </section>
            <section style={
                { background: "#ffffff", marginTop: 0, marginBottom: 1 }
            }>
                <img src="/img/why-vr.png"
                    style={
                        {
                            width: "80%",
                            marginBottom: 2
                        }
                    } />
            </section> */}
            <section style={
                { background: "#ffffff" }
            }>
                {/* <div class="container">
                <img src="/img/vr-system-attraction.png"
                    style={
                        {
                            width: "100%",
                            margin: "0 auto 10px"
                        }
                    } />
                </div> */} 
                <div class="container">
                    <img src="/img/why-vr.png"
                        style={
                            {
                                width: "100%",
                                margin: "0 auto 40px"
                            }
                        } />
                </div>
                <div class="container">
                    <div class="row">
                        <img src="/img/pages/game-work.png"
                            style={
                                {
                                    width: "100%",
                                    margin: "0 auto 40px"
                                }
                            } />
                    </div>

                </div>
                <div class="container">
                    <div class="row">
                        <img src="/img/pages/falcon.png"
                            style={
                                {
                                    width: "100%",
                                    margin: "0 auto 10px"
                                }
                            } />
                    </div>

                </div>
                <div class="container">
                    <div class="row">
                        <img src="/img/pages/vion-vr-offers.png"
                            style={
                                {
                                    width: "100%",
                                    margin: "0 auto 30px"
                                }
                            } />
                    </div>

                </div>
                <br/>
                            <br/>
                            <br/>
                <div class="container">
                    <div class="row">
                        <img src="/img/pages/last-train.png"
                            style={
                                {
                                    width: "100%",
                                    margin: "0 auto 30px"
                                }
                            } />
                    </div>

                </div>
                <br/>
                            <br/>
                            <br/>
                <div class="container">
                    <div class="row">
                        <img src="/img/pages/wall-street.png"
                            style={
                                {
                                    width: "100%",
                                    margin: "0 auto 30px"
                                }
                            } />
                    </div>

                </div>
                <div class="container">
                    <div class="row">
                        <img src="/img/pages/nuclear-vault.png"
                            style={
                                {
                                    width: "100%",
                                    margin: "0 auto 30px"
                                }
                            } />
                    </div>

                </div>
                <div class="container">
                    <div class="row">
                        <img src="/img/pages/last-frontier.png"
                            style={
                                {
                                    width: "100%",
                                    margin: "0 auto 20px"
                                }
                            } />
                    </div>

                </div>
                <div class="container">
                    <div class="row">
                        <img src="/img/pages/citadel.png"
                            style={
                                {
                                    width: "100%",
                                    margin: "0 auto 20px"
                                }
                            } />
                    </div>

                </div>
                <div class="container">
                    <div class="row">
                        <img src="/img/pages/zombie-farm.png"
                            style={
                                {
                                    width: "100%",
                                    margin: "0 auto 20px"
                                }
                            } />
                    </div>

                </div>
                <div class="container">
                    <div class="row">
                        <img src="/img/pages/space-port.png"
                            style={
                                {
                                    width: "100%",
                                    margin: "0 auto 30px"
                                }
                            } />
                    </div>

                </div>
                <div class="container">
                    <div class="row">
                        <img src="/img/pages/zombie-mall.png"
                            style={
                                {
                                    width: "100%",
                                    margin: "0 auto 30px"
                                }
                            } />
                    </div>

                </div>
                <div class="container">
                    <div class="row">
                        <img src="/img/pages/battle-for-new-year.png"
                            style={
                                {
                                    width: "100%",
                                    margin: "0 auto 30px"
                                }
                            } />
                    </div>

                </div>
                <div class="container">
                    <div class="row">
                        <img src="/img/pages/red-planet.png"
                            style={
                                {
                                    width: "100%",
                                    margin: "0 auto 30px"
                                }
                            } />
                    </div>

                </div>
            </section>


            <section style={
                { background: "#ffffff" }
            }>
                <div class="container">
                    <div class="row">
                        <img src="/img/pages/game-mode.png"
                            style={
                                {
                                    width: "100%",
                                    margin: "0 auto 30px"
                                }
                            } />
                    </div>

                </div>
                <div class="video" id="video">
                    <h2>
                        Game Modes
                    </h2>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/pmvTsTlV7nE?si=mOk7HBaoZKGkk7vf" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </div>
            </section>
            <section style={
                { background: "#ffffff" }
            }>
                <div class="container">
                    <div class="row">
                        <div class="col-md-4 col-sm-5 col-0"></div>
                        <img src="/img/pages/app-for-all-vr-bsns.png" />

                    </div>
                    {/* <div class="row">
                    <div class="col-md-4 col-sm-5 col-0"></div>
                    <img src="/img/pages/adapting-game-map.png"/>

                    </div> */}
                </div>
                <div class="container">
                    <div class="row">
                        <div class="col-md-4 col-sm-5 col-0"></div>
                        <img src="/img/pages/adapting-game-map.png" />

                    </div>

                </div>
                
                <div class="container">
                    <div class="row">
                        <div class="col-md-2"></div>
                        <img src="/img/pages/venue-requirement.png" />

                    </div>

                </div>
                <div class="container">
                    <div class="row">
                        <div class="col-md-2"></div>
                        <img src="/img/pages/additional-requirement.png" />

                    </div>

                </div>
                <div class="container">
                    <div class="row">
                        <div class="col-md-4 col-sm-5 col-0"></div>
                        <img src="/img/pages/service-and-support.png" />

                    </div>

                </div>
            </section>


        </Layout>
    );
}
