import Link from 'next/link'
import {MdChat} from "react-icons/md";
import Layout from '/components/ar/layout'

export default function header() {
    return (
        <Layout>
            <div class="language rtl">
                <Link href="../en/indoor/game-scenario">

                    <MdChat/>English
                </Link>
            </div>
            <section class="indoorbanner rtl">
                <div class="container">
                    <img src="/img/eclips-indoor-flip.jpg" class="nortlimg"/></div>
            </section>
            {/* <section class="indoorbanner gradientBlack rtl">
                <div class="container">
                    <h2 class="skyblueTitle text-center">ملتي-ستایشن
                    </h2>
                </div>
            </section> */}

            <section class="gameKitSec rtl">
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
                                    <td>يصل إلى 24 ساعة</td>
                                </tr>
                                <tr>
                                    <td>الحجم</td>
                                    <td>19х19х5.5 سم</td>
                                </tr>
                                <tr>
                                    <td>الوزن</td>
                                    <td>520 جرام</td>
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
            <section class="gameKitSec rtl">
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
                        ملتي-ستايشن</h2>
                    <p>جهاز سيناريو ملتي-ستایشن الوظائف يمكنه منح مكافآت للاعبين أو العمل كهدف للإمساك به.
                                                                                                                                                                                                                                                                                                                                                                                                لوحة الإضاءة ليد بمقاس 27 سم تعرض وضع التشغيل بشكل متحرك.</p>
                    <div class="row">
                        <div class="col-xs-6">
                            <ul>
                                <li><img src="/img/gsicon1.png"/>إشعاع</li>
                                <li><img src="/img/gsicon3.png"/>العدة الطبية</li>
                                <li><img src="/img/gsicon5.png"/>القاعدة</li>
                                <li><img src="/img/gsicon7.png"/>صندوق الهيمنة</li>
                            </ul>
                        </div>
                        <div class="col-xs-6">
                            <ul>
                                <li><img src="/img/gsicon2.png"/>الذخيرة</li>
                                <li><img src="/img/gsicon4.png"/>العودة للحياة</li>
                                <li><img src="/img/gsicon6.png"/>قنبلة</li>
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
                                    <td>يصل إلى 24 ساعة</td>
                                </tr>
                                <tr>
                                    <td>الحجم</td>
                                    <td>39х37х7.5 سم</td>
                                </tr>
                                <tr>
                                    <td>الوزن</td>
                                    <td>1600 جرام</td>
                                </tr>

                                <tr>
                                    <td>طريقة التحكم</td>
                                    <td>أندرويد</td>
                                </tr>

                            </table>

                        </div>

                    </div>

                </div>


            </section>

            {/* super power */}
            <section class="superPowerSec rtl">
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
                            }>صندوق الهيمنة الذكي</b>
                        </h2>
                        <p>يتم وضع صندوق الهيمنة على الأرض أو السقف في وسط ساحة اللعبة، حيث يكون هدف كل فريق هو الإمساك به. يحتوي الصندوق على ثلاثة مقاييس ديناميكية لتصوير حيوي وفعال لدرجة الإمساك.</p>
                    </div>
                    <div class="row">
                        <div class="col-xs-6">
                            <ul>
                                <li><img src="/img/dbox-icon1.jpg"/>الإمساك بوقت محدد</li>
                                <li><img src="/img/dbox-icon5.jpg"/>الإمساك الثلاثي</li>
                                <li><img src="/img/dbox-icon2.jpg"/>شد الحبل</li>

                            </ul>
                        </div>
                        <div class="col-xs-6">
                            <ul>
                                <li><img src="/img/dbox-icon4.jpg"/>رفع العلم</li>
                                <li><img src="/img/dbox-icon3.jpg"/>الإمساك بالطلقات</li>

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
                                    <td>الإشارة الصوتية</td>
                                    <td>1 مكبر صوت واحد</td>
                                </tr>
                                <tr>
                                    <td>عمر البطارية
                                    </td>
                                    <td>يصل إلى 24 ساعة</td>
                                </tr>

                                <tr>
                                    <td>الحجم</td>
                                    <td>22х22х32 سم</td>
                                </tr>
                                <tr>
                                    <td>الوزن</td>
                                    <td>1600 جرام</td>
                                </tr>

                                <tr>
                                    <td>طريقة التحكم</td>
                                    <td>أندرويد</td>
                                </tr>

                            </table>

                        </div>

                    </div>
                </div>


            </section>


            <div class="indoorBtn">
                <Link href="/indoor" class="btn btn-primary btnMain">
                    غالاكسي إكليبس الداخلي
                </Link>
            </div>
        </Layout>
    );
}
