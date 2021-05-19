import Link from 'next/link'
import {MdChat} from "react-icons/md";
import Layout from '/components/ar/layout'

export default function header() {
    return (
        <Layout>
            <div class="language rtl">
                <Link href="../en/outdoor/game-scenario-devices">
                    <a>
                        <MdChat/>
                        English
                    </a>
                </Link>
            </div>
            <div class="outdoorBannerTop">
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <img src="/img/netronicLogo.jpg" width="100px"/>
                            <h2 class="sectionHeading">أجهزة سيناريو اللعبة</h2>

                        </div>
                    </div>
                </div>

            </div>
            <section class="headbandSec sceneSec">
                <div class="container">
                    <div class="taggerGroupHeaderPreTitle">الملحقات</div>
                    <div class="row">
                        <div class="col-md-6">
                            <div class="taggerGroupItemName">
                                <h2 class="whiteTitle">
                                    <img src="/img/sirius-logo.jpg"/></h2>
                            </div>
                            <div class="whiteTitleText">
                                <h4 style={
                                    {border: 'none'}
                                }>جهاز سيناريو المحمول</h4>
                            </div>

                            <img src="/img/serious-img.jpg"/>
                        </div>
                        <div class="col-md-6">
                            <div class="row">

                                <div class="col-md-12">
                                    <div class="whiteTitleText">
                                        <h4>المواصفات</h4>
                                        <table class="table table-striped darktable">
                                            <tbody>
                                                <tr>
                                                    <th scope="row">1</th>
                                                    <td>عدد أوضاع اللعبة
                                                    </td>
                                                    <td>8</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">2</th>
                                                    <td>طريقة التنشيط
                                                    </td>
                                                    <td>عن طريق الطلقة أو اللمس</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">3</th>
                                                    <td>مؤشر الصوت
                                                    </td>
                                                    <td>لا يوجد</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">4</th>
                                                    <td>عمر بطارية
                                                    </td>
                                                    <td>يصل إلى 24 ساعة</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>

                            </div>
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="whiteTitleText">
                                        <p>جهاز تفاعلي لتنفيذ سيناريوهات لعب مثيرة. يمكن تنشيط الجهاز عن طريق اللمس أو الطلقات، مما يزيد من مستوى اهتمام اللاعبين وانغماسهم التام في اللعبة.  
                                        </p>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="whiteTitleText">
                                        <p>وزن الجهاز الخفيف وحجمه الصغير (نصف قطره يبلغ 19 سم) بالإضافة لجسمه المقاوم للماء واعتماده على مصدر طاقة مستقل يجعلون من الممكن تثبيته في مجموعة متنوعة من المواقع. الأمر كله مجرد دقيقتان حتى يتكيف الموقع مع أي سيناريو وأي رغبة لدى عملائك.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="whiteTitleText">
                                <h4>8 أنماط</h4>
                            </div>
                            <div class="row">
                                <div class="col-sm-3 col-xs-4">
                                    <div class="siriusIconItem">
                                        <img src="/img/sirius-icon1.jpg" width="60px"/>
                                        <h2>الإشعاع</h2>
                                    </div>

                                </div>
                                <div class="col-sm-3 col-xs-4">
                                    <div class="siriusIconItem">
                                        <img src="/img/sirius-icon2.jpg" width="60px"/>
                                        <h2>العدة الطبية</h2>
                                    </div>
                                </div>
                                <div class="col-sm-3 col-xs-4">
                                    <div class="siriusIconItem">
                                        <img src="/img/sirius-icon3.jpg" width="60px"/>
                                        <h2>الذخيرة</h2>
                                    </div>
                                </div>
                                <div class="col-sm-3 col-xs-4">
                                    <div class="siriusIconItem">
                                        <img src="/img/sirius-icon4.jpg" width="60px"/>
                                        <h2>العودة للحياة</h2>
                                    </div>
                                </div>


                                <div class="col-sm-3 col-xs-4">
                                    <div class="siriusIconItem">
                                        <img src="/img/sirius-icon5.jpg" width="60px"/>
                                        <h2>العَلَم الرقمي</h2>
                                    </div>

                                </div>
                                <div class="col-sm-3 col-xs-4">
                                    <div class="siriusIconItem">
                                        <img src="/img/sirius-icon6.jpg" width="60px"/>
                                        <h2>عشوائي</h2>
                                    </div>
                                </div>
                                <div class="col-sm-3 col-xs-4">
                                    <div class="siriusIconItem">
                                        <img src="/img/sirius-icon7.jpg" width="60px"/>
                                        <h2>
                                           بونص
                                        </h2>
                                    </div>
                                </div>
                                <div class="col-sm-3 col-xs-4">
                                    <div class="siriusIconItem">
                                        <img src="/img/sirius-icon8.jpg" width="60px"/>
                                        <h2>القاعدة</h2>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </section>

            <section class="headbandSec sceneSec"
                style={
                    {background: "#080808"}
            }>
                <div class="container">
                    <div class="taggerGroupHeaderPreTitle">اكسسوارات</div>
                    <div class="row">
                        <div class="col-md-6">
                            <div class="taggerGroupItemName">
                                <h2 class="whiteTitle">
                                    <img src="/img/multistation-logo.png"/></h2>
                            </div>
                            <div class="whiteTitleText">
                                <h4 style={
                                    {border: 'none'}
                                }>جهاز سيناريوهات الساحة</h4>
                            </div>

                            <img src="/img/multistation-image.png"/>
                        </div>
                        <div class="col-md-6">
                            <div class="row">

                                <div class="col-md-12">
                                    <div class="whiteTitleText">
                                        <h4>المواصفات</h4>
                                        <table class="table table-striped darktable">
                                            <tbody>
                                                <tr>
                                                    <th scope="row">1</th>
                                                    <td>عدد أنماط اللعبة</td>
                                                    <td>7</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">2</th>
                                                    <td>طريقة التفعيل
                                                    </td>
                                                    <td>طلقة</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">3</th>
                                                    <td>الإشارة الصوتية
                                                    </td>
                                                    <td>نعم</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">4</th>
                                                    <td>عمر البطارية
                                                    </td>
                                                    <td>مصدر الطاقة الرئيسي</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>

                            </div>
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="whiteTitleText">
                                        <p>جهاز يجعل ألعاب الليزر تاغ أكثر إثارة ويعطي ساحة اللعب الشخصية المميزة والتعريف.</p>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="whiteTitleText">
                                        <p>حجم الشاشة الكبير يسمح لك بعرض صور متحركة مفصلة وعالية الجودة، بحيث يمكن تمييزها من مسافة بعيدة حتى مع ديناميكيات اللعبة سريعة التغي.السيناريوهات يام عرضها بألوان نقية!</p>
                                    </div>
                                </div>
                            </div>
                            <div class="whiteTitleText">
                                <h4>8 أنماط</h4>
                            </div>
                            <div class="row">
                                <div class="col-sm-3 col-xs-4">
                                    <div class="siriusIconItem">
                                        <img src="/img/sirius-icon1.jpg" width="60px"/>
                                        <h2>الإشعاع</h2>
                                    </div>

                                </div>
                                <div class="col-sm-3 col-xs-4">
                                    <div class="siriusIconItem">
                                        <img src="/img/sirius-icon2.jpg" width="60px"/>
                                        <h2>العدة الطبية</h2>
                                    </div>
                                </div>
                                <div class="col-sm-3 col-xs-4">
                                    <div class="siriusIconItem">
                                        <img src="/img/sirius-icon3.jpg" width="60px"/>
                                        <h2>الذخيرة</h2>
                                    </div>
                                </div>
                                <div class="col-sm-3 col-xs-4">
                                    <div class="siriusIconItem">
                                        <img src="/img/sirius-icon4.jpg" width="60px"/>
                                        <h2>العودة للحياة</h2>
                                    </div>
                                </div>

                                <div class="col-sm-3 col-xs-4">
                                    <div class="siriusIconItem">
                                        <img src="/img/sirius-icon5.jpg" width="60px"/>
                                        <h2>صندوق الهيمنة</h2>
                                    </div>

                                </div>
                                <div class="col-sm-3 col-xs-4">
                                    <div class="siriusIconItem">
                                        <img src="/img/sirius-icon6.jpg" width="60px"/>
                                        <h2>القنبلة</h2>
                                    </div>
                                </div>

                                <div class="col-sm-3 col-xs-4">
                                    <div class="siriusIconItem">
                                        <img src="/img/sirius-icon8.jpg" width="60px"/>
                                        <h2>القاعدة</h2>
                                    </div>
                                </div>

                            </div>


                        </div>
                    </div>
                </div>

            </section>

            <section class="taggerGroup">
                <div class="accessoriesGroupHeader">
                    <div class="container">
                        <div class="taggerGroupHeaderPreTitle blackPreTitle">اكسسوارات</div>
                    </div>
                </div>
                <div class="taggerGroupBody">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-12">
                                <div class="taggerGroupItem">
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="taggerGroupItemName">
                                                <h2>
                                                    <strong>صندوق الهيمنة الذكي</h2>
                                            </div>
                                            <div class="taggerGroupItemSpec">
                                                <img src="/img/img154.jpg"/>


                                            </div>

                                        </div>
                                        <div class="col-md-6">
                                            <div class="ItemSubTitle">
                                                المواصفات
                                            </div>

                                            <div class="taggerGroupItemSpec">
                                                <table class="table table-striped">
                                                    <tbody>
                                                        <tr>
                                                            <th scope="row">1</th>
                                                            <td>عدد أنماط اللعبة</td>
                                                            <td>5</td>

                                                        </tr>
                                                        <tr>
                                                            <th scope="row">2</th>
                                                            <td>طريقة التفعيل</td>
                                                            <td>طلقة</td>

                                                        </tr>
                                                        <tr>
                                                            <th scope="row">3</th>
                                                            <td>التحكم</td>
                                                            <td>إشارة صوتية</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">3</th>
                                                            <td>عمر البطارية</td>
                                                            <td>يصل إلى 24 ساعة</td>
                                                        </tr>
                                                    </tbody>
                                                </table>

                                            </div>
                                            <br/><br/>
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <p>الإمساك بصندوق الهيمنة هو واحد من ديناميكيات اللعبة الأكثر شعبية في ألعاب الليزر تاغ، فصندوق الهيمنة الذكي يقدم للمشاركين باللعبة مستوى جديد من الديناميكية بأحداث اللعبة.</p>
                                                    <p>جهاز السيناريوهات يتم وضعه في وسط الساحة، بما أنه المكان ذا أكبر مستوى من النشاط.</p>
                                                </div>
                                                <div class="col-md-6">
                                                    <p>الجهاز يحتوي على 5 أنماط، ويمكنك إنشاء سيناريوهات مثيرة بناءً عليها أو تعديل الأنماط الحالية. يتم عرض إشارة تصف درجة الهيمنة على 3 مقاييس ديناميكية، مما يسمح للاعبين بمتابعة تقدم فريقهم والتفكير في خططهم بشكل تكتيكي.</p>
                                                </div>
                                            </div>
                                            <br/>
                                            <br/>
                                            <div class="row">
                                                <div class="col-sm-4 col-xs-6">
                                                    <div class="dboxIconItem">
                                                        <img src="/img/dbox-icon1.jpg"/>
                                                        <h2>الامساك قبل الوقت
                                                        </h2>
                                                    </div>
                                                </div>
                                                <div class="col-sm-4 col-xs-6">
                                                    <div class="dboxIconItem">
                                                        <img src="/img/dbox-icon2.jpg"/>
                                                        <h2>شد الحبل</h2>
                                                    </div>
                                                </div>
                                                <div class="col-sm-4 col-xs-6">
                                                    <div class="dboxIconItem">
                                                        <img src="/img/dbox-icon3.jpg"/>
                                                        <h2>الامساك بالطلقات</h2>
                                                    </div>
                                                </div>
                                                <div class="col-sm-4 col-xs-6">
                                                    <div class="dboxIconItem">
                                                        <img src="/img/dbox-icon4.jpg"/>
                                                        <h2>رفع العلم</h2>
                                                    </div>
                                                </div>
                                                <div class="col-sm-4 col-xs-6">
                                                    <div class="dboxIconItem">
                                                        <img src="/img/dbox-icon5.jpg"/>
                                                        <h2>الامساك الثلاثي</h2>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </section>

            <section class="taggerGroup">
                <div class="accessoriesGroupHeader">
                    <div class="container">
                        <div class="taggerGroupHeaderPreTitle blackPreTitle">Accessories</div>
                    </div>
                </div>
                <div class="taggerGroupBody">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-12">
                                <div class="taggerGroupItem">
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="taggerGroupItemName">
                                                <h2>
                                                    <strong>Laser tag Grenade &nbsp;</strong>
                                                </h2>
                                            </div>
                                            <div class="taggerGroupItemSpec">
                                                <img src="/img/img451.jpg"/>
                                            </div>

                                        </div>
                                        <div class="col-md-6">

                                            <hr/>
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <p>The body of the laser tag grenade is made of impact-resistant polymer  materials, two rubber bumpers soften drops and bumps. To activate the grenade, you need to hold the button and, when ready, release it by throwing the grenade towards the enemy.</p>
                                                </div>
                                                <div class="col-md-6">
                                                    <p>The device is equipped with an  infrared emitter, and after 4 seconds the grenade strikes all the enemies within a radius of 5 meters. The “explosion” of the laser tag grenade is accompanied by sound and light indication.</p>
                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="taggerGroupItemName">
                                                <h2>
                                                    <strong>Red dot sight &nbsp;</strong>
                                                </h2>
                                            </div>
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <div class="taggerGroupItemSpec">
                                                        <img src="/img/img454.jpg"/>
                                                    </div>
                                                </div>
                                                <div class="col-md-6">
                                                    <p>The red dot sight simplifies the aiming process and makes it more accurate. Adds realism to the game.
                                                    </p>
                                                    <p>Horizontal and vertical adjustment of corrections are done by clicks.
                                                    </p>
                                                </div>
                                            </div>

                                        </div>
                                        <div class="col-md-6">
                                            <div class="taggerGroupItemName">
                                                <h2>
                                                    <strong>Protective tip &nbsp;</strong>
                                                </h2>
                                            </div>
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <div class="taggerGroupItemSpec">
                                                        <img src="/img/img456.jpg"/>
                                                    </div>
                                                </div>
                                                <div class="col-md-6">
                                                    <p>Protective rubber tip for the Falcon game kit protects players from injuries and prevents damage to the optical system. It makes laser tag rifles look really attractive and can also be used to mark teams</p>
                                                    <p>It’s 8-mm thick and covers the front part of the Falcon for 10 mm</p>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </section>

            <section class="taggerGroup">
                <div class="accessoriesGroupHeader">
                    <div class="container">
                        <div class="taggerGroupHeaderPreTitle blackPreTitle">Accessories</div>
                    </div>
                </div>
                <div class="taggerGroupBody">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-12">
                                <div class="taggerGroupItem">
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="taggerGroupItemName">
                                                <h2>
                                                    <strong>Shipping bag 6x</strong>
                                                </h2>
                                            </div>
                                            <div class="taggerGroupItemSpec">
                                                <img src="/img/img476.jpg"/>
                                            </div>

                                        </div>
                                        <div class="col-md-6">

                                            <hr/>
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <p>The bag is aimed at transportation of the laser tag equipment and is meant for 6 game kits and there are also special pockets for the chargers and remotes.</p>
                                                    <p>The bag is made of thick Cordura cloth of black color, durable and resistant to dirt and soaking.</p>
                                                </div>
                                                <div class="col-md-6">
                                                    <p>Thick and at the same time soft outer walls and inner divisions of the bag provide the secure equipment transportation.</p>

                                                    <p>The interior space is organized so that you can change the arrangement of the partitions according to your needs. The partitions are removable and fixed with Velcro.
                                                    </p>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>

                        <div class="row">
                            <div class="col-md-12">
                                <div class="taggerGroupItem">
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="taggerGroupItemName">
                                                <h2>
                                                    <strong>«Vortex» charger</strong>
                                                </h2>
                                            </div>
                                            <div class="taggerGroupItemSpec">
                                                <img src="/img/img485.jpg"/>
                                            </div>

                                        </div>
                                        <div class="col-md-6">

                                            <hr/>
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <p>The «Vortex» Charger makes charging your game sets much easier and faster.</p>
                                                    <p>
                                                        If you have 6 or more laser tag gaming kits in your club, this device is just what you need!
                                                    </p>
                                                </div>
                                                <div class="col-md-6">
                                                    <p>The device can simultaneously charge 10 game sets (20 devices). This eliminates the need for alternate charging or the use of multiple surge protectors and tees, which is extremely inconvenient and sometimes unsafe.</p>
                                                    <p>
                                                        The «Vortex» charger has 2A power, a drop-resistant shockproof case, and long cables (3-6 m).</p>


                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </section>

            <section class="headbandSec sceneSec"
                style={
                    {background: "#070b0c"}
            }>
                <div class="container">
                    <div class="taggerGroupHeaderPreTitle">Accessories</div>
                    <div class="row">
                        <div class="col-md-6">
                            <div class="taggerGroupItemName">
                                <h2 class="whiteTitle">
                                    <strong>SMART &nbsp;</strong>
                                    remote control</h2>
                            </div>
                            <div class="whiteTitleText"></div>

                            <div class="row">
                                <div class="col-md-6">
                                    <div class="whiteTitleText">
                                        <p>This device is for setting up and controlling game sets and additional devices. With the help of the remote control you can choose the team color, game mode, as well as set the players’ parameters
                                        </p>
                                        <p>The 18 tactical buttons are grouped according to their purpose, which allows you to instantly send commands. Using a handy clip, you can fix the remote control
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                on your belt.</p>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="whiteTitleText">
                                        <p>Each button is programmable for any command (from turning off the gaming kit tochanging a preset) and, if necessary, you can quickly return to the factory settings.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="row">

                                <div class="col-md-12">
                                    <img src="/img/img507.jpg"
                                        style={
                                            {maxWidth: "300px"}
                                        }/>
                                </div>

                            </div>


                        </div>
                    </div>
                </div>

            </section>
        </Layout>
    )
}
