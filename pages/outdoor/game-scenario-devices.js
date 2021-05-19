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
                                                    <strong>قنبلة الليزر تاغ اليدوية</strong>
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
                                                    <p>جسم قنبلة الليزر تاغ اليدوية مصنوع من مادة بوليمر مقاومة للصدمات، بالإضافة لاثنين من المصدات المطاطية تعملان على تليين السقطات والصدمات. لتنشيط القنبلة اليدوية، تحتاج إلى الضغط على الزر بشكل مستمر، وعندما تكون جاهزًا للإلقاء، عليك القيام بتحرير ضغطتك عن طريق رمي القنبلة باتجاه العدو.</p>
                                                </div>
                                                <div class="col-md-6">
                                                    <p>الجهاز مزود بباعث للأشعة تحت الحمراء، وبعد 4 ثوانٍ تصيب القنبلة كل الأعداء في نطاق 5 أمتار من مكان الجهاز. "انفجار" قنبلة الليزر تاغ اليدوية يرافقه إشارة صوتية وضوئية.</p>
                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="taggerGroupItemName">
                                                <h2>
                                                    <strong>عدسة النقطة الحمراء</strong>
                                                </h2>
                                            </div>
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <div class="taggerGroupItemSpec">
                                                        <img src="/img/img454.jpg"/>
                                                    </div>
                                                </div>
                                                <div class="col-md-6">
                                                    <p>عدسة النقطة الحمراء تبسط عملية التصويب وتجعلها أكثر دقة، كما تضيف المزيد من الواقعية للعبة..
                                                    </p>
                                                    <p>الضبط الأفقي والرأسي للتصحيحات تتم عن طريق الضغطات.
                                                    </p>
                                                </div>
                                            </div>

                                        </div>
                                        <div class="col-md-6">
                                            <div class="taggerGroupItemName">
                                                <h2>
                                                    <strong>طرف حماية</strong>
                                                </h2>
                                            </div>
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <div class="taggerGroupItemSpec">
                                                        <img src="/img/img456.jpg"/>
                                                    </div>
                                                </div>
                                                <div class="col-md-6">
                                                    <p>رأس مطاطي واقي لمجموعة ألعاب مسدسات فالكون لحماية اللاعبين من الإصابات ومنع تلف النظام الرؤية، كما يجعل بنادق الليزر تاغ تبدو جذابة جدًا ويمكن أيضًا استخدامها لتمييز الفرق.</p>
                                                    <p>يبلغ سمكه 8 مم ويغطي 10 مم من الجزء الأمامي من مسدسات فالكون.</p>
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
                        <div class="taggerGroupHeaderPreTitle blackPreTitle">ملحقات</div>
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
                                                    <strong>حقيبة شحن 6×</strong>
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
                                                    <p>تهدف الحقيبة إلى تسهيل نقل معدات ألعاب الليزر تاغ وهي مخصصة لـ 6 مجموعات ألعاب، كما أن هناك أيضًا جيوب خاصة لأجهزة الشحن وأجهزة التحكم عن بُعد.</p>
                                                    <p>الحقيبة مصنوعة من قماش كوردورا السميك باللون الأسود، وهي مادة متينة ومقاومة للأوساخ والنقع.</p>
                                                </div>
                                                <div class="col-md-6">
                                                    <p>الإطار الخارجي السميك ولين بنفس الوقت وكذلك التقسيم الداخلي للحقيبة يوفران نقلًا آمنًا للمعدات.</p>

                                                    <p>المساحة الداخلية منظمة بحيث يمكنك تغيير ترتيب الأقسام حسب احتياجاتك. الأقسام قابلة للإزالة ومثبتة باستخدام الفيلكرو..
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
                                                    <strong>شاحن فورتيكس «Vortex»</strong>
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
                                                    <p>شاحن فورتيكس «Vortex» يجعل شحن مجموعات الألعاب الخاصة بك أسهل وأسرع.</p>
                                                    <p>
                                                       إذا كان لديك 6 أو أكثر من مجموعات ألعاب الليزر تاغ في ناديك، فهذا الجهاز هو ما تحتاجه تمامًا!
                                                    </p>
                                                </div>
                                                <div class="col-md-6">
                                                    <p>يمكن للجهاز شحن 10 مجموعات ألعاب (20 جهاز) في نفس الوقت، وهذا يلغي الحاجة إلى التبديل بأدوار الشحن أو استخدام أدوات للحماية من زيادة التيار ومحاذاة المحملات، وهو أمر غير مريح للغاية وغير آمن في بعض الأحيان.</p>
                                                    <p>
                                                        شاحن فورتيكس «Vortex» يعمل بقوة 2 أمبير، ويتميز بعلبة مقاومة للسقوط والصدمات وكابلات طويلة (بين 3 و6 متر).</p>


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
                    <div class="taggerGroupHeaderPreTitle">اكسسوارات</div>
                    <div class="row">
                        <div class="col-md-6">
                            <div class="taggerGroupItemName">
                                <h2 class="whiteTitle">
                                    <strong>الريموت الذكي</h2>
                            </div>
                            <div class="whiteTitleText"></div>

                            <div class="row">
                                <div class="col-md-6">
                                    <div class="whiteTitleText">
                                        <p>هذا جهاز لإعداد مجموعات اللعبة والأجهزة إضافية والتحكم بهم. بمساعدة جهاز التحكم عن بعد، يمكنك اختيار لون الفريق ونمط اللعبة وكذلك ضبط بيانات اللاعبين القياسية.
                                        </p>
                                        <p>الأزرار التكتيكية الـ 18 تم تقسيمهم لمجموعات وفقًا للغرضهم، مما يتيح لك إرسال الأوامر على الفور. باستخدام مشبك سهل الاستخدام، يمكنك تثبيت جهاز التحكم عن بعد على حزامك.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                on your belt.</p>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="whiteTitleText">
                                        <p>كل من الأزرار قابل للبرمجة لأي أمر (بدئًا من إيقاف تشغيل مجموعة ألعاب معينة إلى تغيير الإعداد المسبق)، وإذا لزم الأمر، يمكنك العودة بسرعة إلى إعدادات المصنع.</p>
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
