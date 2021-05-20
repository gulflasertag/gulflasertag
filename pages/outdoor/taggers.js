import Link from 'next/link'
import {MdChat} from "react-icons/md";
import Layout from '/components/ar/layout'


export default function header() {
    return (
        <Layout>
            <div class="language rtl">
                <Link href="../en/outdoor/taggers">
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
                            <img src="/img/netronicLogo.jpg" width="100px"/>
                            <h2 class="sectionHeading">تاجرز</h2>

                        </div>
                    </div>
                </div>
            </div>
            <div class="taggerGroup rtl">
                <div class="taggerGroupHeader">
                    <div class="container">
                        <div class="taggerGroupHeaderPreTitle">تعديلات فالكون</div>
                    </div>
                    <div class="container">
                        <div class="row">
                            <div class="col-md-4">
                                <div class="taggerGroupHeaderTitle">
                                    <h3>الإصدار الأساسي</h3>
                                </div>
                            </div>
                            <div class="col-md-8">
                                <div class="taggerGroupHeaderDescription">
                                    <p>بندقية علامة الليزر الأساسية من طراز فالكون للاستخدام في ظروف الإيجار القاسية. الجسم المقاوم للصدمات يقاوم أي اختبار: الصدمة والسقوط. يسمح لك الجسم خفيف الوزن باللعب بشكل مريح لفترة طويلة.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="taggerGroupBody">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-9">
                                <div class="taggerGroupItem">
                                    <div class="row">
                                        <div class="col-md-4">
                                            <div class="taggerGroupItemName"></div>
                                            <div class="taggerGroupItemPrice">
                                                <h4>فالكون إف-1</h4>
                                            </div>
                                            <div class="taggerGroupItemSpec">
                                                <ul>
                                                    <li>الطول
                                                        <span>54 سم</span>
                                                    </li>
                                                    <li>الوزن
                                                        <span>850 غرام</span>
                                                    </li>
                                                    <li>عمر البطارية
                                                        <span>
                                                            24 ساعة</span>
                                                    </li>
                                                    <li>تحكم من خلال أنظمة ويندوز و أندرويد
                                                        <span>+</span>
                                                    </li>
                                                </ul>

                                            </div>

                                        </div>
                                        <div class="col-md-8">
                                            <img src="/img/falcon-f1.jpg"
                                                style={
                                                    {
                                                        width: '440px',
                                                        float: 'right'
                                                    }
                                                }/>
                                        </div>
                                    </div>
                                </div>
                                <div class="taggerGroupItem">
                                    <div class="row">
                                        <div class="col-md-4">
                                            <div class="taggerGroupItemName"></div>
                                            <div class="taggerGroupItemPrice">
                                                <h4>فالكون إف-2</h4>
                                            </div>
                                            <div class="taggerGroupItemSpec">
                                                <ul>
                                                    <li>الوزن
                                                        <span>950 غرام</span>
                                                    </li>
                                                    <li>الطول
                                                        <span>
                                                            66 سم</span>
                                                    </li>
                                                    <li>عمر البطارية
                                                        <span>
                                                           24 ساعة</span>
                                                    </li>
                                                    <li>تحكم من خلال أنظمة ويندوز و أندرويد +
                                                        <span>
                                                            +</span>
                                                    </li>
                                                </ul>

                                            </div>

                                        </div>
                                        <div class="col-md-8">
                                            <img src="/img/falcon-f1.jpg"/>
                                            <p class="taggerGroupNotice opacityLess"></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-3">
                                <div class="taggerGroupSidebar">
                                    <div class="taggerGroupSidebarItem">
                                        <div class="row">
                                            <div class="col-xs-4">
                                                <div class="icon"><img src="/img/taggersidebar-icon1.png"/></div>
                                            </div>
                                            <div class="col-xs-8">
                                                <p>بلاستيك مقاوم للصدمات من مادة ABS</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="taggerGroupSidebarItem">
                                        <div class="row">
                                            <div class="col-xs-4">
                                                <div class="icon"><img src="/img/taggersidebar-icon2.png"/></div>
                                            </div>
                                            <div class="col-xs-8">
                                                <p>طرف مطاطي واقي
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="taggerGroupSidebarItem opacityLess">
                                        <div class="row">
                                            <div class="col-xs-4">
                                                <div class="icon"><img src="/img/taggersidebar-icon3.png"/></div>
                                            </div>
                                            <div class="col-xs-8">
                                                <p>أجهزة استشعار لليدين 45 دولار إضافية dollars</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="taggerGroupSidebarItem opacityLess">
                                        <div class="row">
                                            <div class="col-xs-4">
                                                <div class="icon"><img src="/img/taggersidebar-icon4.png"/></div>
                                            </div>
                                            <div class="col-xs-8">
                                                <p>شاشة آي-بي-إس (IPS) متعددة الألوان</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="taggerGroupSidebarItem opacityLess">
                                        <div class="row">
                                            <div class="col-xs-4">
                                                <div class="icon"><img src="/img/taggersidebar-icon5.png"/></div>
                                            </div>
                                            <div class="col-xs-8">
                                                <p>أجهزة مدمجة للاستشعار بالإصابة </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="taggerGroupSidebarItem opacityLess">
                                        <div class="row">
                                            <div class="col-xs-4">
                                                <div class="icon"><img src="/img/taggersidebar-icon6.png"/></div>
                                            </div>
                                            <div class="col-xs-8">
                                                <p>دفع الارتداد</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="taggerGroupSidebarItem opacityLess">
                                        <div class="row">
                                            <div class="col-xs-4">
                                                <div class="icon"><img src="/img/taggersidebar-icon7.png"/></div>
                                            </div>
                                            <div class="col-xs-8">
                                                <p>طباعة بكسل</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="taggerGroupSidebarItem opacityLess">
                                        <div class="row">
                                            <div class="col-xs-4">
                                                <div class="icon"><img src="/img/taggersidebar-icon8.png"/></div>
                                            </div>
                                            <div class="col-xs-8">
                                                <p>رؤية النقطة الحمراء</p>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* group two */}
            <hr/>
            <div class="taggerGroup rtl">
                <div class="taggerGroupHeader">
                    <div class="container">
                        <div class="taggerGroupHeaderPreTitle">تعديلات فالكون</div>
                    </div>
                    <div class="container">
                        <div class="row">
                            <div class="col-md-4">
                                <div class="taggerGroupHeaderTitle">
                                    <h3>الإصدار القياسي</h3>
                                </div>
                            </div>
                            <div class="col-md-8">
                                <div class="taggerGroupHeaderDescription">
                                    <p>يتميز هذا الإصدار من فالكون إف-1، والمتوافر منه عدد محدود بالمخزون، بشاشة آي-بي-إس (IPS) متعددة الألوان ومقاومة للصدمات لعرض الإحصائيات الخاصة باللعبة والخدمة، ذلك كما تم دمج أجهزة استشعار الضربات أيضًا في جسم البندقية لتوفير ظروف لعب عادلة ومثيرة، حيث أن دمج 3 أجهزة لاستشعار الضربات يزيد من تفاعلية وإثارة اللعبة، كما أن شاشة آي-بي-إس (IPS) متعددة الألوان المعززة بزجاج واقي تضيف ما يصل إلى 30 قيمة للعبة والخدمة.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                interactivity and interest level of the game. And multicolored IPS-screen, strengthened with a protective glass, indicates
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                up to 30 game & service values.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="taggerGroupBody">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-9">
                                <div class="taggerGroupItem">
                                    <div class="row">
                                        <div class="col-md-4">
                                            <div class="taggerGroupItemName"></div>
                                            <div class="taggerGroupItemPrice">
                                                <h4>فالكون إف-1</h4>
                                            </div>
                                            <div class="taggerGroupItemSpec">
                                                <ul>
                                                    <li>الطول 
                                                        <span>54 سم</span>
                                                    </li>
                                                    <li>الوزن
                                                        <span>900 gr</span>
                                                    </li>
                                                    <li>Battey life
                                                        <span>24 h</span>
                                                    </li>
                                                    <li>Control with PC &<br/>
                                                        ANDROID
                                                        <span>
                                                            +</span>
                                                    </li>
                                                </ul>

                                            </div>

                                        </div>
                                        <div class="col-md-8">
                                            <img src="/img/falcon-f1.jpg"
                                                style={
                                                    {
                                                        width: '440px',
                                                        float: 'right'
                                                    }
                                                }/>
                                        </div>
                                    </div>
                                </div>
                                <div class="taggerGroupItem">
                                    <div class="row">
                                        <div class="col-md-4">
                                            <div class="taggerGroupItemName"></div>
                                            <div class="taggerGroupItemPrice">
                                                <h4>FALCON F2</h4>
                                            </div>
                                            <div class="taggerGroupItemSpec">
                                                <ul>
                                                    <li>Weight
                                                        <span>66 cm</span>
                                                    </li>
                                                    <li>Length
                                                        <span>
                                                            1000 gr</span>
                                                    </li>
                                                    <li>Battery life
                                                        <span>
                                                            24 h</span>
                                                    </li>
                                                    <li>Control with PC &<br/>
                                                        ANDROID
                                                        <span>
                                                            +</span>
                                                    </li>
                                                </ul>

                                            </div>

                                        </div>
                                        <div class="col-md-8">
                                            <img src="/img/falcon-f1.jpg"/>
                                            <p class="taggerGroupNotice"></p>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-3">
                                <div class="taggerGroupSidebar">
                                    <div class="taggerGroupSidebarItem">
                                        <div class="row">
                                            <div class="col-xs-4">
                                                <div class="icon"><img src="/img/taggersidebar-icon1.png"/></div>
                                            </div>
                                            <div class="col-xs-8">
                                                <p>بلاستيك مقاوم للصدمات من مادة ABS</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="taggerGroupSidebarItem">
                                        <div class="row">
                                            <div class="col-xs-4">
                                                <div class="icon"><img src="/img/taggersidebar-icon2.png"/></div>
                                            </div>
                                            <div class="col-xs-8">
                                                <p>طرف مطاطي واقي
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="taggerGroupSidebarItem">
                                        <div class="row">
                                            <div class="col-xs-4">
                                                <div class="icon"><img src="/img/taggersidebar-icon3.png"/></div>
                                            </div>
                                            <div class="col-xs-8">
                                                <p>أجهزة استشعار لليدين 45 دولار إضافية dollars</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="taggerGroupSidebarItem">
                                        <div class="row">
                                            <div class="col-xs-4">
                                                <div class="icon"><img src="/img/taggersidebar-icon4.png"/></div>
                                            </div>
                                            <div class="col-xs-8">
                                                <p>شاشة آي-بي-إس (IPS) متعددة الألوان</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="taggerGroupSidebarItem">
                                        <div class="row">
                                            <div class="col-xs-4">
                                                <div class="icon"><img src="/img/taggersidebar-icon5.png"/></div>
                                            </div>
                                            <div class="col-xs-8">
                                                <p>أجهزة مدمجة للاستشعار بالإصابة </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="taggerGroupSidebarItem opacityLess">
                                        <div class="row">
                                            <div class="col-xs-4">
                                                <div class="icon"><img src="/img/taggersidebar-icon6.png"/></div>
                                            </div>
                                            <div class="col-xs-8">
                                                <p>دفع الارتداد</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="taggerGroupSidebarItem opacityLess">
                                        <div class="row">
                                            <div class="col-xs-4">
                                                <div class="icon"><img src="/img/taggersidebar-icon7.png"/></div>
                                            </div>
                                            <div class="col-xs-8">
                                                <p>طباعة بكسل</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="taggerGroupSidebarItem opacityLess">
                                        <div class="row">
                                            <div class="col-xs-4">
                                                <div class="icon"><img src="/img/taggersidebar-icon8.png"/></div>
                                            </div>
                                            <div class="col-xs-8">
                                                <p>رؤية النقطة الحمراء</p>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* premium */}

            <hr/>
            <div class="taggerGroup rtl">
                <div class="taggerGroupHeader">
                    <div class="container">
                        <div class="taggerGroupHeaderPreTitle">Falcon
                            <br/>Modifications</div>
                    </div>
                    <div class="container">
                        <div class="row">
                            <div class="col-md-4">
                                <div class="taggerGroupHeaderTitle">
                                    <h3>Premium</h3>
                                </div>
                            </div>
                            <div class="col-md-8">
                                <div class="taggerGroupHeaderDescription">
                                    <p>The set for exciting laser tag battles. The blaster is equipped with impulse recoil which is much more realistic than usual vibration. The color
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        IPS screen does not only attracts the attention of players, but also displays all the game and server
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        statistics. Hit sensors built-in the body are the key to an honest and safe game.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="taggerGroupBody">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-9">
                                <div class="taggerGroupItem">
                                    <div class="row">
                                        <div class="col-md-4">
                                            <div class="taggerGroupItemName"></div>
                                            <div class="taggerGroupItemPrice">
                                                <h4>FALCON F1</h4>
                                            </div>
                                            <div class="taggerGroupItemSpec">
                                                <ul>
                                                    <li>Weight
                                                        <span>54 cm</span>
                                                    </li>
                                                    <li>Length
                                                        <span>
                                                            1100 gr</span>
                                                    </li>
                                                    <li>Battey life
                                                        <span>
                                                            24 h</span>
                                                    </li>
                                                    <li>Control with PC &<br/>
                                                        ANDROID
                                                        <span>
                                                            +</span>
                                                    </li>
                                                </ul>

                                            </div>

                                        </div>
                                        <div class="col-md-8">
                                            <img src="/img/falcon-f1.jpg"
                                                style={
                                                    {
                                                        width: '440px',
                                                        float: 'right'
                                                    }
                                                }/>
                                        </div>
                                    </div>
                                </div>
                                <div class="taggerGroupItem">
                                    <div class="row">
                                        <div class="col-md-4">
                                            <div class="taggerGroupItemName"></div>
                                            <div class="taggerGroupItemPrice">
                                                <h4>FALCON F2</h4>
                                            </div>
                                            <div class="taggerGroupItemSpec">
                                                <ul>
                                                    <li>Weight
                                                        <span>66 cm</span>
                                                    </li>
                                                    <li>Length
                                                        <span>1200 gr</span>
                                                    </li>
                                                    <li>Battery life
                                                        <span>24 h</span>
                                                    </li>
                                                    <li>Control with PC &<br/>
                                                        ANDROID
                                                        <span>+</span>
                                                    </li>
                                                </ul>

                                            </div>

                                        </div>
                                        <div class="col-md-8">
                                            <img src="/img/falcon-f1.jpg"/>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-3">
                                <div class="taggerGroupSidebar">
                                    <div class="taggerGroupSidebarItem">
                                        <div class="row">
                                            <div class="col-xs-4">
                                                <div class="icon"><img src="/img/taggersidebar-icon1.png"/></div>
                                            </div>
                                            <div class="col-xs-8">
                                                <p>بلاستيك مقاوم للصدمات من مادة ABS</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="taggerGroupSidebarItem">
                                        <div class="row">
                                            <div class="col-xs-4">
                                                <div class="icon"><img src="/img/taggersidebar-icon2.png"/></div>
                                            </div>
                                            <div class="col-xs-8">
                                                <p>طرف مطاطي واقي
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="taggerGroupSidebarItem">
                                        <div class="row">
                                            <div class="col-xs-4">
                                                <div class="icon"><img src="/img/taggersidebar-icon3.png"/></div>
                                            </div>
                                            <div class="col-xs-8">
                                                <p>أجهزة استشعار لليدين 45 دولار إضافية dollars</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="taggerGroupSidebarItem">
                                        <div class="row">
                                            <div class="col-xs-4">
                                                <div class="icon"><img src="/img/taggersidebar-icon4.png"/></div>
                                            </div>
                                            <div class="col-xs-8">
                                                <p>شاشة آي-بي-إس (IPS) متعددة الألوان</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="taggerGroupSidebarItem">
                                        <div class="row">
                                            <div class="col-xs-4">
                                                <div class="icon"><img src="/img/taggersidebar-icon5.png"/></div>
                                            </div>
                                            <div class="col-xs-8">
                                                <p>أجهزة مدمجة للاستشعار بالإصابة </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="taggerGroupSidebarItem">
                                        <div class="row">
                                            <div class="col-xs-4">
                                                <div class="icon"><img src="/img/taggersidebar-icon6.png"/></div>
                                            </div>
                                            <div class="col-xs-8">
                                                <p>دفع الارتداد</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="taggerGroupSidebarItem opacityLess">
                                        <div class="row">
                                            <div class="col-xs-4">
                                                <div class="icon"><img src="/img/taggersidebar-icon7.png"/></div>
                                            </div>
                                            <div class="col-xs-8">
                                                <p>طباعة بكسل</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="taggerGroupSidebarItem opacityLess">
                                        <div class="row">
                                            <div class="col-xs-4">
                                                <div class="icon"><img src="/img/taggersidebar-icon8.png"/></div>
                                            </div>
                                            <div class="col-xs-8">
                                                <p>رؤية النقطة الحمراء</p>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* tactical pro */}
            <hr/>
            <div class="taggerGroup rtl">
                <div class="taggerGroupHeader">
                    <div class="container">
                        <div class="taggerGroupHeaderPreTitle">Falcon
                            <br/>Modifications</div>
                    </div>
                    <div class="container">
                        <div class="row">
                            <div class="col-md-4">
                                <div class="taggerGroupHeaderTitle">
                                    <h3>Tactical Pro</h3>
                                </div>
                            </div>
                            <div class="col-md-8">
                                <div class="taggerGroupHeaderDescription">
                                    <p>The most advanced set of Falcon. The maximum functionality gives the players a wow-effect and the desire to return to your club again. The original
