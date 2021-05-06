import Link from 'next/link'

export default function header() {
    return (
        <>
            <section class="indoorbanner">
                <div class="container">
                    <img src="/img/eclips-indoor.png"/></div>
            </section>
            <section class="indoorbanner gradientBlack">
                <div class="container">
                    <h2 class="skyblueTitle text-center">Game
                        <span>Scenario
                        </span>
                    </h2>
                </div>
            </section>

            <section class="gameKitSec">
                <div class="siriusDesc">
                    <h2 class="skyblueTitle"
                        style={
                            {
                                color: '#222',
                                marginBottom: '10px'
                            }
                    }>
                        SIRIUS</h2>
                    <p>A portable scenario device that gives the players bonuses. The active mode of operation is displayed by the animated backlighting of the diodes.</p>
                    <div class="row">
                        <div class="col-xs-6">
                            <ul>
                                <li><img src="/img/gsicon1.png"/>RADIATION</li>
                                <li><img src="/img/gsicon3.png"/>MEDKIT</li>
                                <li><img src="/img/gsicon5.png"/>BASE</li>
                                <li><img src="/img/gsicon7.png"/>BONUS</li>
                            </ul>
                        </div>
                        <div class="col-xs-6">
                            <ul>
                                <li><img src="/img/gsicon2.png"/>AMMO</li>
                                <li><img src="/img/gsicon4.png"/>RESPAWN</li>
                                <li><img src="/img/gsicon6.png"/>RANDOM</li>
                                <li><img src="/img/gsicon8.png"/>DIGITAL FLAG</li>
                            </ul>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12">
                            <table class="normalTable">
                                <tr>
                                    <td>Activation by shots</td>
                                    <td>+</td>
                                </tr>
                                <tr>
                                    <td>Activation by touch
                                    </td>
                                    <td>+</td>
                                </tr>
                                <tr>
                                    <td>Battery life
                                    </td>
                                    <td>up to 24 hours</td>
                                </tr>
                                <tr>
                                    <td>Size</td>
                                    <td>19х19х5,5 cm</td>
                                </tr>
                                <tr>
                                    <td>Weight</td>
                                    <td>520 grams</td>
                                </tr>

                                <tr>
                                    <td>Control</td>
                                    <td>Android</td>
                                </tr>

                            </table>

                        </div>
                    </div>
                </div>

                <div class="siriusImg">
                    <img src="/img/sirius.png"/>
                </div>
            </section>
            <section class="gameKitSec">
                <div class="siriusImg">
                    <img src="/img/multistation.png"/>
                </div>
                <div class="siriusDesc">
                    <h2 class="skyblueTitle"
                        style={
                            {
                                color: '#222',
                                marginBottom: '10px'
                            }
                    }>
                        MULTISTATION</h2>
                    <p>A cross-functional scenario device that can give bonuses to players, or act as a target for capture. A 27-cm LED panel animatedly displays the operating mode</p>
                    <div class="row">
                        <div class="col-xs-6">
                            <ul>
                                <li><img src="/img/gsicon1.png"/>RADIATION</li>
                                <li><img src="/img/gsicon3.png"/>MEDKIT</li>
                                <li><img src="/img/gsicon5.png"/>BASE</li>
                                <li><img src="/img/gsicon7.png"/>BONUS</li>
                            </ul>
                        </div>
                        <div class="col-xs-6">
                            <ul>
                                <li><img src="/img/gsicon2.png"/>AMMO</li>
                                <li><img src="/img/gsicon4.png"/>RESPAWN</li>
                                <li><img src="/img/gsicon6.png"/>RANDOM</li>
                                <li><img src="/img/gsicon8.png"/>DIGITAL FLAG</li>
                            </ul>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12">
                            <table class="normalTable">
                                <tr>
                                    <td>Activation by shots</td>
                                    <td>+</td>
                                </tr>
                                <tr>
                                    <td>Activation by touch
                                    </td>
                                    <td>+</td>
                                </tr>
                                <tr>
                                    <td>Battery life
                                    </td>
                                    <td>up to 24 hours</td>
                                </tr>
                                <tr>
                                    <td>Size</td>
                                    <td>19х19х5,5 cm</td>
                                </tr>
                                <tr>
                                    <td>Weight</td>
                                    <td>520 grams</td>
                                </tr>

                                <tr>
                                    <td>Control</td>
                                    <td>Android</td>
                                </tr>

                            </table>

                        </div>

                    </div>

                </div>


            </section>

            {/* super power */}
            <section class="superPowerSec">
                <div class="dominationSecLeft xs-hide">

                    <div class="imageBottom">
                        <img src="/img/img154.jpg"/>
                    </div>
                </div>
                <div class="siriusDesc dominationSecRight"
                    style={
                        {backgroundColor: '#030303'}
                }>
                    <div class="whiteTitleTextNoBorder">
                        <h2 class="skyblueTitle"
                            style={
                                {
                                    marginBottom: '30px',
                                    color: '#ccc',
                                    fontWeight: '200',
                                    fontSize: '27px'
                                }
                        }>
                            <b style={
                                {color: '#fff'}
                            }>SMART&nbsp;</b>
                            DOMINATION BOX</h2>
                        <p>A cross-functional scenario device that can give bonuses to players, or act as a target for capture. A 27-cm LED panel animatedly displays the operating mode</p>
                    </div>
                    <div class="row">
                        <div class="col-xs-6">
                            <ul>
                                <li><img src="/img/gsicon1.png"/>RADIATION</li>
                                <li><img src="/img/gsicon3.png"/>MEDKIT</li>
                                <li><img src="/img/gsicon5.png"/>BASE</li>
                                <li><img src="/img/gsicon7.png"/>BONUS</li>
                            </ul>
                        </div>
                        <div class="col-xs-6">
                            <ul>
                                <li><img src="/img/gsicon2.png"/>AMMO</li>
                                <li><img src="/img/gsicon4.png"/>RESPAWN</li>
                                <li><img src="/img/gsicon6.png"/>RANDOM</li>
                                <li><img src="/img/gsicon8.png"/>DIGITAL FLAG</li>
                            </ul>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12">
                            <table class="normalTable">
                                <tr>
                                    <td>Activation by shots</td>
                                    <td>+</td>
                                </tr>
                                <tr>
                                    <td>Activation by touch
                                    </td>
                                    <td>+</td>
                                </tr>
                                <tr>
                                    <td>Battery life
                                    </td>
                                    <td>up to 24 hours</td>
                                </tr>
                                <tr>
                                    <td>Size</td>
                                    <td>19х19х5,5 cm</td>
                                </tr>
                                <tr>
                                    <td>Weight</td>
                                    <td>520 grams</td>
                                </tr>

                                <tr>
                                    <td>Control</td>
                                    <td>Android</td>
                                </tr>

                            </table>

                        </div>

                    </div>
                </div>


            </section>


            <div class="indoorBtn">
                <Link href="/indoor">
                    <a class="btn btn-primary btnMain">More on Indoor Galaxy Eclipse</a>
                </Link>
            </div>
        </>
    )
}
