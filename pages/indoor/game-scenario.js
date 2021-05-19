import Link from 'next/link'
import {MdChat} from "react-icons/md";
import Layout from '/components/ar/layout'

export default function header() {
    return (
        <Layout>
            <div class="language rtl">
                <Link href="../en/indoor/game-scenario">
                    <a>
                        <MdChat/>
                        English
                    </a>
                </Link>
            </div>
            <section class="indoorbanner">
                <div class="container">
                    <img src="/img/eclips-indoor.jpg"/></div>
            </section>
            <section class="indoorbanner gradientBlack">
                <div class="container">
                    <h2 class="skyblueTitle text-center">لعبه
                        <span>سيناريو
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
                       سيريوس</h2>
                    <p>جهاز سيناريو محمول يمنح اللاعبين مكافآت. وضع التشغيل النشط يتم عرضه من خلال الإضاءة الخلفية المتحركة للديودات.</p>
                    <div class="row">
                        <div class="col-xs-6">
                            <ul>
                                <li><img src="/img/gsicon1.png"/>إشعاع</li>
                                <li><img src="/img/gsicon3.png"/>العدة الطبية</li>
                                <li><img src="/img/gsicon5.png"/>القاعدة</li>
                                <li><img src="/img/gsicon7.png"/>بونص</li>
                            </ul>
                        </div>
                        <div class="col-xs-6">
                            <ul>
                                <li><img src="/img/gsicon2.png"/>ذخيرة</li>
                                <li><img src="/img/gsicon4.png"/>العودة للحياة</li>
                                <li><img src="/img/gsicon6.png"/>عشوائي</li>
                                <li><img src="/img/gsicon8.png"/>العلم الرقمي</li>
                            </ul>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12">
                            <table class="normalTable">
                                <tr>
                                    <td>التنشيط بالطلقات</td>
                                    <td>+</td>
                                </tr>
                                <tr>
                                    <td>التنشيط باللمس
                                    </td>
                                    <td>+</td>
                                </tr>
                                <tr>
                                    <td>عمر البطارية
                                    </td>
                                    <td>up to 24 hours</td>
                                </tr>
                                <tr>
                                    <td>الحجم</td>
                                    <td>19х19х5,5 cm</td>
                                </tr>
                                <tr>
                                    <td>الوزن</td>
                                    <td>520 grams</td>
                                </tr>

                                <tr>
                                    <td>طريقة التحكم</td>
                                    <td>أندرويد</td>
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
                                <li><img src="/img/gsicon7.png"/>DOMINATION BOX</li>
                            </ul>
                        </div>
                        <div class="col-xs-6">
                            <ul>
                                <li><img src="/img/gsicon2.png"/>AMMO</li>
                                <li><img src="/img/gsicon4.png"/>RESPAWN</li>
                                <li><img src="/img/gsicon6.png"/>BOMB</li>
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
                                    <td>39х37х7,5 cm</td>
                                </tr>
                                <tr>
                                    <td>Weight</td>
                                    <td>1600 grams</td>
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
                        <p>The Domination box is placed on the floor or ceiling in the center of the arena, the goal of each team is to capture it. It has three dynamic scales for vivid and effective visualization of the degree of capture.</p>
                    </div>
                    <div class="row">
                        <div class="col-xs-6">
                            <ul>
                                <li><img src="/img/dbox-icon1.jpg"/>TIME CAPTURE</li>
                                <li><img src="/img/dbox-icon5.jpg"/>TRIPLE CAPTURE</li>
                                <li><img src="/img/dbox-icon2.jpg"/>TUG-OF-WAR</li>

                            </ul>
                        </div>
                        <div class="col-xs-6">
                            <ul>
                                <li><img src="/img/dbox-icon4.jpg"/>FLAG RAISE</li>
                                <li><img src="/img/dbox-icon3.jpg"/>SHOOTING CAPTURE</li>

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
                                    <td>Sound indication</td>
                                    <td>1 speaker</td>
                                </tr>
                                <tr>
                                    <td>Battery life
                                    </td>
                                    <td>up to 24 hours</td>
                                </tr>

                                <tr>
                                    <td>Size</td>
                                    <td>22х22х32 cm</td>
                                </tr>
                                <tr>
                                    <td>Weight</td>
                                    <td>1600 grams</td>
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
        </Layout>
    )
}