print looks impressive and the weapon special, and the red dot scope increases the accuracy of the shot.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 statistics. Hit sensors built-in the body are the key to an honest and safe game.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="taggerGroupBody">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-9">
                                <div class="taggerGroupItem">
                                    <div class="row">
                                        <div class="col-md-4">
                                            <div class="taggerGroupItemName"></div>
                                            <div class="taggerGroupItemPrice">
                                                <h4>FALCON F1</h4>
                                            </div>
                                            <div class="taggerGroupItemSpec">
                                                <ul>
                                                    <li>Weight
                                                        <span>54 cm</span>
                                                    </li>
                                                    <li>Length
                                                        <span>1300 gr</span>
                                                    </li>
                                                    <li>Battey life
                                                        <span>24 h</span>
                                                    </li>
                                                    <li>Control with PC &<br/>
                                                        ANDROID
                                                        <span>+</span>
                                                    </li>
                                                </ul>

                                            </div>

                                        </div>
                                        <div class="col-md-8">
                                            <img src="/img/tacticalf1.png"
                                                style={
                                                    {
                                                        width: '440px',
                                                        float: 'right'
                                                    }
                                                }/>
                                        </div>
                                    </div>
                                </div>
                                <div class="taggerGroupItem">
                                    <div class="row">
                                        <div class="col-md-4">
                                            <div class="taggerGroupItemName"></div>
                                            <div class="taggerGroupItemPrice">
                                                <h4>FALCON F2</h4>
                                            </div>
                                            <div class="taggerGroupItemSpec">
                                                <ul>
                                                    <li>Weight
                                                        <span>66 cm</span>
                                                    </li>
                                                    <li>Length
                                                        <span>
                                                            1400 gr</span>
                                                    </li>
                                                    <li>Battery life
                                                        <span>
                                                            24 h</span>
                                                    </li>
                                                    <li>Control with PC &<br/>
                                                        ANDROID
                                                        <span>
                                                            +</span>
                                                    </li>
                                                </ul>

                                            </div>

                                        </div>
                                        <div class="col-md-8">
                                            <img src="/img/tacticalf2.png"/>
                                            <p class="taggerGroupNotice"></p>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-3">
                                <div class="taggerGroupSidebar">
                                    <div class="taggerGroupSidebarItem">
                                        <div class="row">
                                            <div class="col-xs-4">
                                                <div class="icon"><img src="/img/taggersidebar-icon1.png"/></div>
                                            </div>
                                            <div class="col-xs-8">
                                                <p>بلاستيك مقاوم للصدمات من مادة ABS</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="taggerGroupSidebarItem">
                                        <div class="row">
                                            <div class="col-xs-4">
                                                <div class="icon"><img src="/img/taggersidebar-icon2.png"/></div>
                                            </div>
                                            <div class="col-xs-8">
                                                <p>طرف مطاطي واقي
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="taggerGroupSidebarItem">
                                        <div class="row">
                                            <div class="col-xs-4">
                                                <div class="icon"><img src="/img/taggersidebar-icon3.png"/></div>
                                            </div>
                                            <div class="col-xs-8">
                                                <p>أجهزة استشعار لليدين 45 دولار إضافية dollars</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="taggerGroupSidebarItem">
                                        <div class="row">
                                            <div class="col-xs-4">
                                                <div class="icon"><img src="/img/taggersidebar-icon4.png"/></div>
                                            </div>
                                            <div class="col-xs-8">
                                                <p>شاشة آي-بي-إس (IPS) متعددة الألوان</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="taggerGroupSidebarItem">
                                        <div class="row">
                                            <div class="col-xs-4">
                                                <div class="icon"><img src="/img/taggersidebar-icon5.png"/></div>
                                            </div>
                                            <div class="col-xs-8">
                                                <p>أجهزة مدمجة للاستشعار بالإصابة </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="taggerGroupSidebarItem">
                                        <div class="row">
                                            <div class="col-xs-4">
                                                <div class="icon"><img src="/img/taggersidebar-icon6.png"/></div>
                                            </div>
                                            <div class="col-xs-8">
                                                <p>دفع الارتداد</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="taggerGroupSidebarItem">
                                        <div class="row">
                                            <div class="col-xs-4">
                                                <div class="icon"><img src="/img/taggersidebar-icon7.png"/></div>
                                            </div>
                                            <div class="col-xs-8">
                                                <p>طباعة بكسل</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="taggerGroupSidebarItem">
                                        <div class="row">
                                            <div class="col-xs-4">
                                                <div class="icon"><img src="/img/taggersidebar-icon8.png"/></div>
                                            </div>
                                            <div class="col-xs-8">
                                                <p>رؤية النقطة الحمراء</p>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* tactical guns */}
            <hr/>
            <div class="taggerGroup rtl">
                <div class="taggerGroupHeader">
                    <div class="container">
                        <div class="taggerGroupHeaderPreTitle">Tactical guns</div>
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
                                                <h2>Glock 19</h2>
                                            </div>
                                            <div class="taggerGroupItemSpec">
                                                <img src="/img/Glock.jpg"
                                                    style={
                                                        {width: '300px'}
                                                    }/>
                                                <ul class="inlineList">
                                                    <li>Weight
                                                        <span>18.6 cm</span>
                                                    </li>
                                                    <li>Length
                                                        <span>
                                                            0.5 kg</span>
                                                    </li>
                                                </ul>

                                            </div>

                                        </div>
                                        <div class="col-md-6">
                                            <div class="taggerGroupItemPrice"></div>
                                            <br/>
                                            <br/>
                                            <p>Glock 19 is a laser tag gun that works on the NETRONIC platform. The gun is made based on a licensed case from the German company UMAREX. All markings correspond to the combat prototype. Most elements of the original design are retained in the gun: trigger, fuse and Picatinny rail. Ammunition reload cycle is carried out by changing the magazine. Glock 19 uses a dual emitter, which makes shooting at close and long-range more realistic.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="taggerGroupItem">
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="taggerGroupItemName">
                                                <h2>COLT M4
                                                    <span style={
                                                        {
                                                            color: '#1a73e8',
                                                            float: 'right'

                                                        }
                                                    }></span>
                                                </h2>
                                            </div>

                                            <img src="/img/COLT-M4.jpg"/>
                                            <div class="taggerGroupItemSpec">
                                                <ul class="inlineList">
                                                    <li>Weight
                                                        <span>85 cm</span>
                                                    </li>
                                                    <li>Length
                                                        <span>
                                                            2.5 kg</span>
                                                    </li>
                                                </ul>
                                            </div>
                                            <p>COLT M4 A1 is a laser tag gun that implements the most authentic ammunition reload cycle. The gun is made based on a high-quality airsoft casing and maximally corresponds to the original. All electronics are securely fixed in the mounting modules.
                                            </p>

                                        </div>
                                        <div class="col-md-6">
                                            <div class="taggerGroupItemName">
                                                <h2>AK-74
                                                    <span style={
                                                        {
                                                            color: '#1a73e8',
                                                            float: 'right'

                                                        }
                                                    }></span>
                                                </h2>
                                            </div>

                                            <img src="/img/ak.jpg"/>
                                            <div class="taggerGroupItemSpec">
                                                <ul class="inlineList">
                                                    <li>Weight
                                                        <span>97 cm</span>
                                                    </li>
                                                    <li>Length
                                                        <span>
                                                            3.1 kg</span>
                                                    </li>
                                                </ul>
                                            </div>
                                            <p>AK-74 is a laser tag gun that works on the NETRONIC platform. A reliable, metal shockproof case is used as a basis. The loudspeaker, which is integrated into the magazine, provides a sound shot indication.
                                            </p>

                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <section class="multicolouredSection rtl">
                <div class="container">
                    <div class="taggerGroupHeaderPreTitle topAbsolute">Features</div>
                    <div class="row">
                        <div class="col-md-6"></div>
                        <div class="col-md-6">
                            <h2 class="whiteTitle">Multicoloured IPS screen</h2>
                            <div class="row">
                                <div class="col-sm-6">
                                    <div class="whiteTitleText">
                                        <h4>Durability</h4>
                                        <p>The screen is integrated in special mounting racks and protected with 6 mm glass, which eliminates mechanical damage and displacement when falling.</p>
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="whiteTitleText">
                                        <h4>Usability</h4>
                                        <p>The wide viewing angle without glare ensures clear visibility of all indicators from any angle. Bright backlighting allows visitors to clearly see all game indicators even in sunny weather.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-sm-6">
                                    <div class="whiteTitleText">
                                        <h4>Gamefication</h4>
                                        <p>30 coloured indicators are intuitive for players of any age and allows them to perceive the information easily even in high dynamic of the game</p>
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="whiteTitleText">
                                        <h4>Convenience</h4>
                                        <p>Service indicators of the screen allow immediate game sets customizing. Information displayed in boot-mode optimizes the process of updating the equipment up to the new version in a few minutes.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
            <section class="impulseRecoilSec rtl">

                <div class="container">
                    <div class="taggerGroupHeaderPreTitle topAbsolute">Features</div>
                    <div class="row">

                        <div class="col-md-12">
                            <h2 class="whiteTitle">Impulse recoil</h2>
                            <div class="row">
                                <div class="col-sm-3">
                                    <div class="whiteTitleText">
                                        <h4>Immersion in the game</h4>
                                        <p>When fired, impulses directed to the shoulder pass along the body, imitating the real recoil from the weapon. The recoil effect is much more realistic than the usual vibration of the body, which enhances the involvement in the gameplay.</p>
                                    </div>
                                </div>
                                <div class="col-sm-3">
                                    <div class="whiteTitleText">
                                        <h4>Realistic shot</h4>
                                        <p>The recoil module is fully synchronized with shots and is capable of reaching 565 beats per minute. If a player fires one shot, one impulse is tactile, and if it is a turn of three shots, there are three impulses.</p>
                                    </div>
                                </div>
                                <div class="col-sm-3">
                                    <div class="whiteTitleText">
                                        <h4>Better than vibration</h4>
                                        <p>The player clearly feels the hits towards the shoulder, and not the steady trembling throughout the body which is created when using the vibro-motor. A tactile sense of real impact gives players more emotions.</p>
                                    </div>
                                </div>
                                <div class="col-sm-3">
                                    <div class="whiteTitleText">
                                        <h4>Autonomy</h4>
                                        <p>Due to the autonomous power supply system with a separate battery, impulse recoil does not affect the operating time of the blaster itself.</p>
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
