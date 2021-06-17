import Link from 'next/link'
import {MdChat} from "react-icons/md";
import Layout from '/components/en/layout'

export default function contact() {
    return (
        <Layout>
            <div class="language">
                <Link href="/mars">
                    <a>
                        <MdChat/>
                        العربيــة
                    </a>
                </Link>
            </div>
            <section class="heroBanner aboutHeroBanner"
                style={
                    {background: "#000"}
            }>
                <div class="background-overlay"></div>

                <div class="container">
                    <div class="row">
                        <div class="col-md-4 col-sm-5 col-0"></div>

                        <div class="col-md-4 col-sm-3 col-8">
                            <img src="/img/logo-mars.png" width="300px"/>
                        </div>
                        <div class="col-md-4 col-sm-4 col-0"></div>
                    </div>
                </div>

            </section>
            <section style={
                {background: "#000000"}
            }>
                <div class="container">
                    <h2 class="mars_section_title"
                        style={
                            {
                                borderBottom: "1px solid red",
                                marginBottom: "30px"
                            }
                    }>The features of the attraction</h2>
                    <div class="row">
                        <div class="col-md-4 col-sm-4 col-12">
                            <div class="mars_features_item">
                                <img src="/img/mar_icon1.png"/>
                                <p>PvP mode
                                    <br/>
                                    (players vs players).</p>
                            </div>
                        </div>
                        <div class="col-md-4 col-sm-4 col-12">
                            <div class="mars_features_item">
                                <img src="/img/mar_icon2.png"/>
                                <p>Fun for any number
                                    <br/>
                                    of visitors from 1 to 10 players.
                                </p>
                            </div>
                        </div>
                        <div class="col-md-4 col-sm-4 col-12">
                            <div class="mars_features_item">
                                <img src="/img/mar_icon3.png"/>
                                <p>VR makes an 80 m2 indoor<br/>
                                    arena seem like the size<br/>
                                    of a basketball court.
                                </p>
                            </div>
                        </div>
                        <div class="col-md-4 col-sm-4 col-12">
                            <div class="mars_features_item">
                                <img src="/img/mar_icon4.png"/>
                                <p>No costs for decoration
                                    <br/>
                                    or construction required
                                    <br/>
                                    for shelters in the play area.
                                </p>
                            </div>
                        </div>
                        <div class="col-md-4 col-sm-4 col-12">
                            <div class="mars_features_item">
                                <img src="/img/mar_icon5.png"/>
                                <p>Moving to and launching
                                    <br/>
                                    at a new location takes 1 day.
                                </p>
                            </div>
                        </div>
                        <div class="col-md-4 col-sm-4 col-12">
                            <div class="mars_features_item">
                                <img src="/img/mar_icon6.png"/>
                                <p>Entertainment that is interesting
                                    <br/>
                                    for adults and children from
                                    <br/>
                                    5 to 99 years old.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            <section style={
                {background: "#000000"}
            }>
                <div class="container">
                    <img src="/img/mars_on_off.jpg"/>
                </div>
            </section>
            <section style={
                {background: "#000000"}
            }>
                <div class="container">
                    <div class="row">
                        <div class="col-md-4 col-sm-4 col-12">
                            <h2 class="mars_section_title">equipment</h2>
                            <h4 class="mars_h4">MARS VR Player Kit</h4>
                            <br/>
                            <br/>
                            <p class="mars_p">
                                <b>VR Headset
                                </b>— lightweight,          wireless, high resolution</p>
                            <br/>

                            <p class="mars_p">
                                <b>VR Headset
                                </b>— lightweight,          wireless, high resolution</p>
                        </div>
                        <div class="col-md-8 col-sm-8 col-12">
                            <img src="/img/mars-eq.jpg"/>
                        </div>

                    </div>

                </div>
            </section>

            <section style={
                {background: "#000000"}
            }>
                <div class="container">
                    <div class="row">
                        <div class="col-md-4 col-sm-4 col-12">
                            <h2 class="mars_section_title">Software</h2>
                            <h4 class="mars_h4">A tablet with the &nbsp;
                                <span class="mars_color">VR OPERATOR</span>
                                <br/>application for setting up
                                <br/>
                                and controlling game sets</h4>
                            <br/>
                            <br/>
                            <p class="mars_p">
                                Automates the process of playing games
                                <br/>in the VR arena as much as possible.</p>
                            <p class="mars_p">Allows you to quickly change scenarios
                                <br/>and game locations.
                            </p>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <h4 class="mars_h4">
                                <span class="mars_color">VR SCOREBOARD
                                </span>&nbsp; an application
                                <br/>for displaying game information
                                <br/>on a big screen
                            </h4>
                            <br/>
                            <br/>
                            <p class="mars_p">
                                Displays detailed team statistics
                                <br/>and personal stats of players.</p>
                            <p class="mars_p">Broadcasts the session for the<br/>
                                player in real-time
                            </p>
                        </div>
                        <div class="col-md-8 col-sm-8 col-12">
                            <img src="/img/mars_soft.jpg"
                                style={
                                    {maxWidth: "80%"}
                                }/>
                        </div>

                    </div>

                </div>
            </section>
            <section>
                <div class="container">
                    <h2>
                        <span class="mars_color">Falcon VR
                        </span>
                        &nbsp;Blaster</h2>
                    <img src="/img/mars_Picture2.jpg"/>
                    <div class="row">
                        <div class="col-md-4 col-sm-4 col-12">
                            <p style={
                                {
                                    color: "black",
                                    paddingBottom: "25px"
                                }
                            }>Impulse recoil – the realistic<br/>
                                feel of every shot</p>
                            <p style={
                                {
                                    color: "black",
                                    paddingBottom: "25px"
                                }
                            }>High impact resistant ABS plastic body —<br/>
                                withstands the weight of the vehicle.</p>
                        </div>
                        <div class="col-md-4 col-sm-4 col-12">
                            <p style={
                                {
                                    color: "black",
                                    paddingBottom: "25px"
                                }
                            }>14+ hours of battery life — more than<br/>
                                one gaming day on a single charge.</p>
                            <p style={
                                {
                                    color: "black",
                                    paddingBottom: "25px"
                                }
                            }>The rubber bumper softens<br/>
                                the impact from careless players.</p>

                        </div>
                        <div class="col-md-4 col-sm-4 col-12">
                            <p style={
                                {
                                    color: "black",
                                    paddingBottom: "25px"
                                }
                            }>Vibration in the handle —
                                <br/>
                                feel the virtual wound</p>
                            <p style={
                                {
                                    color: "black",
                                    paddingBottom: "25px"
                                }
                            }>Weighs 800 grams — a comfortable<br/>
                                game even for the youngest players!</p>

                        </div>
                    </div>
                </div>
            </section>

            <section style={
                {
                    background: "#000000",
                    backgroundImage: "url('../img/mars_picture3.jpg')",
                    backgroundPosition: "right center",
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat"

                }
            }>
                <div class="container">
                    <div class="row">
                        <div class="col-md-4 col-sm-4 col-12">
                            <h2 class="mars_section_title">
                                <span class="mars_color">Scorpion
                                </span>&nbsp;Shock Bracelet</h2>

                            <p class="mars_p">
                                Each game wound is accompanied
                                <br/>
                                by an electrical impulse that causes
                                <br/>
                                a short-term muscle contraction.
                            </p>
                            <br/>
                            <p class="mars_p">5 operating modes — vibration and
                                <br/>
                                4 levels of shocking power.
                            </p>
                            <br/>
                            <p class="mars_p">The physical sensation of hits is the key<br/>
                                to the maximum realism of the game
                            </p>
                            <br/>
                            <p class="mars_p">The impulse is absolutely harmless —
                                <br/>
                                leaves no bruises or marks.
                            </p>
                            <br/>
                            <p class="mars_p">This device is fully certified
                                <br/>
                                for playing games.
                            </p>
                            <br/>

                        </div>
                        <div class="col-md-8 col-sm-8 col-12"></div>

                    </div>

                </div>
            </section>
            <section style={
                {background: "#000000"}
            }>
                <div class="container">
                    <div class="row">
                        <div class="col-md-4 col-sm-4 col-12">
                            <h2 class="mars_section_title">
                                <span class="mars_color">MARS
                                </span>
                                &nbsp;VR-helmet
                            </h2>
                            <h4 class="mars_h4">All-in-One</h4>
                            <br/>
                            <br/>
                            <p class="mars_p">
                                All the electronics and sensors in one<br/>
                                helmet - no need to carry a computer<br/>
                                and other additional equipment with you.</p>
                            <br/>

                            <p class="mars_p">High resolution images 1832 x 1920 px -<br/>
                                full immersion in the virtual arena.
                            </p>
                            <br/>
                            <p class="mars_p">
                                The helmet weight is less than
                                <br/>
                                550 grams - play more than 2 hours<br/>
                                straight without fatigue.
                            </p>
                            <br/>
                            <p class="mars_p">
                                The blaster is connected to the helmet<br/>
                                wirelessly - movement without
                                <br/>
                                restrictions.
                            </p>
                            <br/>
                            <p class="mars_p">
                                Protector technology - prevents collisions
                                <br/>
                                with physical obstacles during the game.
                            </p>
                        </div>
                        <div class="col-md-8 col-sm-8 col-12">
                            <img src="/img/mars_picture4.jpg"
                                style={
                                    {maxWidth: "100%"}
                                }/>
                        </div>

                    </div>

                </div>
            </section>
            <section style={
                {background: "#000000"}
            }>
                <div class="container">
                    <div class="row">
                        <div class="col-md-6 col-sm-6 col-12">
                            <h2 class="mars_section_title">Game
                                <br/>
                                <span class="mars_color">locations
                                </span>

                            </h2>
                            <h4 class="mars_h4">The Depot</h4>
                            <br/>
                            <p class="mars_p">
                                The map takes players to the industrial area:
                                <br/>
                                offices, cargo wagons and the armory. Players
                                <br/>
                                take part in a special operation to eliminate a
                                <br/>
                                terrorist group in a railroad depot.</p>
                            <br/>
                            <br/>
                            <br/>
                            <br/><br/>
                            <h4 class="mars_h4">The Office</h4>
                            <br/>
                            <p class="mars_p">
                                The location is designed as an office building
                                <br/>
                                with rooms, long corridors and all the necessary
                                <br/>
                                attributes of office life. A perfect place to hold
                                <br/>
                                “corporate battles”.
                            </p>
                        </div>
                        <div class="col-md-6 col-sm-6 col-12">
                            <img src="/img/mars_picture5.jpg"/>
                            <br/>
                            <img src="/img/mars_picture6.jpg"/>
                        </div>

                    </div>

                </div>
            </section>
            <section style={
                {background: "#000000"}
            }>
                <div class="container">
                    <div class="row">
                        <div class="col-md-6 col-sm-6 col-12">
                            <div style={
                                {
                                    display: "flex",
                                    justifyContent: "center",
                                    height: "330px",
                                    flexDirection: "column"
                                }
                            }>
                                <h4 class="mars_h4">The nuclear storage facility</h4>
                                <br/>
                                <p class="mars_p">
                                    A highly detailed secret bunker will excite fans of cult computer
                                    <br/>
                                    games and evoke a lot of vivid memories. The players will fight
                                    <br/>
                                    for the control of the strategic object.
                                </p>
                            </div>
                        </div>
                        <div class="col-md-6 col-sm-6 col-12">
                            <img src="/img/mars_picture7.jpg"/>
                        </div>

                    </div>
                    <div class="row">
                        <div class="col-md-4 col-sm-4 col-12">
                            <div style={
                                {
                                    textAlign: "center",
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    marginTop: "30px"
                                }
                            }>
                                <img src="/img/mars_picture8.png"
                                    style={
                                        {
                                            width: "70px",
                                            margin: "o auto"
                                        }
                                    }/>
                                <p class="mars_p">The set of game locations is<br/>
                                    replenished every 2 months.</p>
                            </div>
                        </div>
                        <div class="col-md-4 col-sm-4 col-12">
                            <p>
                                <div style={
                                    {
                                        textAlign: "center",
                                        display: "flex",
                                        flexDirection: "column",
                                        alignItems: "center",
                                        marginTop: "30px"
                                    }
                                }>
                                    <img src="/img/mars_picture9.png"
                                        style={
                                            {
                                                width: "70px",
                                                margin: "o auto"
                                            }
                                        }/>
                                    <p class="mars_p">Regular increase of the detail of terrain
                                        <br/>
                                        elements and game models.</p>
                                </div>
                            </p>
                        </div>
                        <div class="col-md-4 col-sm-4 col-12">
                            <p>
                                <div style={
                                    {
                                        textAlign: "center",
                                        display: "flex",
                                        flexDirection: "column",
                                        alignItems: "center",
                                        marginTop: "30px"
                                    }
                                }>
                                    <img src="/img/mars_picture10.png"
                                        style={
                                            {
                                                width: "70px",
                                                margin: "o auto"
                                            }
                                        }/>
                                    <p class="mars_p">All scenarios and game modes are available.<br/>
                                        in each of the locations.</p>
                                </div>
                            </p>
                        </div>
                    </div>

                </div>
            </section>

            <section style={
                {background: "#000000"}
            }>
                <div class="container">
                    <div class="row">
                        <div class="col-md-4 col-sm-4 col-12">
                            <h2 class="mars_section_title"
                                style={
                                    {textAlign: 'center'}
                            }>
                                <span class="mars_color">PVP
                                </span>&nbsp;GAME scenarios
                            </h2>
                            <br/>
                            <p>
                                <div style={
                                    {
                                        textAlign: "center",
                                        display: "flex",
                                        flexDirection: "column",
                                        alignItems: "center",
                                        marginTop: "30px"
                                    }
                                }>
                                    <img src="/img/mars_picture12.png"
                                        style={
                                            {
                                                width: "70px",
                                                margin: "o auto"
                                            }
                                        }/>
                                    <br/>
                                    <h4 class="mars_h4">King of the arena</h4>
                                    <p class="mars_p">Each player fights for himself and only one can become the winner</p>
                                </div>
                            </p>
                            <br/>
                            <br/>
                            <p>
                                <div style={
                                    {
                                        textAlign: "center",
                                        display: "flex",
                                        flexDirection: "column",
                                        alignItems: "center",
                                        marginTop: "30px"
                                    }
                                }>
                                    <img src="/img/mars_picture13.png"
                                        style={
                                            {
                                                width: "70px",
                                                margin: "o auto"
                                            }
                                        }/>
                                    <br/>
                                    <h4 class="mars_h4">Team combat</h4>
                                    <p class="mars_p">An exciting mode in which two teams fight against each other.</p>
                                </div>
                            </p>
                        </div>
                        <div class="col-md-8 col-sm-8 col-12">
                            <img src="/img/mars_picture11.jpg"/>
                        </div>

                    </div>

                </div>
            </section>
        </Layout>
    )
}
