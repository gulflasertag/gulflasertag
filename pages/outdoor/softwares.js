import Link from 'next/link'
import {MdChat} from "react-icons/md";
import Layout from '/components/ar/layout'

export default function header() {
    return (
        <Layout>
            <div class="language rtl">
                <Link href="../en/outdoor/softwares">
                    <a>
                        <MdChat/>
                        English
                    </a>
                </Link>
            </div>
            <div class="outdoorBannerTop rtl">
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <img src="/img/netronicLogo.jpg" width="100px" class="nortlimg"/>
                            <h2 class="sectionHeading">البرامج</h2>
                        </div>
                    </div>
                </div>
            </div>
            <section class="headbandSec sceneSec rtl"
                style={
                    {background: "#0b0b0b"}
            }>
                <div class="container">
                    <div class="taggerGroupHeaderPreTitle">الملحقات</div>
                    <div class="row">

                        <div class="col-md-6">
                            <div class="row">

                                <div class="col-md-12">
                                    <img src="/img/img568.jpg"/>
                                </div>

                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="taggerGroupItemName">
                                <h2 class="whiteTitle">
                                    <strong>جهاز راوتر الواي-فاي
                                    </strong>
                                </h2>
                            </div>
                            <div class="whiteTitleText">
                                <h4 style={
                                    {border: 'none'}
                                }>الميزات</h4>
                            </div>

                            <div class="row">
                                <div class="col-sm-6">
                                    <div class="whiteTitleText">
                                        <p>يوفر جهاز راوتر الواي-فاي التشغيل السريع للبرنامج وقراءة الإحصائيات عبر الإنترنت. يتم استخدام قرني استشعار هوائيين قابلين للإزالة وعالي الكفاءة لنقل الإشارات على المدى الطويل. يمكن أيضًا استخدام مكرر إذا كانت هناك حاجة لتمديد منطقة التغطية.
                                        </p>
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="whiteTitleText">
                                        <p>يمكنك إعداد جهاز راوتر الواي-فاي لتغطية عمليات نادي الليزر تاغ بالكامل بمساحة تبلغ حجم ملعب كرة قدم. يتميز الجهاز بخصائص مثالية لتشغيل جميع أنواع ألعاب الليزر تاغ. معدل نقل البيانات يصل إلى 300 ميجابت في الثانية.
                                        </p>

                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div class="row">
                        <div class="col-md-6">
                            <div class="row">

                                <div class="col-md-12">
                                    <img src="/img/Repeater.png"/>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="taggerGroupItemName">
                                <h2 class="whiteTitle">
                                    <strong>نظام تكرير الإشارة</strong>
                                </h2>
                            </div>


                            <div class="row">
                                <div class="col-sm-6">
                                    <div class="whiteTitleText">
                                        <p>جميع الأجهزة مزودة ببطارية بسعة 4200 مللي أمبير، لضمان عمر البطارية حتى 9 لـ 10 ساعات.
                                        </p>
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="whiteTitleText">
                                        <p>أجهزة تكرير الإشارة اللاسلكية تعمل على زيادة مساحة تغطية موجه الواي-فاي حتى 560,000 متر مربع. يتكون النظام من نقطة وصول مركزية و 4 مكررات بمدى يصل إلى 150 مترًا.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>


            </section>

            {/* section 21 */}
            <section class="headbandSec sceneSec rtl"
                style={
                    {
                        backgroundColor: "#070906",
                        backgroundImage: "url('/img/Page-21-Image-38.png')",
                        backgroundPosition: "bottom right",
                        backgroundAttachment: "fixed"
                    }
            }>
                <div class="container">
                    <div class="taggerGroupHeaderPreTitle">الملحقات</div>
                    <div class="row">
                        <div class="col-md-6">
                            <div class="taggerGroupItemName">
                                <h2 class="whiteTitle">
                                    <strong>صندوق أندرويد
                                    </strong>
                                </h2>
                            </div>
                            <div class="whiteTitleText">
                                <h4>الميزات</h4>
                            </div>

                            <div class="row">
                                <div class="col-sm-6">
                                    <div class="whiteTitleText">
                                        <p>
                                            يمكن توصيله بجهاز تلفزيون (أندرويد) باستخدام كابل شاشة (HDMI). يتم توصيل مشغل الليزر تاغ لإدارة اللعبة عبر قناة واي-فاي.</p>
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="whiteTitleText">
                                        <p>جهاز مثبت عليه (محذوف) نمط لجمع وعرض إحصائيات الليزر تاغ (محذوف)، وهو يسمح لك ببث الإحصائيات عبر الإنترنت إلى شاشة تلفزيون.</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="row">

                                <div class="col-md-12"></div>

                            </div>


                        </div>
                    </div>

                    <div class="row">
                        <div class="col-md-6">
                            <div class="taggerGroupItemName">
                                <h2 class="whiteTitle">
                                    <strong>شاحن باور بانك</strong>
                                </h2>
                            </div>
                            <div class="whiteTitleText">
                                <h4>الميزات</h4>
                            </div>

                            <div class="row">
                                <div class="col-sm-6">
                                    <div class="whiteTitleText">
                                        <p>تيار يصل حتى 1.5 أمبير/12 فولت التشغيل الذاتي: 12 ساعة نطاق تغطية جهاز الراوتر مع جهاز الشحن الخارجي - 100 متر.
                                        </p>
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="whiteTitleText">
                                        <p>بطارية خارجية يمكن استخدامها بشكل أساسي مع جهاز راوتر الواي-فاي، مما يمكنك من تحويل ناديك إلى نادي متنقل؛ تشغيل البرنامج لا يحتاج أن يعتمد على وجود منفذ طاقة قريب من النادي.
                                        </p>
                                        <p>استضف الألعاب بأماكن بعيدة، وتحكم فيها مباشرة من أرض الملعب، وسجل الإحصائيات عبر الإنترنت وقم بكل شيء - بشكل مستقل تمامًا.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="row">

                                <div class="col-md-12"></div>

                            </div>


                        </div>
                    </div>
                </div>


            </section>
            {/* section 24 */}
            <section class="headbandSec sceneSec rtl"
                style={
                    {backgroundColor: "#0b0b0b"}
            }>
                <div class="container">
                    <div class="taggerGroupHeaderPreTitle">السوفت-وير
                    </div>
                    <div class="row">
                        <div class="col-md-6">
                            <img src="/img/free-software.png" class="nortlimg"/>
                        </div>
                        <div class="col-md-6">
                            <div class="taggerGroupItemName">
                                <h2 class="whiteTitle">
                                    <strong>برنامج السوفت وير مجاني
                                    </strong>
                                </h2>
                            </div>


                            <div class="row">
                                <div class="col-sm-6">
                                    <div class="whiteTitleText">
                                        <h4>إحصائيات أونلاين</h4>
                                        <p>يتيح لك البرنامج أن تحصل على إحصائيات وبيانات لحظية خاصة باللعبة و أن ترى دردشة أحداث اللعبة على شاشة الكمبيوتر أو على شاشة الهاتف لديك. تقوم خاصية دردشة الأحداث بعرض تصرفات وخطوات اللاعبين طوال المباراة. كما أن هذه الإحصائيات اللحظية تعرض لك أداء كل لاعب على حدى وأداء الفريق بشكل عام.</p>
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="whiteTitleText">
                                        <h4>سيناريوهات اللعبة</h4>
                                        <p>سوف تحصل على مجموعة من النصوص التصورية الجاهزة مرفقة مع معدات اللعب، والتي تم اختبارها في ظروف حقيقية محاكية للواقع، وذلك كي  تمضي كل يوم جديد بطريقة مبتكرة ومختلفة. باستخدام برنامج تصميم سيناريوهات اللعبة، يمكنك تعديل المهام الحالية أو إنشاء سيناريو فريد خاص بك.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="row">

                                <div class="col-sm-6">
                                    <div class="whiteTitleText">
                                        <h4>باتل رويال (المعركة الملكية)</h4>
                                        <p>تعد باتل رويال أحد اتجاهات الألعاب الرئيسية الأكثر شيوعًا في السنوات الأخيرة، حيث يحلم معظم اللاعبين في جميع أنحاء العالم بخوض تجارب حقيقية محاكية للواقع. والآن أصبح الأمر ممكنًا. ليست باتل رويال (المعركة الملكية) مجرد وضع جديد فقط، ,وإنما هي لعبة شمولية متكاملة تواكب نظائرها من ألعاب الكمبيوتر الشهيرة الأخرى بشكل أفضل.</p>
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="whiteTitleText">
                                        <h4>سهل التشغيل
                                        </h4>
                                        <p>للتحكم في أجهزة اللعبة، قم باستخدام التطبيق المجاني لنظام التشغيل ويندوز أو أندرويد. لقد حرصنا على  إتاحة وظائف تشغيلية واسعة النطاق في البرنامج واعتنينا بتوفير عناصر بسيطة ومريحة.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* section software slide 25 */}
            <section class="impulseRecoilSec rtl"
                style={
                    {
                        backgroundImage: "url('/img/Page-25-Image-44.jpg')",
                        backgroundSize: "100%",
                        backgroundAttachment: "scroll",
                        paddingTop: "60%",
                        backgroundPosition: "top center"
                    }
            }>

                <div class="container">
                    <div class="taggerGroupHeaderPreTitle topAbsolute">السوفت-وير</div>
                    <div class="row">

                        <div class="col-md-12">
                            <div class="row">

                                <div class="col-sm-3">
                                    <div class="whiteTitleText">
                                        <h3>إحصاءات المستحقات العامة</h3>
                                        <p>يتم توفير إحصاءات منفصلة لصاحب العمل والتي من خلالها يمكنه تتبع وقت وتاريخ ومدة استخدام كل مجموعة، وذلك باستثناء الألعاب غير المصرح بها.</p>
                                    </div>
                                </div>
                                <div class="col-sm-3">
                                    <div class="whiteTitleText">
                                        <h3>خاصية وضع الأطفال</h3>
                                        <p>إن وضع الأطفال هو خاصية باللعبة تم تهيئتها لكي تُستخدم من قبل اللاعبين الصغار (الأطفال دون سن 8 سنوات). يسمح هذا التحكم المُبسَّط لك أن تفهم أساسيات اللعبة بشكل أسرع وأن تستمتع بمعركة ليزر تاغ مشوقة.</p>
                                    </div>
                                </div>

                                <div class="col-sm-3">
                                    <div class="whiteTitleText">
                                        <h3>لوحة النتائج</h3>
                                        <p>يمكن عرض أحداث اللعبة على شاشات عرض كبيرة موجودة في الأماكن المخصصة للانتظار. وبذلك تستطبع أن تتابع تقدم اللعبة وأن تشجع بكل حماسة وتهتف لأحد الفرق. وأيضًا نتيح لك الفرصة لتفاجئ عملائك بالنتائج مطبوعة على مقدمة النماذج الورقية الخاصة بك.
                                        </p>
                                    </div>
                                </div>
                                <div class="col-sm-3">
                                    <div class="whiteTitleText">
                                        <h3>الإنجازات</h3>
                                        <p>يتم منح المشاركين رتبًا خاصة في نهاية الجولة حسب مهاراتهم وأسلوبهم في اللعب. وبالتالي سيتمكن كل مشارك من إحراز رتبة جيدة وأن يكون فخورًا بذلك، حتى في حال عدم تمكن فريقه من الفوز.</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </Layout>
    )
}
