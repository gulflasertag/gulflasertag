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
                                                    <li>تحكم من خلال أنظمة ويندوز و أندرويد 
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
                                                        <span>900 مارغ</span>
                                                    </li>
                                                    <li>رمع ةيراطبلا
                                                        <span>24 ةعاس</span>
                                                    </li>
                                                    <li>تحكم من خلال أنظمة ويندوز و أندرويد 
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
                                                <h4>نوكلاف فإ -2</h4>
                                            </div>
                                            <div class="taggerGroupItemSpec">
                                                <ul>
                                                    <li>لوطلا
                                                        <span>66 مس</span>
                                                    </li>
                                                    <li>نزولا
                                                        <span>
                                                            1000 مارغ</span>
                                                    </li>
                                                    <li>رمع ةيراطبلا
                                                        <span>
                                                            24 ةعاس</span>
                                                    </li>
                                                    <li>تحكم من خلال أنظمة ويندوز و أندرويد 
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
                        <div class="taggerGroupHeaderPreTitle">تلايدعت نوكلاف </div>
                    </div>
                    <div class="container">
                        <div class="row">
                            <div class="col-md-4">
                                <div class="taggerGroupHeaderTitle">
                                    <h3>إصدار بريميوم المميز</h3>
                                </div>
                            </div>
                            <div class="col-md-8">
                                <div class="taggerGroupHeaderDescription">
                                    <p>الإصدار المناسب لمعارك الليزر المثيرة. تم تزويد البندقية بنظام دفع الارتداد والذي يعد أكثر واقعية من نظم الاهتزاز المعتادة. شاشة آي-بي-إس (IPS) الملونة لا تجذب انتباه اللاعبين فحسب، بل تعرض أيضًا جميع إحصاءات اللعبة والسيرفر. أجهزة استشعار الضربات المدمجة في جسم البندقية هي المفتاح للاستمتاع بلعبة صادقة وآمنة.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     statistics. Hit sensors built-in the body are the key to an honest and safe game.
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
                                                        <span>
                                                            1100 غرام</span>
                                                    </li>
                                                    <li>عمر البطارية
                                                        <span>
                                                            24 ساعة</span>
                                                    </li>
                                                    <li>تحكم من خلال أنظمة ويندوز و أندرويد 
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
                                                <h4>فالكون إف-2</h4>
                                            </div>
                                             <div class="taggerGroupItemSpec">
                                                <ul>
                                                    <li>الطول 
                                                        <span>66 سم</span>
                                                    </li>
                                                    <li>الوزن
                                                        <span>
                                                            1200 غرام</span>
                                                    </li>
                                                    <li>عمر البطارية
                                                        <span>
                                                            24 ساعة</span>
                                                    </li>
                                                    <li>تحكم من خلال أنظمة ويندوز و أندرويد 
                                                        <span>
                                                            +</span>
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
                        <div class="taggerGroupHeaderPreTitle">تعديلات فالكون</div>
                    </div>
                    <div class="container">
                        <div class="row">
                            <div class="col-md-4">
                                <div class="taggerGroupHeaderTitle">
                                    <h3>الإصدار التكتيكي للمحترفين</h3>
                                </div>
                            </div>
                            <div class="col-md-8">
                                <div class="taggerGroupHeaderDescription">
                                    <p>الإصدار الأكثر تقدمًا من فالكون. الحد الأقصى من الخصائص والمميزات يمنح تأثيرًا رائعًا للاعبين ويملئهم بالرغبة في العودة إلى ناديك مرة أخرى. الطبعة الأصلية تبدو مثيرة للإعجاب والسلاح يبدو مميز، كما أن نطاق النقطة الحمراء يزيد من دقة الطلقة.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 statistics. Hit sensors built-in the body are the key to an honest and safe game.
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
                                                        <span>
                                                            1300 غرام</span>
                                                    </li>
                                                    <li>عمر البطارية
                                                        <span>
                                                            24 ساعة</span>
                                                    </li>
                                                    <li>تحكم من خلال أنظمة ويندوز و أندرويد 
                                                        <span>
                                                            +</span>
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
                                                <h4>فالكون إف-2</h4>
                                            </div>
                                             <div class="taggerGroupItemSpec">
                                                <ul>
                                                    <li>الطول 
                                                        <span>66 سم</span>
                                                    </li>
                                                    <li>الوزن
                                                        <span>
                                                            1400 غرام</span>
                                                    </li>
                                                    <li>عمر البطارية
                                                        <span>
                                                            24 ساعة</span>
                                                    </li>
                                                    <li>تحكم من خلال أنظمة ويندوز و أندرويد 
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
                        <div class="taggerGroupHeaderPreTitle">بنادق تكتيكية</div>
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
                                                <h2>جلوك 19</h2>
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
                                            <p>جلوك 19 هو مسدس ليزر تاغ يعمل على منصة نيترونيك. تم صنع المسدس بناءً على ترخيص من شركة يوماريكس الألمانية. جميع العلامات متطابقة مع النموذج القتالي، كما تم الاحتفاظ بمعظم عناصر التصميم الأصلي في هذا المسدس، مثل: الزناد والصمام ومسطرة بكتيني.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="taggerGroupItem">
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="taggerGroupItemName">
                                                <h2>كولت إم-4
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
                                                    <li>الطول
                                                        <span>85 سم</span>
                                                    </li>
                                                    <li>الوزن
                                                        <span>
                                                            2.5 كجم</span>
                                                    </li>
                                                </ul>
                                            </div>
                                            <p>كولت إم-4 إيه-1 عبارة عن مسدس ليزر تاغ يتيح الدورة الأكثر واقعية لإعادة تعمير الذخيرة. صُنع المسدس على أساس غلاف آير-سوفت عالي الجودة ويتوافق إلى أقصى حد مع المسدس الأصلي. جميع الأجهزة الإلكترونية يتم تثبيتها بشكل آمن في وحدات التركيب.
                                            </p>

                                        </div>
                                        <div class="col-md-6">
                                            <div class="taggerGroupItemName">
                                                <h2>ايه-كيه-74
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
                                                    <li>الطول 
                                                        <span>97 سم</span>
                                                    </li>
                                                    <li>الوزن
                                                        <span>
                                                            3.1 كجم</span>
                                                    </li>
                                                </ul>
                                            </div>
                                            <p>ايه-كيه-74 هو مسدس ليزر يعمل على منصة نيترونيك. يتم استخدام إطار معدني مقاوم للصدمات يمكن الاعتماد عليه كأساس، ومكبر الصوت المدمج في الخزنة يوفر أيضًا مؤشرًا صوتيًا لكل طلقة.
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
                    <div class="taggerGroupHeaderPreTitle topAbsolute">المميزات</div>
                    <div class="row">
                        <div class="col-md-6"></div>
                        <div class="col-md-6">
                            <h2 class="whiteTitle">شاشة آي-بي-إس (IPS) متعددة الألوان</h2>
                            <div class="row">
                                <div class="col-sm-6">
                                    <div class="whiteTitleText">
                                        <h4>المتانة</h4>
                                        <p>تم دمج الشاشة في رفوف تركيب خاصة ومحمية بزجاج سمكه 6 مم، مما يزيل الضرر الميكانيكي والإزاحة عند السقوط.</p>
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="whiteTitleText">
                                        <h4>سهولة الاستخدام</h4>
                                        <p>زاوية الرؤية الواسعة التي لا تسبب وهج تضمن رؤية واضحة لجميع المؤشرات من أي زاوية. تسمح الإضاءة الخلفية الساطعة للزوار برؤية جميع مؤشرات اللعبة بوضوح حتى في ظل الطقس المشمس.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-sm-6">
                                    <div class="whiteTitleText">
                                        <h4>التلعيب</h4>
                                        <p>30 مؤشر لوني بديهيون للاعبين من أي عمر مما يسمح لهم لإدراك المعلومات بسهولة حتى في أثناء الأوقات شديدة الديناميكية للعبة.</p>
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="whiteTitleText">
                                        <h4>الراحة</h4>
                                        <p>مؤشرات الخدمة الخاصة بالشاشة تسمح بالتخصيص الفوري لمجموعات الألعاب. المعلومات المعروضة في وضع التمهيد تعمل على تحسين عملية تحديث المعدات بما يناسب الإصدار الجديد في دقائق معدودة.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
            <section class="impulseRecoilSec rtl">

                <div class="container">
                    <div class="taggerGroupHeaderPreTitle topAbsolute">ميزات</div>
                    <div class="row">

                        <div class="col-md-12">
                            <h2 class="whiteTitle">دفع الارتداد</h2>
                            <div class="row">
                                <div class="col-sm-3">
                                    <div class="whiteTitleText">
                                        <h4>الانغماس في اللعبة</h4>
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
