import Link from 'next/link'
import {MdChat} from "react-icons/md";
export default function header() {
    return (
        <>
            <div class="language">
                <Link href="/airbunker">
                    <a>
                        <MdChat/>
                        العربيــة
                    </a>
                </Link>
            </div>
            <section class="airbunkerBanner">
                <div class="background-overlay-red"></div>
                <div class="container">
                    <div class="airbunkerLogo">
                        <img src="/img/airbunker-logo.png"/>
                    </div>
                    <div class="airbunkerBannerContent">
                        <div class="row">
                            <div class="col-md-6">
                                <h2 class="whiteTitle">Paintball, Laser tag, Archeritag & Nerf drone racing</h2>
                            </div>

                            <div class="col-md-6"></div>

                        </div>
                    </div>
                </div>
            </section>
            <section class="airbunkerTableIntro">
                <div class="background-overlay"
                    style={
                        {opacity: '0.25'}
                }></div>
                <div class="container">
                    <div class="airbunkerLogo">
                        <img src="/img/airbunker-logo.png"/>
                    </div>

                    <div class="airbunkerBannerContent">
                        <div class="row">
                            <div class="col-md-6">
                                <h2 class="whiteTitle">
                                    <span>Set of bunkers</span><br/>
                                    for the NXL 2021 field</h2>
                            </div>

                            <div class="col-md-6"></div>

                        </div>
                    </div>
                </div>
            </section>

            {/* page 7 */}
            <section class="airbunkerTableIntro airbunkerPspSec">
                <div class="background-overlay"
                    style={
                        {opacity: '0.25'}
                }></div>
                <div class="container">
                    <div class="airbunkerLogo">
                        <img src="/img/airbunker-logo.png"/>
                    </div>

                    <div class="airbunkerBannerContent">
                        <div class="row">
                            <div class="col-md-6">
                                <h2 class="whiteTitle">
                                    <span>Set of Bunkers</span><br/>
                                    for the “PSP / NXL” field</h2>
                            </div>

                            <div class="col-md-6"></div>

                        </div>
                    </div>
                </div>
            </section>
            {/* <section>
                <div class="container">
                    <table class="table airtable">
                        <thead class="thead-dark">
                            <tr>
                                <th scope="col">Bunker</th>
                                <th scope="col">Pcs</th>
                                <th scope="col">Price for one, $</th>
                                <th scope="col">Total price, $</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Cylinder</td>
                                <td>4</td>
                                <td>144</td>
                                <td>576</td>
                            </tr>
                            <tr>
                                <td>Tree</td>
                                <td>4</td>
                                <td>107</td>
                                <td>428</td>
                            </tr>
                            <tr>
                                <td>Tall Cakе</td>
                                <td>4</td>
                                <td>105</td>
                                <td>420</td>
                            </tr>
                            <tr>
                                <td scope="row">Cakе</td>
                                <td>4</td>
                                <td>89</td>
                                <td>356</td>
                            </tr>
                            <tr>
                                <td scope="row">Dorito medium</td>
                                <td>6</td>
                                <td>145</td>
                                <td>870</td>
                            </tr>
                            <tr>
                                <td scope="row">Dorito Small</td>
                                <td>2</td>
                                <td>125</td>
                                <td>250</td>
                            </tr>
                            <tr>
                                <td scope="row">Snake Beam</td>
                                <td>6</td>
                                <td>109</td>
                                <td>654</td>
                            </tr>
                            <tr>
                                <td>Temple</td>
                                <td>4</td>
                                <td>140</td>
                                <td>560</td>
                            </tr>
                            <tr>
                                <td>Temple maya</td>
                                <td>4</td>
                                <td>158</td>
                                <td>632</td>
                            </tr>
                            <tr>
                                <td scope="row">Mini Win
                                </td>
                                <td>4</td>
                                <td>190</td>
                                <td>760</td>
                            </tr>
                            <tr>
                                <td scope="row">Giant Wing</td>
                                <td>4</td>
                                <td>239</td>
                                <td>956</td>
                            </tr>
                            <tr>
                                <td scope="row">Giant Brick</td>
                                <td>2</td>
                                <td>301</td>
                                <td>602</td>
                            </tr>


                            <tr class="tfoot">
                                <td>Total</td>
                                <td>48</td>
                                <td></td>
                                <td>7064</td>
                            </tr>
                            <tr class="tPostFooter">
                                <td></td>
                                <td></td>
                                <td>PRO series*</td>
                                <td>8477</td>
                            </tr>
                            <tr class="tPostFooter">
                                <td scope="row"></td>
                                <td></td>
                                <td>With loads</td>
                                <td>8192</td>
                            </tr>

                        </tbody>
                    </table>


                </div>
            </section> */}

            {/* section 9 */}
            <section class="airbunkerTableIntro airbunkerTrainSec">
                <div class="background-overlay"
                    style={
                        {opacity: '0.3'}
                }></div>
                <div class="container">
                    <div class="airbunkerLogo">
                        <img src="/img/airbunker-logo.png"/>
                    </div>

                    <div class="airbunkerBannerContent">
                        <div class="row">
                            <div class="col-md-6">
                                <h2 class="whiteTitle">
                                    <span>Set of bunkers</span><br/>
                                    for training</h2>
                                <h4 class="smallTitleWhite">(paintball, laser tag, nerf, archeritag)</h4>
                            </div>

                            <div class="col-md-6"></div>

                        </div>
                    </div>
                </div>
            </section>
            <section class="utilitySet">
                <div class="container">
                    <div class="bunker">
                        <div class="row">
                            <div class="col-md-6">
                                <h4>Utility set</h4>
                                <h2>of a 20 Bunker set</h2>
                                <h4 class="smallTitleWhite"
                                    style={
                                        {color: "#202331"}
                                }>(paintball, laser tag, nerf, archeritag)</h4>
                            </div>
                            <div class="col-md-6">
                                <img src="/img/img77.jpg"/>
                            </div>
                        </div>
                    </div>
                    <div class="bunker">
                        <div class="row">
                            <div class="col-md-6">
                                <img src="/img/img93.jpg"/>
                            </div>
                            <div class="col-md-6">
                                <br/>
                                <br/>
                                <br/>
                                <h4>Set</h4>
                                <h2>for away games</h2>
                                <h4 class="smallTitleWhite"
                                    style={
                                        {color: "#202331"}
                                }>and laser tag tournaments</h4>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
            <section class="utilitySet">
                <div class="container">
                    <div class="row">
                        <div class="col-md-6">
                            <div class="dimentionItem">
                                <div class="dimentionTitle">Dimensions</div>
                                <div class="dimentionValue">2 х 1,2 m</div>
                                <img src="/img/dimentions1.png"/>
                                <div class="dimentionName">
                                    <h4>Cylinder</h4>
                                </div>
                            </div>

                        </div>
                        <div class="col-md-6">
                            <div class="dimentionItem">
                                <div class="dimentionTitle">Dimensions</div>
                                <div class="dimentionValue">1,5 х 1 m</div>
                                <img src="/img/dimentions2.png"/>
                                <div class="dimentionName">
                                    <h4>Tree</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-6">
                            <div class="dimentionItem">
                                <div class="dimentionTitle">Dimensions</div>
                                <div class="dimentionValue">2,1 х 2,5 х 2,75 m</div>
                                <img src="/img/dimentions3.png"/>
                                <div class="dimentionName">
                                    <h4>Dorito medium</h4>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="dimentionItem">
                                <div class="dimentionTitle">Dimensions</div>
                                <div class="dimentionValue">1,7 х 1,7 х 1,7 m</div>
                                <img src="/img/dimentions4.png"/>
                                <div class="dimentionName">
                                    <h4>Dorito small</h4>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-md-6">
                            <div class="dimentionItem">
                                <div class="dimentionTitle">Dimensions</div>
                                <div class="dimentionValue">1,5 х 1 х 1 m</div>
                                <img src="/img/dimentions5.png"/>
                                <div class="dimentionName">
                                    <h4>Tall Cakе</h4>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="dimentionItem">
                                <div class="dimentionTitle">Dimensions</div>
                                <div class="dimentionValue">1 х 1 х 1 m</div>
                                <img src="/img/dimentions6.png"/>
                                <div class="dimentionName">
                                    <h4>Cakе</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-6">
                            <div class="dimentionItem">
                                <div class="dimentionTitle">Dimensions</div>
                                <div class="dimentionValue">1,95 х 1,5 х 0,5 m</div>
                                <img src="/img/dimentions7.png"/>
                                <div class="dimentionName">
                                    <h4>Wing</h4>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="dimentionItem">
                                <div class="dimentionTitle">Dimensions</div>
                                <div class="dimentionValue">0,75 х 0,5 х 3 m</div>
                                <img src="/img/dimentions8.png"/>
                                <div class="dimentionName">
                                    <h4>Snake Beam</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>

            {/* section 23 */}
            <section class="airbunkerTableIntro airbunkerDroneRaceSec">
                <div class="background-overlay"
                    style={
                        {opacity: '0.3'}
                }></div>
                <div class="container">
                    <div class="airbunkerLogo">
                        <img src="/img/airbunker-logo.png"/>
                    </div>

                    <div class="airbunkerBannerContent">
                        <div class="row">
                            <div class="col-md-6">
                                <h2 class="whiteTitle">
                                    <span>Set of Bunkers</span><br/>
                                    for Drone Racing</h2>
                            </div>

                            <div class="col-md-6"></div>

                        </div>
                    </div>
                </div>
            </section>
            <section class="airbunkerRequirement">
                <div class="bunker">
                    <div class="row">
                        <div class="col-md-6">
                            <img src="/img/airbunker-require.png"/>

                        </div>
                        <div class="col-md-6">
                            <br/><br/>
                            <h2>for away games</h2>
                            <h5 class="smallTitleWhite"
                                style={
                                    {color: "#202331"}
                            }>(for drawing a logo on the figure)</h5>
                            <ul>
                                <li>Formats:
                                    <b>cdr, ai, eps, svg</b>
                                </li>
                                <li>Vector image only (bitmap images disguised as vector format are not accepted)</li>

                                <li>
                                    All layers must be merged into one (not grouped, but merged)</li>
                                <li>The logo must be of one solid color (the color is not important)</li>
                                <li>Lines must be at least 1mm thin</li>

                            </ul>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}
