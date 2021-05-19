import Link from 'next/link'
import {MdChat} from "react-icons/md";
import Layout from '../components/ar/layout'


export default function header() {
    return (

        <Layout>
            <div class="language rtl">
                <Link href="/en/indoor">
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
            <section class="indoorbanner gradientBlack rtl">
                <div class="container">
                    <div class="inDoorBannerDes">
                        <p>
                            .نیبعلالا عجشیو سامحلاب مستی میمصت<br/>
                            .ةیئادعلل اھیف ناكم لا ةنمآ
                            <br/>
                            طرق لعب فریدة تصنع أبطا ًلا خارقین.</p>
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
                    <img src="/img/game-kit.png"/>
                </div>

            </section>

            <section class="blasterSec rtl"
                style={
                    {backgroundImage: "url(/img/bg-outdoor2.png) !important"}
            }>
                <div class="container">
                    <div class="blasterKitDesc">
                        <img src="/img/gun.png"/>

                        <h2 class="skyblueTitle">سدسم
                            <span>سبیلكإ يسكلااغ</span>
                        </h2>

                        <div class="row">
                            <div class="col-md-2 col-sm-6"></div>
                            <div class="col-md-2 col-sm-6">
                                <div class="whiteTitleTextNoBorder">
                                    <h4>شاشة آي-بي-إس (IPS) ملونة</h4>
                                    <p>تعرض بيانات المجموعة القياسية وإحصائيات اللعبة.</p>
                                </div>
                            </div>
                            <div class="col-md-2 col-sm-6">
                                <div class="whiteTitleTextNoBorder">
                                    <h4>تقنية هالو</h4>
                                    <p>إضاءة مزدوجة للطلقة مصحوبةتقنية هالوتقنية هالو بلونالفريق.
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
                        <span>إكليبس</span>
                        سترة</h2>
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
                    <img src="/img/galaxy-kit2.png"/>
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
                    كيف ألعب ؟

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
            <section class="scriptPointsSec rtl">
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
                                    <h4>VAMPIRE FEUD
                                    </h4>
                                    <p>Striking opponents, just like a vampire, you take away their health units and restore yours</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div class="indoorBtn">
                <Link href="/indoor/game-scenario">
                    <a class="btn btn-primary btnMain">See Game scenario</a>
                </Link>
            </div>
        </Layout>
    )
}
