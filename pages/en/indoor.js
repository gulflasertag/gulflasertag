import Link from 'next/link'
import {MdChat} from "react-icons/md";
import Layout from '/components/en/layout'

export default function header() {
    return (
        <Layout>
            <div class="language">
                <Link href="/indoor">

                    <MdChat/>العربيــة
                </Link>
            </div>
            <section class="indoorbanner">
                <div class="container">
                    <img src="/img/eclips-indoor.jpg"/></div>
            </section>
            <section class="indoorbanner gradientBlack">
                <div class="container">
                    <div class="inDoorBannerDes">
                        <p>An ambitious design that inspires action. A safe game in which there is no place for aggression. Unique modes that make players superheroes.</p>
                    </div>
                </div>
            </section>
            <section class="gameKitSec">
                <div class="gameKitDesc">
                    <h2 class="greyBlackTitle">
                        <span>Game kit
                        </span>Galaxy ECLIPSE</h2>
                    <h6>GALAXY ECLIPSE</h6>
                    <p>
                        <strong></strong>
                        Is a new generation of indoor laser tag game kits with smart sensor illumination, motion control, and unique game modes that make everyone a superhero
                    </p>

                </div>
                <div class="gameKitImg">
                    <img src="/img/game-kit.png"/>
                </div>

            </section>

            <section class="blasterSec">
                <div class="container">
                    <div class="blasterKitDesc">
                        <img src="/img/gun.png"/>

                        <h2 class="skyblueTitle">BLASTER
                            <span>Galaxy ECLIPSE
                            </span>
                        </h2>

                        <div class="row">
                            <div class="col-md-2 col-sm-6">
                                <div class="whiteTitleTextNoBorder">
                                    <h4>LENGTH - 40 CM</h4>
                                    <p>Makes the game comfortable even for children from 5 years old.</p>
                                </div>
                            </div>
                            <div class="col-md-2 col-sm-6">
                                <div class="whiteTitleTextNoBorder">
                                    <h4>CAPACITIVE HAND SENSOR</h4>
                                    <p>Prevents players from swinging a blaster or shooting one-handed.</p>
                                </div>
                            </div>

                            <div class="col-md-2 col-sm-6">
                                <div class="whiteTitleTextNoBorder">
                                    <h4>RECOIL IMITATION
                                    </h4>
                                    <p>Vibration in the buttstock blaster lets players feel every shot.</p>
                                </div>
                            </div>
                            <div class="col-md-2 col-sm-6">
                                <div class="whiteTitleTextNoBorder">
                                    <h4>HALO TECHNOLOGY</h4>
                                    <p>Double illumination of the shot accompanied by the team color</p>
                                </div>
                            </div>
                            <div class="col-md-2 col-sm-6">
                                <div class="whiteTitleTextNoBorder">
                                    <h4>COLOR IPS SCREEN</h4>
                                    <p>Displays kit parameters and game statistics.</p>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>


            </section>
            <section class="brightShotTeamColorSec">
                <div class="container">
                    <div class="row">
                        <div class="col-md-6">
                            <h2 class="skyblueTitle">
                                <span>Bright shots &nbsp;
                                </span>
                                with team color
                            </h2>
                        </div>
                        <div class="col-md-6">
                            <div class="whiteTitleTextNoBorder">
                                <h4>HALO TECHNOLOGY</h4>
                                <p>Thanks to the HALO technology, a shooting blaster sends a red beam and a flesh of the team color. Double shot illumination makes the game safer and also allows players to better distinguish between allies and opponents.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <img src="/img/indoor-team-shot.jpg"/>
            </section>

            <section class="gameKitSec eclipsVest">
                <div class="gameKitDesc">

                    <h2 class="skyblueTitle">
                        <span>ECLIPSE</span>
                        Vest</h2>
                    <div class="row">
                        <div class="col-md-6">
                            <div class="whiteTitleTextNoBorder">
                                <h4>5 VIBRATION INDICATION MODULES</h4>
                                <p>Spot vibration of the zone hit by an enemy and a powerful shock imitation when the player is completely deactivated.</p>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="whiteTitleTextNoBorder">
                                <h4>LENGTH - 42 CM
                                </h4>
                                <p>Due to the small area of contact with the body, the player does not overheat during the session</p>
                            </div>
                        </div>

                    </div>
                    <div class="row">
                        <div class="col-md-6">
                            <div class="whiteTitleTextNoBorder">
                                <h4>WEIGHT - 1200 G</h4>
                                <p>The minimal weight of the vest allows even the smallest children of 5 years to play.</p>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="whiteTitleTextNoBorder">
                                <h4>2 SPEAKERS</h4>
                                <p>The speakers are installed in the shoulders of the vest so that visitors stay informed about all game.</p>
                            </div>
                        </div>

                    </div>


                </div>
                <div class="gameKitImg">
                    <img src="/img/galaxy-kit2.png"/>
                </div>

            </section>
            <section class="gameKitSec">
                <div class="gameKitDesc">

                    <h2 class="skyblueTitle"
                        style={
                            {color: '#222'}
                    }>
                        Feel
                        <span>ECLIPSE</span>
                    </h2>
                    <div class="row">
                        <div class="col-md-5">
                            <div class="">
                                <h6>SMART LIGHT INDICATION</h6>
                                <p>The Eclipse kit will intuitively and immersively display every game event, injury, change of lead, or virtual explosion. This solution is realized due to the complex geometry of the sensors and the wellcoordinated work of more than 50 LEDs</p>
                            </div>
                        </div>
                        <div class="col-md-1"></div>

                        <div class="col-md-5">
                            <h6>SIMULATION OF SHOCK
                            </h6>
                            <p>A shock imitation module built into the back of the vest gives a real shake to the deactivated player due to its powerful vibration. Also, when injured, a spot vibration indication is triggered in the sensor that the opponent hit.
                            </p>
                        </div>

                        <div class="col-md-1"></div>


                    </div>

                </div>
                <div class="gameKitImg xs-hide">
                    <img src="/img/feel.png"/>
                </div>

            </section>

            <section class="threeSoundSec">
                <div class="container">
                    <div class="row">
                        <div class="col-md-6">
                            <h2 class="skyblueTitle">
                                <span>3 sound &nbsp;
                                </span>
                                sources
                            </h2>
                        </div>
                        <div class="col-md-3 col-sm-6">
                            <div class="whiteTitleTextNoBorder">
                                <p>The speaker in the blaster is responsible for the sound indication of shots.</p>
                                <p>2 speakers on the shoulders of the vest alert players about wounds, flag capturing, respawn, and other game events</p>
                            </div>
                        </div>
                        <div class="col-md-3 col-sm-6">
                            <div class="whiteTitleTextNoBorder">
                                <p>Thanks to surround and parallel playback of sounds, the visitor hears each notification.</p>
                                <p>Game kits come in 6 available languages.</p>
                            </div>
                        </div>
                    </div>
                    <img src="/img/3sound.jpg"/>
                </div>
                <div class="shape shape-bottom" data-negative="true">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
                        <path class="shape-fill" d="M500.2,94.7L0,0v100h1000V0L500.2,94.7z"></path>
                    </svg>
                </div>
            </section>
            <div class="video" id="video">
                <h2>
                Galaxy Eclipse Superpowers
                </h2>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/2LLLGILzvf4?si=vmmNioxFZ6-n95eT" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
            {/* super power */}
            <section class="superPowerSec">

                <div class="powerSecLeft">
                    <h2 class="greyBlackTitle">
                        <span>Choose your
                        </span>
                        superpower!</h2>
                    <div class="row">
                        <div class="col-md-7">
                            <p>By placing a hand on the sensor on the stomach, the player can activate one of the superpowers for a limited time.</p>
                        </div>
                    </div>
                    <div class="imageBottom">
                        <img src="/img/handpower.jpg"/>
                    </div>
                </div>
                <div class="powerSecRight">
                    <div class="row">
                        <div class="col-md-2"></div>
                        <div class="col-md-3">
                            <img src="/img/power1.png"/>
                        </div>
                        <div class="col-md-5">
                            <div class="whiteTitleTextNoBorder">
                                <h4>HEALER</h4>
                                <p>Allows you to restore health for yourself and all allies nearby.</p>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-2"></div>
                        <div class="col-md-3">
                            <img src="/img/power2.png"/>
                        </div>
                        <div class="col-md-5">
                            <div class="whiteTitleTextNoBorder">
                                <h4>NINJA</h4>
                                <p>Turns off the vest illumination, allowing you to sneak up on opponents.</p>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-2"></div>
                        <div class="col-md-3">
                            <img src="/img/power3.png"/>
                        </div>
                        <div class="col-md-5">
                            <div class="whiteTitleTextNoBorder">
                                <h4>POWER SHIELD</h4>
                                <p>Temporarily makes a player invulnerable to all types of damage.</p>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-2"></div>
                        <div class="col-md-3">
                            <img src="/img/power4.png"/>
                        </div>
                        <div class="col-md-5">
                            <div class="whiteTitleTextNoBorder">
                                <h4>BOMBER-MAN</h4>
                                <p>deactivates all the enemies nearby with an explosion.</p>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-2"></div>
                        <div class="col-md-3">
                            <img src="/img/power5.png"/>
                        </div>
                        <div class="col-md-5">
                            <div class="whiteTitleTextNoBorder">
                                <h4>MAX DAMAGE</h4>
                                <p>Increases blaster damage up to 100 units</p>
                            </div>
                        </div>
                    </div>

                </div>


            </section>
            <section class="indoorSoftwareSec">

                <div class="indoorSoftwareLeft">
                    <img src="/img/mobile.png"/>
                </div>
                <div class="indoorSoftwareRight">
                    <h2 class="skyblueTitle">
                        <span style={
                            {color: "#fff"}
                        }>Software</span>for a quick solution to every task!
                    </h2>
                    <div class="whiteTitleTextNoBorder">
                        <p>Remote control and disconnection of game sets in 2 clicks.</p>
                        <p>Ready-made game scenarios and a flexible constructor to create unique modes.</p>
                        <p>A set of characters and over 40 parameters to create your own heroes.</p>
                        <p>Team and personal statistics of players with unique achievements.</p>
                        <p>All this allows one person to easily conduct a game for more than 30 participants.</p>

                    </div>
                </div>
            </section>
            <section class="scriptPointsSec">
                <div class="container">
                    <h2 class="skyblueTitle">Use &nbsp;
                        <span style={
                            {display: "inline"}
                        }>
                            ready-made
                            <br/>scripts
                        </span>
                    </h2>
                    <div class="row">
                        <div class="col-md-4 col-sm-6">
                            <div class="scriptpointItem">
                                <div class="scriptpointItemImg">
                                    <img src="/img/sicon1.png"/></div>
                                <div class="whiteTitleTextNoBorder">
                                    <h4>WARM-UP
                                    </h4>
                                    <p>A simple game to familiarize yourself with the arena maze and game kit before more interesting scenarios.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4 col-sm-6">
                            <div class="scriptpointItem">
                                <div class="scriptpointItemImg">
                                    <img src="/img/sicon2.png"/></div>
                                <div class="whiteTitleTextNoBorder">
                                    <h4>THE VIRUS ELIMINATION
                                    </h4>
                                    <p>Destroy all the virus sources faster than opponents by freezing their weapons with shots.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4 col-sm-6">
                            <div class="scriptpointItem">
                                <div class="scriptpointItemImg">
                                    <img src="/img/sicon3.png"/></div>
                                <div class="whiteTitleTextNoBorder">
                                    <h4>BASE ASSAULT
                                    </h4>
                                    <p>Storm the base which is actively protected by the enemy team, while not forgetting about your own defense</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-4 col-sm-6">
                            <div class="scriptpointItem">
                                <div class="scriptpointItemImg">
                                    <img src="/img/sicon4.png"/></div>
                                <div class="whiteTitleTextNoBorder">
                                    <h4>DEATHMATCH
                                    </h4>
                                    <p>Combat with automatic respawn and a limited number of ammo magazines.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4 col-sm-6">
                            <div class="scriptpointItem">
                                <div class="scriptpointItemImg">
                                    <img src="/img/sicon5.png"/></div>
                                <div class="whiteTitleTextNoBorder">
                                    <h4>ENCOUNTER
                                    </h4>
                                    <p>Team mode with simple rules for beginners and young players.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4 col-sm-6">
                            <div class="scriptpointItem">
                                <div class="scriptpointItemImg">
                                    <img src="/img/sicon6.png"/></div>
                                <div class="whiteTitleTextNoBorder">
                                    <h4>ULTIMATIVE WEAPON
                                    </h4>
                                    <p>Your blaster becomes your ultimate weapon that fires single shots with high damage.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-4 col-sm-6">
                            <div class="scriptpointItem">
                                <div class="scriptpointItemImg">
                                    <img src="/img/sicon7.png"/></div>
                                <div class="whiteTitleTextNoBorder">
                                    <h4>ARENA KING
                                    </h4>
                                    <p>A battle in which the last player wins</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4 col-sm-6">
                            <div class="scriptpointItem">
                                <div class="scriptpointItemImg">
                                    <img src="/img/sicon8.png"/></div>
                                <div class="whiteTitleTextNoBorder">
                                    <h4>TEAM DEATHMATCH

                                    </h4>
                                    <p>Team battle with automatic respawn</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4 col-sm-6">
                            <div class="scriptpointItem">
                                <div class="scriptpointItemImg">
                                    <img src="/img/sicon9.png"/></div>
                                <div class="whiteTitleTextNoBorder">
                                    <h4>
                                        MIND CONTROL
                                    </h4>
                                    <p>You capture the minds of deactivated opponents and they become a part of your team.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-4 col-sm-6">
                            <div class="scriptpointItem">
                                <div class="scriptpointItemImg">
                                    <img src="/img/sicon10.png"/></div>
                                <div class="whiteTitleTextNoBorder">
                                    <h4>EXPLORATION
                                    </h4>
                                    <p>Find ancient artifacts faster than the opposing team.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4 col-sm-6">
                            <div class="scriptpointItem">
                                <div class="scriptpointItemImg">
                                    <img src="/img/sicon11.png"/></div>
                                <div class="whiteTitleTextNoBorder">
                                    <h4>DOMINATION
                                    </h4>
                                    <p>A game with a limited amount of ammo and the ability to replenish health and supplies only at the base.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4 col-sm-6">
                            <div class="scriptpointItem">
                                <div class="scriptpointItemImg">
                                    <img src="/img/sicon12.png"/></div>
                                <div class="whiteTitleTextNoBorder">
                                    <h4>VAMPIRE FEUD</h4>
                                    <p>Striking opponents, just like a vampire, you take away their health units and restore yours</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div class="indoorBtn">
                <Link href="/en/indoor/game-scenario" class="btn btn-primary btnMain">
                    See Game scenario
                </Link>
            </div>
        </Layout>
    );
}
