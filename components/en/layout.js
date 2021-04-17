import Header from './header'
import Footer from './footer'

// import Header from '../components/en/header'

const layout= ({children}) =>{
    return(
        <>
            <Header />
            {children}
            <Footer />
        </>
    )
}

export default layout