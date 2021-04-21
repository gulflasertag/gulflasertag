import Document, {Html, Head, Main, NextScript} from 'next/document'

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return {
            ... initialProps
        }
    }

    render() {
        return (
            <Html>
                <Head lang="en">
                    <title>Gulf LaserTag</title>
                    <meta name="description" content="An ambitious design that inspires action."/>

                    <link rel="shortcut icon" href="img/favicon.png" type="img/x-icon"/>
                    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous"/>
                </Head>
                <body>
                    <Main/>
                    <NextScript/>
                    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
                    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
                    <script src="/custom_app.js"></script>
                </body>
            </Html>
        )
    }
}

export default MyDocument
