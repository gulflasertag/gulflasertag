import Header from './header'
import Footer from './footer'
import {BrowserRouter as router} from 'react-router-dom'

const layout = ({children}) => {

    return (
        <>
            <Header/> {children}
            <Footer/>
        </>
    )
}

export default layout
