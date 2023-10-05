import Link from 'next/link'
import {MdChat} from "react-icons/md";
import Layout from '../components/ar/layout'


export default function header() {
    return (
        <Layout>
            <div class="language rtl">
                <Link href="/en/indoor">

                    <MdChat/>English
                </Link>
            </div>
            <section class="indoorbanner">
                <div class="container">
                    <img src="/img/eclips-indoor-flip.jpg"/></div>
            </section>
            <section class="indoorbanner gradientBlack rtl">
                <div class="container">
                    <div class="inDoorBannerDes">
                        <p>
                            تصميم يتسم بالحماس ويشجع اللاعبين. 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            لعبة آمنة لا مكان فيها للعدائية.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            طرق لعب فريدة تصنع أبطالًا خارقين.
                        </p>
                    </div>
                </div>
            </section>
            <section class="gameKitSec rtl">
                <div class="gameKitDesc"
                    style={
                        {
                            backgroundImage: "url(/img/background-left-bottom.png), url(/img/background-top-left.png)",
                            backgroundPosition: "left bottom, left top"
                        }
                }>
                    <h2 class="greyBlackTitle">
                        <span>مجموعة الألعاب</span>غالاكسي إكليبس</h2>
                    <h6>غالاكسي إكليبس</h6>
                    <p>
                        هي جيل جديد من مجموعات ألعاب الليزر-تاغ الداخلية، وتتميز بأجهزة استشعار ذكية للتحكم في الإضاءة والحركة وطرق اللعب الفريدة مما يمكن أي شخص من أن يكون بطلًا خارقًا.

                    </p>

                </div>
                <div class="gameKitImg">
                    <img src="/img/game-kit.png" class="nortlimg"/>
                </div>

            </section>

            <section class="blasterSec rtl"
                style={
                    {backgroundImage: "url(/img/bg-outdoor2.png) !important"}
            }>
                <div class="container">
                    <div class="blasterKitDesc">
                        <img src="/img/gun.png"/>

                        <h2 class="skyblueTitle">مسدس
                            <span>غالاكسي إكليبس
                            </span>
                        </h2>

                        <div class="row">
                            <div class="col-md-2 col-sm-6"></div>
                            <div class="col-md-2 col-sm-6">
                                <div class="whiteTitleTextNoBorder">
                                    <h4>شاشة آي بي إس (IPS) ملونة</h4>
                                    <p>تعرض بيانات المجموعة القياسية وإحصائيات اللعبة.</p>
                                </div>
                            </div>
                            <div class="col-md-2 col-sm-6">
                                <div class="whiteTitleTextNoBorder">
                                    <h4>تقنية هالو</h4>
                                    <p>إضاءة مزدوجة للطلقة مصحوبة بلون الفريق.
                                    </p>
                                </div>
                            </div>

                            <div class="col-md-2 col-sm-6">
                                <div class="whiteTitleTextNoBorder">
                                    <h4>محاكاة الارتداد
                                    </h4>
                                    <p>الاهتزاز في مؤخرة المسدس يتيح للاعبين الشعور بكل طلقة.</p>
                                </div>
                            </div>

                            <div class="col-md-2 col-sm-6">
                                <div class="whiteTitleTextNoBorder">
                                    <h4>جهاز الاستشعار بسعة اليد</h4>
                                    <p>مما يمنع اللاعبين من أرجحة المسدس أو إطلاق النار بيد واحدة</p>
                                </div>
                            </div>
                            <div class="col-md-2 col-sm-6">
                                <div class="whiteTitleTextNoBorder">
                                    <h4>الطول - 40 سم</h4>
                                    <p>مما يجعل اللعب مريح حتى للأطفال بدئًا من سن 5 سنوات.</p>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>


            </section>
            <section class="brightShotTeamColorSec rtl">
                <div class="container">
                    <div class="row">
                        <div class="col-md-6">
                            <div class="whiteTitleTextNoBorder">
                                <h4>تقنية هالو</h4>
                                <p>
                                    بفضل تقنية هالو (HALO)، المسدس يرسل شعاعًا أحمر اللون بالإضافة وللمحة من لون الفريق مع كل طلقة.&nbsp;الإضاءة المزدوجة تجعل اللعبة أكثر أمانًا وتسمح أيضًا للاعبين بالتمييز بشكل أفضل بين الحلفاء والأعداء.</p>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <h2 class="skyblueTitle">
                                <span>طلقات مشرقة</span>
                                مميزة بلون الفريق
                            </h2>
                        </div>

                    </div>
                </div>
                <img src="/img/indoor-team-shot.jpg"/>
            </section>

            <section class="gameKitSec eclipsVest rtl">
                <div class="gameKitDesc"
                    style={
                        {
                            backgroundImage: "url(/img/background-left-bottom.png), url(/img/background-top-left.png)",
                            backgroundPosition: "left bottom, left top"
                        }
                }>

                    <h2 class="skyblueTitle">
                        سترة
                        <span>إكليبس</span>
                    </h2>
                    <div class="row">
                        <div class="col-md-6">
                            <div class="whiteTitleTextNoBorder">
                                <h4>5 وحدات للإشارة الاهتزازية</h4>
                                <p>اهتزاز مركز بالمنطقة الجسدية التي ضربها العدو محاكاة قوية للصدمات عندما يتم إلغاء اللاعب تمامًا.</p>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="whiteTitleTextNoBorder">
                                <h4>الطول - 42 سم
                                </h4>
                                <p>بسبب مساحة ملامسة الجسم الصغيرة، جسم اللاعب لا يسخن أثناء دورة اللعبة.</p>
                            </div>
                        </div>

                    </div>
                    <div class="row">
                        <div class="col-md-6">
                            <div class="whiteTitleTextNoBorder">
                                <h4>الوزن - 1200 جرام</h4>
                                <p>يسمح الوزن شديد الخفة للسترة للجميع باللعب، حتى للأطفال الصغار بعمر 5 سنوات.</p>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="whiteTitleTextNoBorder">
                                <h4>2 من مكبرات الصوت</h4>
                                <p>مكبرات الصوت مثبتة في أكتاف السترة حتى يظل الزوار على اطلاع دائم بجميع تطورات اللعبة.</p>
                            </div>
                        </div>

                    </div>


                </div>
                <div class="gameKitImg">
                    <img src="/img/galaxy-kit2.png" class="nortlimg"/>
                </div>

            </section>
            <section class="gameKitSec rtl">
                <div class="gameKitDesc"
                    style={
                        {
                            backgroundImage: "url(/img/background-left-bottom.png), url(/img/background-top-left.png)",
                            backgroundPosition: "left bottom, left top"
                        }
                }>

                    <h2 class="skyblueTitle"
                        style={
                            {color: '#222'}
                    }>

                        اشعر
                        <span>إكليبس</span>
                    </h2>
                    <div class="row">
                        <div class="col-md-1"></div>

                        <div class="col-md-5">
                            <h6>محاكاة الصدمات
                            </h6>
                            <p>وحدة محاكاة الصدمات المدمجة في الجزء الخلفي من السترة تعطي الاعب الذي تم إلغائه اهتزازًا قويًا، وذلك بفضل قدرة السترة الاهتزازية العالية. أيضًا عند الإصابة، فسيتم تشغيل إشارة اهتزازية مركزة في المنطقة الجسدية التي ضربها الخصم.
                            </p>
                        </div>

                        <div class="col-md-1"></div>


                        <div class="col-md-5">
                            <div class="">
                                <h6>مؤشر ضوء ذكي</h6>
                                <p>مجموعة ألعاب إكليبس ستعرض بشكل بسيط وحدسي وجاذب كل حدث في اللعبة، بما في ذلك الإصابات وتغييرالقيادة والانفجارات الافتراضية. هذه الميزة الهامة ممكنة فقط بفضل التركيب الهندسي المعقد لأجهزة الاستشعار والعمل المنسق بشكل جيد بين أكثر من 50 مؤشر ليد ضوئي.</p>
                            </div>
                        </div>


                    </div>

                </div>
                <div class="gameKitImg xs-hide">
                    <img src="/img/feel.png"/>
                </div>

            </section>

            <section class="threeSoundSec rtl">
                <div class="container">
                    <div class="row">


                        <div class="col-md-3 col-sm-6">
                            <div class="whiteTitleTextNoBorder">
                                <p>بفضل التشغيل المحيطي والمتوازي للأصوات، الزائر سيسمع كل إشعار.</p>
                                <p>تتوفر مجموعات الألعاب بست لغات مختلفة.</p>
                            </div>
                        </div>
                        <div class="col-md-3 col-sm-6">

                            <div class="whiteTitleTextNoBorder">
                                <p>السماعة الموجودة في المسدس مسئولة عن الإشارة الصوتية للطلقات.</p>
                                <p>مكبري الصوت الاثنين المتواجدين على أكتاف السترة ينبهان اللاعب حول الجروح والإمساك بالعلم والعودة للحياة وأحداث اللعبة الأخرى</p>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <h2 class="skyblueTitle">
                                <span>3 مصادر &nbsp;
                                </span>
                                للصوت
                            </h2>
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
            <div class="video rtl" id="video">
                <h2>
                    كيف ألعب؟
                </h2>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/LkMO_chGWv8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            {/* super power */}
            <section class="superPowerSec rtl">

                <div class="powerSecLeft">
                    <h2 class="greyBlackTitle">
                        <span>اختر قوتك
                        </span>
                        الخارقة!</h2>
                    <div class="row">
                        <div class="col-md-5"></div>
                        <div class="col-md-7">
                            <p>بإمكان اللاعب أن يضع يده على جهاز الاستشعار الموجود بمنطقة البطن على السترة لتنشيط إحدى القوى الخارقة لفترة محدودة من الوقت.</p>
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
                                <h4>المعالِج</h4>
                                <p>تسمح لك قوة المعالِج باستعادة صحتك وصحة جميع الحلفاء القريبين منك.</p>
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
                                <h4>النينجا</h4>
                                <p>تقوم قوة النينجا بإطفاء إضاءة سترتك، مما يسمح لك بالتسلل خلف ومداهمة خصومك.</p>
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
                                <h4>درع القوة</h4>
                                <p>يجعل اللاعب غير معرض لأي خطر  أو أي نوع من الضرر بشكل مؤقت.
                                </p>
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
                                <h4>قاذف القنابل</h4>
                                <p>تقضي هذه القوة على جميع الأعداء القريبين عبر انفجار حيث تقوم بإلغاء هؤلاء اللاعبين.</p>
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
                                <h4>أقصى ضرر</h4>
                                <p>تزيد هذه القوة من الضرر الذي تسببه الأسلحة بما يصل إلى 100 وحدة.</p>
                            </div>
                        </div>
                    </div>

                </div>


            </section>
            <section class="indoorSoftwareSec rtl">

                <div class="indoorSoftwareLeft">
                    <img src="/img/mobile.png" class="nortlimg"/>
                </div>
                <div class="indoorSoftwareRight"
                    style={
                        {"padding": "120px 120px 120px 60px"}
                }>
                    <h2 class="skyblueTitle">
                        <span style={
                            {color: "#fff"}
                        }>برنامج</span>
                        سوفت-وير  لحل سريع لكل المهام!
                    </h2>
                    <div class="whiteTitleTextNoBorder">
                        <p>التحكم عن بعد في الألعاب وإنهائها فقط في ضغطتين.</p>
                        <p>سيناريوهات جاهزة للاستخدام وبرنامج تصميم مرن لتعديل المهام الحالية أو إنشاء سيناريو فريد خاص بك.</p>
                        <p>
                            مجموعة من الشخصيات وأكثر من 40 مؤشر قياسي لإنشاء الأبطال المطابقة لهويتك.</p>
                        <p>إحصاءات لكل من الفريق والاعبين، والعديد من الإنجازات الفريدة.</p>
                        <p>كل هذه الامتيازات تسمح لشخص واحد بإجراء وتنظيم لعبة لأكثر من 30 مشاركًا بكل سهولة.</p>

                    </div>
                </div>
            </section>
            <section class="scriptPointsSec rtl">
                <div class="container">
                    <h2 class="skyblueTitle">استخدم السيناريوهات الجاهزة
                    </h2>
                    <div class="row">
                        <div class="col-md-4 col-sm-6">
                            <div class="scriptpointItem">
                                <div class="scriptpointItemImg">
                                    <img src="/img/sicon1.png"/></div>
                                <div class="whiteTitleTextNoBorder">
                                    <h4>
                                        سيناريو الاستعداد
                                    </h4>
                                    <p>لعبة سهلة وبسيطة تساعدك أن تتعرف على متاهة الساحة وعلى مجموعة الألعاب قبل أن تخوض المزيد من السيناريوهات المشوقة.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4 col-sm-6">
                            <div class="scriptpointItem">
                                <div class="scriptpointItemImg">
                                    <img src="/img/sicon2.png"/></div>
                                <div class="whiteTitleTextNoBorder">
                                    <h4>القضاء على الفيروسات
                                    </h4>
                                    <p>قم بتدمير جميع مصادر الفيروسات أسرع من الخصم المنافس عن طريق تجميد أسلحتهم بطلقات.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4 col-sm-6">
                            <div class="scriptpointItem">
                                <div class="scriptpointItemImg">
                                    <img src="/img/sicon3.png"/></div>
                                <div class="whiteTitleTextNoBorder">
                                    <h4>الهجوم على القاعدة
                                    </h4>
                                    <p>قم باقتحام القاعدة التي دائمًا تكون محمية من قبل فريق العدو، ولا تنسى جبهات الدفاع لديك.</p>
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
                                    <h4>مباراة الموت
                                    </h4>
                                    <p>معركة الموت بخاصية العودة للحياة تلقائيًا حيث يتم القتال بعدد محدود من خزينة الذخائر.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4 col-sm-6">
                            <div class="scriptpointItem">
                                <div class="scriptpointItemImg">
                                    <img src="/img/sicon5.png"/></div>
                                <div class="whiteTitleTextNoBorder">
                                    <h4>المواجهة

                                    </h4>
                                    <p>وضع جماعي باللعبة له قواعد بسيطة للمبتدئين واللاعبين الشباب.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4 col-sm-6">
                            <div class="scriptpointItem">
                                <div class="scriptpointItemImg">
                                    <img src="/img/sicon6.png"/></div>
                                <div class="whiteTitleTextNoBorder">
                                    <h4>السلاح المُطلق</h4>
                                    <p>بندقيتك هب سلاحك المطلق فائق التأثير، حيث أن الطلقة الواحدة تتسبب في أضرار فادحة.</p>
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
                                    <h4>ملك الساحة
                                    </h4>
                                    <p>معركة يفوز فيها آخر لاعب على قيد الحياة.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4 col-sm-6">
                            <div class="scriptpointItem">
                                <div class="scriptpointItemImg">
                                    <img src="/img/sicon8.png"/></div>
                                <div class="whiteTitleTextNoBorder">
                                    <h4>مباراة موت الفريق

                                    </h4>
                                    <p>معركة موت الفريق بخاصية العودة للحياة تلقائيًا.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4 col-sm-6">
                            <div class="scriptpointItem">
                                <div class="scriptpointItemImg">
                                    <img src="/img/sicon9.png"/></div>
                                <div class="whiteTitleTextNoBorder">
                                    <h4>
                                        السيطرة على العقول
                                    </h4>
                                    <p>تقوم بأسر عقول خصومك المهزومين بحيث يصبحون جزءًا من فريقك.
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
                                    <h4>سيناريو الاستكشاف
                                    </h4>
                                    <p>قم بالعثور على القطع الأثرية القديمة أسرع من الفريق المنافس.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4 col-sm-6">
                            <div class="scriptpointItem">
                                <div class="scriptpointItemImg">
                                    <img src="/img/sicon11.png"/></div>
                                <div class="whiteTitleTextNoBorder">
                                    <h4>الهيمنة
                                    </h4>
                                    <p>لعبة بكمية محدودة من الذخيرة حيث يمكن استعادة الصحة وتجديد الإمدادات فقط في القاعدة.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4 col-sm-6">
                            <div class="scriptpointItem">
                                <div class="scriptpointItemImg">
                                    <img src="/img/sicon12.png"/></div>
                                <div class="whiteTitleTextNoBorder">
                                    <h4>عداء مصاصي الدماء
                                    </h4>
                                    <p>هاجم خصومك وكأنك مصاص دماء. استولى على وحداتهم الصحية وقم باستعادة وتجديد صحتك.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div class="indoorBtn">
                <Link href="/indoor/game-scenario" class="btn btn-primary btnMain">
                    أجهزة سيناريو الألعاب الداخلية
                </Link>
            </div>
        </Layout>
    );
}
